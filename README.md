# Archademix

Personal tutoring and study coaching website for Years 6–8.

Website: https://archademix.com/
Booking page: https://archademix.com/booking.html

## Files

- index.html, styles.css and script.js: homepage, subject tabs, study planner and navigation.
- booking.html, booking.css and booking.js: branded booking page and Google Calendar embed.
- booking-config.js: public appointment schedule URL only. Never add credentials or API keys.
- assets/archademix-logo.jpg: original supplied logo.
- CNAME: custom domain for GitHub Pages.

## Bookings

The public Google Calendar Appointment Schedule is owned by archademix@gmail.com. It offers Monday, Wednesday and Friday, 3:45–4:45 pm Australia/Brisbane (AEST, UTC+10), with 60-minute appointments. Fees are AUD $30 per student, or AUD $25 for Kelvin Grove State College students. The form asks for the parent/carer’s name and email, student year level, subject and school-rate eligibility; learning goals are optional.

The schedule checks the owner’s calendar for busy times and sends confirmation email invitations. Current Google defaults allow bookings up to 60 days ahead, with at least 4 hours notice. Manage hours, time off and bookings through Google Calendar. Only the public booking URL is stored in the website; Google handles booking data. No private calendar events or credentials are exposed.

Payments are arranged separately and are not collected by this website. Venue details are provided separately. The public contact email is archademix@gmail.com. Google’s booking page displays the account’s existing name and photo, controlled through the account settings.

## Hosting and preview

GitHub Pages publishes main from the repository root. The .nojekyll file enables plain static hosting. Preserve CNAME when updating the site.

Run `python -m http.server 8000` from this directory and open http://localhost:8000/booking.html to preview. An internet connection is needed to load the public Google booking page. Google Fonts is used for typography, with system-font fallbacks.

## Domain DNS

The custom domain is archademix.com. GoDaddy apex A records are 185.199.108.153, 185.199.109.153, 185.199.110.153 and 185.199.111.153. The www CNAME points to mdabashar.github.io. HTTPS enforcement requires a GitHub-issued certificate.
