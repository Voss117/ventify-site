# Ventify Marketing Site

Static site for the Ventify Android app. Built with plain HTML/CSS/JS and deployable to GitHub Pages.

## Structure

```
site/
  index.html
  features.html
  pricing.html
  faq.html
  privacy.html
  terms.html
  contact.html
  404.html
  sitemap.xml
  robots.txt
  manifest.webmanifest
  assets/
    logo.png
    images/
  styles/
    main.css
  scripts/
    main.js
```

## Customize

- Replace `SITE_URL` in HTML head tags and `sitemap.xml` with your Pages URL.
- Replace `{PlayLink}`, `{SupportEmail}`, `{SLA}`, `{CompanyInfo}`, `{DataRightsContact}`, `{GoverningLawJurisdiction}` placeholders.
- Update images in `assets/images/` as needed.
- If you have a custom domain, create a `CNAME` file with the domain name.

## Deploy to GitHub Pages (no build step)

1. Create a new GitHub repository, e.g., `ventify-site`.
2. Copy the `site/` contents to the repo root (or push the `site` folder and set Pages source accordingly).
3. Commit and push.
4. In repo Settings → Pages:
   - Source: `Deploy from a branch`
   - Branch: `main` and `/root`
5. Wait a few minutes for deployment. Your site will be available at `https://<username>.github.io/<repo>/`.

If you keep files in a `site/` subfolder, set Pages source to `/docs` or move files to root for simplicity.

## Use this site for Google Play publishing

Once Pages is live, use these in Play Console:

- Privacy Policy URL: `https://<username>.github.io/<repo>/privacy.html`
- Support email (required): set in Play Console and also replace `{SupportEmail}` in `contact.html` and `privacy.html`.
- App website (optional but recommended): `https://<username>.github.io/<repo>/`

Play Console checklist (for an app with no data collection):
- App content → Privacy policy: add the live URL above.
- Policy declarations → Data safety: declare "No data collected" (matches privacy page).
- App content → Target audience and content: set audience; mark ads = No.
- Store listing → Short and full description: you can reuse copy from `index.html` and `features.html`.
- Store listing → Screenshots: upload the images from `Ventify/Images/`.
- Pricing → Set price to $0.99 USD; confirm countries.
- App access, Ads, News, Government apps: all Not applicable (for this app), unless changed later.
- Contact details: support email (and website above, optional).

Tip: ensure the privacy policy URL is publicly accessible over HTTPS and the page clearly states no data collection and provides a contact email.

## Optional: GitHub Actions deploy (for build tools)

This project is static, so Actions aren’t required. If you adopt a build tool later, add a workflow to publish to `gh-pages`.

## License

Proprietary. All rights reserved.


