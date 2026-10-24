# Archademix

A responsive tutoring and study coaching website, built around the supplied Archademix logo and business presentation.

**Website:** https://archademix.com/

## Files

- `index.html`: content and accessible page structure.
- `styles.css`: navy, ivory and gold styling, including mobile layouts.
- `script.js`: subject tabs, study planner, mobile navigation and contact settings.
- `assets/archademix-logo.jpg`: original supplied logo.

## Preview locally

Run `python -m http.server 8000` from this directory, then open http://localhost:8000.

## Contact and booking

The public enquiry email is **archademix@gmail.com**. Session enquiry buttons open an email draft; the visitor sends it using their own email app. Update `CONTACT` in `script.js` and the email links in `index.html` together when changing the address. A booking URL can also be configured in `CONTACT`. It does not collect, store or submit visitor information. No payment processor or booking service is connected.

## Hosting

GitHub Pages publishes `main` from the repository root. Changes to website files on that branch are automatically published. `.nojekyll` allows the static files to be served directly.

Google Fonts provides the typefaces; system fonts are used if the font service is unavailable. Pricing is AUD $30 per hour per student, as stated in the supplied presentation. No school location, private contact information, unpublished planner products or invented testimonials are included.

## Custom domain

The GitHub Pages custom domain is `archademix.com`. GoDaddy DNS must point the apex (`@`) to GitHub Pages via A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`. Set the `www` CNAME to `mdabashar.github.io`. Enable HTTPS in Pages settings once the certificate has been issued.
