# Kossomi CyberGuard (KCG) website

**Learn · Protect · Stay Secure — Building a Safer Digital Chad.**

Front end (what visitors see) + back end (Supabase: login, database, file uploads, automatic emails).

## Project structure
```
kcg-website/
├─ index.html          page structure
├─ styles.css          design (colors, layout)
├─ app.js              all website logic (languages, courses, portal, owner dashboard)
├─ config.js           YOUR settings: Supabase keys, owner email, payment details, prices
├─ images/             logos, founder photo, certificate background
├─ supabase/
│  ├─ migrations/20260101000000_init.sql   database tables + security rules
│  ├─ functions/notify/index.ts            automatic emails (owner + students)
│  ├─ config.toml
│  └─ .env.example                         secrets template (copy to supabase/.env)
└─ docs/SETUP-GUIDE.md                     step-by-step backend setup
```

## Run it on your computer (VS Code)
1. Install **VS Code** and **Node.js** (nodejs.org).
2. VS Code > **File > Open Folder** > choose `kcg-website`.
3. Install the recommended extension **Live Server** (VS Code will suggest it).
4. Right-click `index.html` > **Open with Live Server**. The site opens at http://127.0.0.1:5500
   (Alternative without the extension: open the VS Code terminal and run `npm start`.)
5. Do not double-click `index.html`: certificates and images need a local web server.

Until you fill in `config.js`, the site works but **Log in / Sign up show "not connected"**.

## Connect the back end
Follow `docs/SETUP-GUIDE.md` (about 30 minutes): create a free Supabase project, run the SQL,
paste the URL and anon key in `config.js`, deploy the `notify` function, add the webhooks.

## Put it on GitHub
```
git init
git add .
git commit -m "KCG website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/kcg-website.git
git push -u origin main
```
Then GitHub > **Settings > Pages** > Deploy from branch `main` / root.
For your domain, see `docs/SETUP-GUIDE.md` (section "Custom domain").

## Security rules
- Only the Supabase **anon** key goes in `config.js`. Never the `service_role` key.
- Never commit `supabase/.env`.
