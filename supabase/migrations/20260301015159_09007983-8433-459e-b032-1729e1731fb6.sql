
-- Drop both restrictive policies
DROP POLICY IF EXISTS "Admins can manage contacts" ON public.contacts;
DROP POLICY IF EXISTS "Anyone can subscribe" ON public.contacts;

-- Recreate as PERMISSIVE (default)
CREATE POLICY "Anyone can subscribe"
ON public.contacts
FOR INSERT
TO anon, authenticated
WITH CHECK (subscribed = true);

CREATE POLICY "Admins can manage contacts"
ON public.contacts
FOR ALL
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
