# Back-end setup guide (Supabase)

Login, sign up, the Owner dashboard, uploads and emails work only after these steps.

## 1. Create the project
supabase.com > New project (name KCG, strong database password, region close to Chad).

## 2. Create tables and security rules
Supabase > **SQL Editor > New query** > paste all of `supabase/migrations/20260101000000_init.sql` > **Run**.

## 3. Email activation for students
1. **Authentication > Providers > Email**: keep "Confirm email" ON.
2. **Authentication > URL Configuration**: Site URL = your website address
   (for testing: `http://127.0.0.1:5500`; later `https://www.kossomicyberguard.org`).
   Add both under Redirect URLs.
3. **Authentication > Email Templates > Confirm signup**:
   - Subject: `Activate your KCG account / Activez votre compte KCG`
   - Body: `Welcome to Kossomi CyberGuard! Activate your account: {{ .ConfirmationURL }} -- Bienvenue chez Kossomi CyberGuard ! Activez votre compte : {{ .ConfirmationURL }}`

## 4. Reliable email sending
Supabase's built-in sender allows only a few emails per hour. Create a free account at resend.com,
verify your domain, then in Supabase **Authentication > Emails > SMTP Settings** paste the Resend SMTP details.

## 5. Connect the website
Supabase > **Project Settings > API**. Copy **Project URL** and **anon public key** into `config.js`
(`SUPABASE_URL`, `SUPABASE_ANON_KEY`). Put your real email in `EMAIL`. Fill in `PAY` (payment details, prices).

## 6. Make yourself the owner
1. Run the site, **Sign up** with your own email, click the activation link in your inbox.
2. In the SQL Editor run (your email):
   `update public.profiles set role = 'owner' where email = 'YOUR-EMAIL@example.com';`
3. Log in again: an **Owner** button appears in the top menu.

## 7. Automatic emails (Supabase CLI)
Install the CLI (supabase.com/docs/guides/cli), then in the VS Code terminal, inside `kcg-website`:
```
supabase login
supabase link --project-ref YOUR-PROJECT-REF
copy supabase\.env.example supabase\.env      (Windows)   |   cp supabase/.env.example supabase/.env   (Mac/Linux)
# edit supabase/.env with your real values, then:
supabase secrets set --env-file supabase/.env
supabase functions deploy notify --no-verify-jwt
```
(`YOUR-PROJECT-REF` is the code in your Supabase URL: https://**abcdxyz**.supabase.co)

Then **Database > Webhooks > Create** three webhooks to the `notify` function URL, each with the HTTP header
`x-webhook-secret: <your WEBHOOK_SECRET>`:
- table `profiles`, event Insert
- table `enrollments`, event Insert
- table `enrollments`, event Update

## 8. Test
- Sign up with a second email: activation email arrives; you get "New student signed up".
- Student enrolls and sends payment proof: you get "Payment proof to review".
- Owner > Approve: student gets a confirmation email and sees the course.
- Owner uploads a video/PDF: the student sees it in My Learning.

## Custom domain (www.kossomicyberguard.org on GitHub Pages)
1. GitHub repo > Settings > Pages > Custom domain: `www.kossomicyberguard.org` > Save.
2. At your domain registrar's DNS: `CNAME  www  ->  YOUR-USERNAME.github.io` and four `A` records for `@`:
   185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153.
3. Wait for "DNS check successful", tick **Enforce HTTPS**.
4. Update Supabase Site URL and the `SITE_URL` secret to `https://www.kossomicyberguard.org`.

## Notes
- Free Supabase plan: files up to 50 MB each; compress long videos.
- Students see course files only after you approve their payment.
