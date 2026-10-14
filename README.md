# Archademix

A responsive tutoring and study coaching website, built around the supplied Archademix logo and business presentation.

**Website:** https://mdabashar.github.io/archademix/

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
