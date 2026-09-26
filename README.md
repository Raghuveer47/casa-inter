# CasaArt Interiors — Website

Marketing website for **CASAART INTERIORS**, built with Next.js (App Router), React, JavaScript, Tailwind CSS v4 and Framer Motion.
There is no custom backend: enquiries go straight from the browser to a Google Apps Script Web App, which stores them in Google Sheets and sends email notifications.

```
Visitor → Next.js form → Google Apps Script Web App → Google Sheets → Email notifications
```

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` | The Apps Script Web App URL (ends in `/exec`). |
| `NEXT_PUBLIC_SITE_URL` | Public site URL, used for canonical links, Open Graph and the sitemap. |

While `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` is empty, `npm run dev` **simulates** a successful submission, so the form UI can be tested without a sheet. A production build with no URL shows the error message instead.

## Project structure

```
app/                  Routes: / , /about, /services, /projects, /contact, /journal/[slug]
                      plus robots.js, sitemap.js, icon.svg, opengraph-image.js
components/           One component per homepage section (Hero, BrandIntro, Categories, …)
components/ui/        Shared primitives: LineReveal, ImageReveal, Reveal, Button, ArrowLink, PageHeader
data/                 All content: images, categories, interiors, projects, services, collections, articles
lib/site.js           Brand name, navigation, contact details, socials, studio stats
lib/enquiry.js        Form options, validation and the single fetch() to Apps Script
google-apps-script/   Code.gs for the Google Sheet
```

## Replacing content and images

- **Images.** Every photo is referenced from `data/images.js`. Placeholders are Unsplash photos. To use real CasaArt photography, put the files in `public/images/` and change the value, e.g. `hero: "/images/hero.jpg"`. When no remote images remain, you can remove `remotePatterns` from `next.config.mjs`.
- **Before & After.** In `data/interiors.js`, add a `before` photo to each entry in `beforeAfter`. Until you do, the slider shows a desaturated copy of the "after" photo as a stand-in.
- **Projects, services, categories, collections, articles.** Edit the files in `data/`.
- **Phone, email, address, social links, studio stats.** Edit `lib/site.js`. The current values are **placeholders**. Replace them before launch.

## Google Sheets + Apps Script

1. Create a Google Sheet (for example *CASAART INTERIORS ENQUIRIES*).
2. In the sheet, open **Extensions → Apps Script**. Replace the default code with `google-apps-script/Code.gs`.
3. Set the studio inbox that receives alerts: **Project Settings → Script Properties → Add property** `NOTIFY_EMAIL` = `you@yourdomain.com`. Separate multiple addresses with commas. You can also set `CONFIG.NOTIFY_EMAIL` in the code. The address never appears in the frontend.
4. Select the `setup` function and click **Run**. This creates the `Enquiries` tab with the headers
   `Timestamp | Name | Phone | Email | City | Service | Budget | Message | Source`
   and prompts you to authorise Sheets and Mail access.
5. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Copy the Web App URL (`https://script.google.com/macros/s/…/exec`) into `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`, then restart or redeploy the site.

To check the deployment, open the `/exec` URL in a browser. It should return `{"status":"ok",…}`.

**After you edit `Code.gs`,** go to **Deploy → Manage deployments → Edit → Version: New version**. Otherwise the live URL keeps running the old code.

### What the script does

- Appends each enquiry as a new row. Values that start with `= + - @` are escaped, so user input can't run as a spreadsheet formula.
- Emails the studio a "New CasaArt Interiors Enquiry" summary. Its reply-to is the customer's address.
- Sends the customer a confirmation email if `CONFIG.SEND_CUSTOMER_CONFIRMATION` is `true`.
- Ignores a submission identical to one received in the last 2 minutes, and silently drops bots that fill the hidden honeypot field.
- If an email fails to send (for example, the Gmail daily quota is reached), the row is still saved.

### Why the request is sent as `text/plain`

Apps Script Web Apps can't answer CORS preflight requests. `lib/enquiry.js` posts the JSON body with `Content-Type: text/plain`, which the browser treats as a "simple" request, so no preflight is sent. The script reads `e.postData.contents` and parses it as JSON. Don't change the header to `application/json`.

## Deploying

The site is fully static apart from image optimisation. Deploy it to Vercel, or to any Node host with `npm run build && npm start`. Set both environment variables on the host.
