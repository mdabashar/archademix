'use strict';
const bookingUrl = window.ARCHADEMIX_BOOKING?.url || '';
if (bookingUrl) {
  try {
    const url = new URL(bookingUrl);
    if (url.protocol !== 'https:' || url.hostname !== 'calendar.google.com' || !url.pathname.includes('/appointments/schedules/')) throw new Error('A canonical Google Appointment Schedules URL is required.');
    document.querySelector('#google-booking-link').href = url.href;
    url.searchParams.set('gv', 'true');
    document.querySelector('#appointment-calendar').src = url.href;
    document.querySelector('#calendar-container').hidden = false;
    document.querySelector('#calendar-alternative').hidden = false;
    document.querySelector('#calendar-pending').hidden = true;
  } catch (error) { console.error('The public booking calendar could not be configured.'); }
}
document.querySelector('#booking-year').textContent = new Date().getFullYear();
