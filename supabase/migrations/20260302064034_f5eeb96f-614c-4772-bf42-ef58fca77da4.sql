
-- Drop the restrictive policies
DROP POLICY IF EXISTS "Admins can manage newsletters" ON public.newsletters;
DROP POLICY IF EXISTS "Anyone can view published newsletters" ON public.newsletters;

-- Recreate as PERMISSIVE policies
CREATE POLICY "Admins can manage newsletters"
  ON public.newsletters FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Anyone can view published newsletters"
  ON public.newsletters FOR SELECT
  USING (published = true);
