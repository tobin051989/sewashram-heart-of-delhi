
-- Fix: Make admin policy permissive too
DROP POLICY IF EXISTS "Admins can manage contacts" ON public.contacts;

CREATE POLICY "Admins can manage contacts"
ON public.contacts
FOR ALL
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
