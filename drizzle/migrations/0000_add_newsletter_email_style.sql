ALTER TABLE public.newsletters
  ADD COLUMN IF NOT EXISTS email_style TEXT NOT NULL DEFAULT 'editorial';

ALTER TABLE public.newsletters
  DROP CONSTRAINT IF EXISTS newsletters_email_style_check;

ALTER TABLE public.newsletters
  ADD CONSTRAINT newsletters_email_style_check
  CHECK (email_style IN ('editorial', 'spotlight', 'minimal'));

GRANT SELECT, INSERT, UPDATE, DELETE ON public.newsletters TO authenticated;
GRANT ALL ON public.newsletters TO service_role;