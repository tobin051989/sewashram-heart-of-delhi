import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

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
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      return new Response(JSON.stringify({ error: "RESEND_API_KEY not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { email, name } = await req.json();

    const subscriberInfo = name ? `${name} (${email})` : email;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Delhi House Society <newsletter@delhihouse.org>",
        to: ["mary@shikharfin.in"],
        subject: `New Subscriber: ${subscriberInfo}`,
        html: `
          <div style="font-family:sans-serif;padding:24px;max-width:500px;">
            <h2 style="color:#333;">New Newsletter Subscriber</h2>
            <p style="color:#555;">A new subscriber has joined the mailing list:</p>
            <table style="border-collapse:collapse;margin:16px 0;">
              <tr><td style="padding:6px 12px;font-weight:bold;color:#333;">Email:</td><td style="padding:6px 12px;color:#555;">${email}</td></tr>
              ${name ? `<tr><td style="padding:6px 12px;font-weight:bold;color:#333;">Name:</td><td style="padding:6px 12px;color:#555;">${name}</td></tr>` : ""}
            </table>
            <p style="font-size:12px;color:#999;margin-top:24px;">This is an automated notification from Delhi House Society.</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("Resend error:", err);
      return new Response(JSON.stringify({ error: "Failed to send notification" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
