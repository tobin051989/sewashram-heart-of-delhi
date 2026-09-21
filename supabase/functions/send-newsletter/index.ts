import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!resendApiKey) {
      return new Response(
        JSON.stringify({ error: "RESEND_API_KEY not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Verify the user is admin
    const supabaseAuth = createClient(supabaseUrl, Deno.env.get("SUPABASE_ANON_KEY")!, {
      global: { headers: { Authorization: authHeader } },
    });

    const { data: claimsData, error: claimsError } = await supabaseAuth.auth.getClaims(
      authHeader.replace("Bearer ", "")
    );

    if (claimsError || !claimsData?.claims) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const userId = claimsData.claims.sub as string;

    // Use service role to check admin and fetch data
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data: roleData } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId)
      .eq("role", "admin")
      .maybeSingle();

    if (!roleData) {
      return new Response(JSON.stringify({ error: "Admin access required" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { newsletterId } = await req.json();

    // Fetch the newsletter
    const { data: newsletter, error: nlError } = await supabase
      .from("newsletters")
      .select("*")
      .eq("id", newsletterId)
      .single();

    if (nlError || !newsletter) {
      return new Response(JSON.stringify({ error: "Newsletter not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Fetch all subscribed contacts
    const { data: contacts } = await supabase
      .from("contacts")
      .select("email, name")
      .eq("subscribed", true);

    if (!contacts || contacts.length === 0) {
      return new Response(JSON.stringify({ error: "No subscribed contacts found", sent: 0 }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const escapeHtml = (value: string) => value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

    const safeTitle = escapeHtml(newsletter.title);
    const safeContent = newsletter.content ? escapeHtml(newsletter.content).replace(/\n/g, "<br>") : "";
    const safePdfUrl = newsletter.pdf_url ? encodeURI(newsletter.pdf_url) : null;
    const safeDesignUrl = newsletter.email_design_url ? encodeURI(newsletter.email_design_url) : null;

    const style = newsletter.email_style || "editorial";
    const styles = {
      editorial: {
        accent: "#b85c3e",
        accentSoft: "#f8eee9",
        title: "#3d2a24",
        label: "Delhi House Society · Sewa Ashram Newsletter",
      },
      spotlight: {
        accent: "#237f83",
        accentSoft: "#e8f4f3",
        title: "#173b3d",
        label: "Stories of care, hope and transformation",
      },
      minimal: {
        accent: "#5b514c",
        accentSoft: "#f3f1ef",
        title: "#272321",
        label: "DELHI HOUSE SOCIETY",
      },
    };
    const selectedStyle = styles[style as keyof typeof styles] || styles.editorial;
    const designImage = safeDesignUrl
      ? `<img src="${safeDesignUrl}" alt="Newsletter design" style="display:block;width:100%;height:auto;max-height:420px;object-fit:cover;">`
      : "";
    // Route the PDF download through the website's own domain so ad blockers
    // (which often block storage-provider domains) don't stop subscribers.
    const siteUrl = Deno.env.get("SITE_URL") || "https://sewashram-heart-of-delhi.lovable.app";
    const downloadPageUrl = `${siteUrl}/newsletter-download/${newsletter.id}`;
    const pdfLink = safePdfUrl
      ? `<div style="margin:28px 0 6px;text-align:center;"><a href="${downloadPageUrl}" style="display:inline-block;background:${selectedStyle.accent};color:#ffffff;text-decoration:none;padding:13px 22px;border-radius:4px;font-weight:700;">Download the newsletter PDF</a></div>`
      : "";

    const baseContent = `
      <div style="background:#f7f4f1;padding:28px 12px;font-family:Arial,Helvetica,sans-serif;color:#443b37;">
        <div style="max-width:620px;margin:0 auto;background:#ffffff;border:1px solid #e5ded9;">
          ${designImage}
          <div style="height:6px;background:${selectedStyle.accent};"></div>
          <div style="padding:30px 34px 34px;">
            <p style="margin:0 0 12px;color:${selectedStyle.accent};font-size:12px;letter-spacing:1.2px;text-transform:uppercase;font-weight:700;">${selectedStyle.label}</p>
            <h1 style="margin:0 0 24px;color:${selectedStyle.title};font-family:Georgia,serif;font-size:30px;line-height:1.2;font-weight:700;">${safeTitle}</h1>
            ${safeContent ? `<div style="font-size:16px;line-height:1.75;">${safeContent}</div>` : ""}
            ${pdfLink}
          </div>
          <div style="background:${selectedStyle.accentSoft};padding:16px 34px;color:#736862;font-size:12px;line-height:1.5;">Thank you for being part of the Delhi House Society community.</div>
        </div>
      </div>`;

    // Send individual emails so recipients can't see each other
    let sentCount = 0;
    const errors: string[] = [];

    for (let i = 0; i < contacts.length; i++) {
      const contact = contacts[i];

      // Build per-recipient unsubscribe link
      const unsubscribeUrl = `${supabaseUrl}/functions/v1/unsubscribe?email=${encodeURIComponent(contact.email)}`;
       const htmlContent = baseContent + `<p style="margin:20px auto 0;max-width:620px;text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#888;">You received this because you subscribed to Delhi House Society updates.<br><a href="${unsubscribeUrl}" style="color:#888;">Unsubscribe</a></p>`;

      try {
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Delhi House Society <newsletter@delhihouse.org>",
            to: [contact.email],
            subject: newsletter.title,
            html: htmlContent,
          }),
        });

        if (resendResponse.ok) {
          sentCount++;
        } else {
          const err = await resendResponse.json();
          console.error(`Failed to send to ${contact.email}:`, err);
          errors.push(contact.email);
        }
      } catch (e) {
        console.error(`Error sending to ${contact.email}:`, e);
        errors.push(contact.email);
      }

      // Wait 600ms between sends to stay within Resend's 2 req/sec rate limit
      if (i < contacts.length - 1) {
        await new Promise((r) => setTimeout(r, 600));
      }
    }

    return new Response(
      JSON.stringify({ success: true, sent: sentCount, failed: errors.length }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
