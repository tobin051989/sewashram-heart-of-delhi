
-- Disable RLS on newsletters table entirely
ALTER TABLE public.newsletters DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies
DROP POLICY IF EXISTS "Admins can manage newsletters" ON public.newsletters;
DROP POLICY IF EXISTS "Anyone can view published newsletters" ON public.newsletters;

-- Grant full access
GRANT ALL ON public.newsletters TO anon;
GRANT ALL ON public.newsletters TO authenticated;
