-- Drop restrictive policy and recreate as permissive
DROP POLICY IF EXISTS "Users can view own roles" ON public.user_roles;
CREATE POLICY "Users can view own roles"
  ON public.user_roles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Fix contacts policy too
DROP POLICY IF EXISTS "Admins can manage contacts" ON public.contacts;
CREATE POLICY "Admins can manage contacts"
  ON public.contacts
  FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Fix newsletters admin policy
DROP POLICY IF EXISTS "Admins can manage newsletters" ON public.newsletters;
CREATE POLICY "Admins can manage newsletters"
  ON public.newsletters
  FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role));

DROP POLICY IF EXISTS "Anyone can view published newsletters" ON public.newsletters;
CREATE POLICY "Anyone can view published newsletters"
  ON public.newsletters
  FOR SELECT
  USING (published = true);

-- Fix profiles policies
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
CREATE POLICY "Users can view own profile"
  ON public.profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile"
  ON public.profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile"
  ON public.profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);