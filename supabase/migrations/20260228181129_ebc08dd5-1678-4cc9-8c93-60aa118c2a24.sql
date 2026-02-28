
-- Drop the restrictive policy and recreate as permissive
DROP POLICY IF EXISTS "Anyone can subscribe" ON public.contacts;

CREATE POLICY "Anyone can subscribe"
ON public.contacts
FOR INSERT
TO anon, authenticated
WITH CHECK (subscribed = true);
