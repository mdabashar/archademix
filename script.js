'use strict';
// Add a public business email or HTTPS booking URL here when ready.
const CONTACT = { email: '', bookingUrl: '' };
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(expanded));
  navigation.classList.toggle('open', expanded);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open');
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.focus();
  }
});
const subjects = {
  maths: { label: 'MATHEMATICS', title: 'From stuck to step by step.', motif: 'x + y', description: 'Build understanding behind the answer. Work through tricky questions, practise methods and learn how to check your reasoning.', items: ['Unpack concepts and worked examples', 'Practise problem-solving strategies', 'Prepare for tests with a clear revision plan'] },
  english: { label: 'ENGLISH', title: 'Find the words. Shape your ideas.', motif: 'Aa', description: 'Turn your ideas into clear writing. Explore texts together, organise your paragraphs and use feedback to strengthen your work.', items: ['Understand texts and assignment questions', 'Plan and structure your writing', 'Make sense of teacher feedback'] },
  science: { label: 'SCIENCE', title: 'Make sense of the why.', motif: 'H₂O', description: 'Connect scientific ideas to the world around you. Break down new terminology and practise explaining what you understand.', items: ['Clarify concepts and key vocabulary', 'Work through questions and explanations', 'Organise revision topic by topic'] },
  humanities: { label: 'GEOGRAPHY & HISTORY', title: 'Connect the bigger picture.', motif: 'N ↗', description: 'Build connections between places, people and events. Learn how to organise evidence and turn information into a clear response.', items: ['Understand context and key concepts', 'Organise research and source material', 'Plan clear, well-supported responses'] }
};
const subjectButtons = [...document.querySelectorAll('[data-subject]')];
function selectSubject(button) {
  const subject = subjects[button.dataset.subject];
  subjectButtons.forEach(tab => { const selected = tab === button; tab.setAttribute('aria-selected', String(selected)); tab.tabIndex = selected ? 0 : -1; });
  document.querySelector('#subject-panel').setAttribute('aria-labelledby', button.id);
  document.querySelector('#subject-label').textContent = subject.label;
  document.querySelector('#subject-title').textContent = subject.title;
  document.querySelector('#subject-description').textContent = subject.description;
  document.querySelector('.subject-motif').textContent = subject.motif;
  document.querySelector('#subject-list').replaceChildren(...subject.items.map(text => { const li = document.createElement('li'); li.textContent = text; return li; }));
}
subjectButtons.forEach((button, index) => {
  button.addEventListener('click', () => selectSubject(button));
  button.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % subjectButtons.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + subjectButtons.length - 1) % subjectButtons.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = subjectButtons.length - 1;
    if (next !== undefined) { event.preventDefault(); selectSubject(subjectButtons[next]); subjectButtons[next].focus(); }
  });
});
const plans = {
  start: { title: 'Make the first step tiny.', steps: [['5 min', 'Pick one task and write down what “finished” looks like.'], ['15 min', 'Work on just the first part. A rough start is enough.'], ['5 min', 'Check your progress and choose your next small step.']] },
  focus: { title: 'Give your attention one job.', steps: [['5 min', 'Put your phone away and clear everything except what you need.'], ['15 min', 'Set a timer and work on one specific question or paragraph.'], ['5 min', 'Take a short break and write down what helped you focus.']] },
  understand: { title: 'Find the exact point you’re stuck.', steps: [['5 min', 'Read one example and mark the first step you don’t understand.'], ['15 min', 'Use your class notes to work through a similar example slowly.'], ['5 min', 'Write one clear question to bring to your teacher or tutor.']] }
};
let activePlan = plans.start;
document.querySelectorAll('[data-focus]').forEach(button => button.addEventListener('click', () => {
  activePlan = plans[button.dataset.focus];
  document.querySelectorAll('[data-focus]').forEach(option => { const selected = option === button; option.classList.toggle('selected', selected); option.setAttribute('aria-pressed', String(selected)); });
  document.querySelector('#plan-title').textContent = activePlan.title;
  document.querySelector('#plan-steps').replaceChildren(...activePlan.steps.map(([time, text]) => { const li = document.createElement('li'); const span = document.createElement('span'); span.textContent = time; li.append(span, document.createTextNode(text)); return li; }));
  document.querySelector('#copy-status').textContent = '';
}));
document.querySelector('#copy-plan').addEventListener('click', async () => {
  const text = 'My Archademix study plan\n' + activePlan.title + '\n\n' + activePlan.steps.map(([time, task]) => time + ': ' + task).join('\n');
  try { await navigator.clipboard.writeText(text); document.querySelector('#copy-status').textContent = 'Copied. Your next small step is ready.'; }
  catch { document.querySelector('#copy-status').textContent = 'Copy is unavailable in this browser. You can select the plan text above.'; }
});
if (CONTACT.email || CONTACT.bookingUrl) {
  const area = document.querySelector('#contact-area');
  const note = document.createElement('p'); note.className = 'launch-description'; note.textContent = 'Tell us the student’s year level, the subject they need help with and what they’d like to work on.';
  const link = document.createElement('a'); link.className = 'button button-navy'; link.textContent = CONTACT.bookingUrl ? 'Enquire about a session ↗' : 'Email a session enquiry ↗';
  link.href = CONTACT.bookingUrl || 'mailto:' + CONTACT.email + '?subject=' + encodeURIComponent('Archademix session enquiry');
  area.replaceChildren(note, link);
}
document.querySelector('#year').textContent = new Date().getFullYear();
