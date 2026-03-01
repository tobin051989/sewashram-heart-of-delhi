
-- Grant the anon role permission to INSERT into contacts
GRANT INSERT ON public.contacts TO anon;

-- Also ensure authenticated role has full access
GRANT ALL ON public.contacts TO authenticated;
