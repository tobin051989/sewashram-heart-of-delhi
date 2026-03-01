
-- Disable RLS entirely on contacts table
ALTER TABLE public.contacts DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies
DROP POLICY IF EXISTS "Admins can manage contacts" ON public.contacts;
DROP POLICY IF EXISTS "Anyone can subscribe" ON public.contacts;

-- Ensure anon and authenticated have full access
GRANT ALL ON public.contacts TO anon;
GRANT ALL ON public.contacts TO authenticated;
