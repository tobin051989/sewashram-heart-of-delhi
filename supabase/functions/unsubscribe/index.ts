import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
  const url = new URL(req.url);
  const email = url.searchParams.get("email");

  if (!email) {
    return new Response("<h1>Invalid unsubscribe link</h1>", {
      status: 400,
      headers: { "Content-Type": "text/html" },
    });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  const { error } = await supabase
    .from("contacts")
    .update({ subscribed: false })
    .eq("email", email);

  if (error) {
    console.error("Unsubscribe error:", error);
    return new Response(
      `<html><body style="font-family:sans-serif;text-align:center;padding:60px;"><h1>Something went wrong</h1><p>Please try again later.</p></body></html>`,
      { status: 500, headers: { "Content-Type": "text/html" } }
    );
  }

  return new Response(
    `<html><body style="font-family:sans-serif;text-align:center;padding:60px;"><h1>Unsubscribed</h1><p>You have been successfully unsubscribed from Delhi House Society newsletters.</p></body></html>`,
    { status: 200, headers: { "Content-Type": "text/html" } }
  );
});
