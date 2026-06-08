
-- contacts: enable RLS, allow public to subscribe, only admins to read/update/delete
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe"
  ON public.contacts FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can view contacts"
  ON public.contacts FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update contacts"
  ON public.contacts FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete contacts"
  ON public.contacts FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- newsletters: enable RLS, public can read published, admins manage all
ALTER TABLE public.newsletters ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published newsletters"
  ON public.newsletters FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Admins can view all newsletters"
  ON public.newsletters FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert newsletters"
  ON public.newsletters FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update newsletters"
  ON public.newsletters FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete newsletters"
  ON public.newsletters FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- storage: restrict listing of the newsletters bucket to admins
-- public file URLs continue to work because the bucket is public
DROP POLICY IF EXISTS "Anyone can read newsletter files" ON storage.objects;

CREATE POLICY "Admins can list newsletter files"
  ON storage.objects FOR SELECT
  TO authenticated
  USING (bucket_id = 'newsletters' AND public.has_role(auth.uid(), 'admin'));
