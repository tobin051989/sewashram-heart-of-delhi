ALTER TABLE public.newsletters
  ADD COLUMN IF NOT EXISTS email_design_url TEXT;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.newsletters TO authenticated;
GRANT ALL ON public.newsletters TO service_role;