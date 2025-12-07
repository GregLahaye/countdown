import './style.css'

// NSW Public Holidays for 2025 (relevant dates)
const nswPublicHolidays2025 = [
  new Date(2025, 11, 25), // Christmas Day
  new Date(2025, 11, 26), // Boxing Day
];

// Additional excluded dates
const excludedDates = [
  new Date(2025, 11, 12), // 12 December
];

function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6; // Sunday or Saturday
}

function isPublicHoliday(date) {
  return nswPublicHolidays2025.some(holiday =>
    holiday.getDate() === date.getDate() &&
    holiday.getMonth() === date.getMonth() &&
    holiday.getFullYear() === date.getFullYear()
  );
}

function isExcluded(date) {
  return excludedDates.some(excluded =>
    excluded.getDate() === date.getDate() &&
    excluded.getMonth() === date.getMonth() &&
    excluded.getFullYear() === date.getFullYear()
  );
}

function calculateWorkdays() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  // End date is December 29, 2025 (inclusive)
  const endDate = new Date(2025, 11, 29);
  endDate.setHours(23, 59, 59, 999);

  let workdays = 0;
  let currentDate = new Date(now);

  // Count from tomorrow onwards to include partial days properly
  // If we haven't passed end of today, include today
  if (now <= endDate) {
    currentDate.setDate(currentDate.getDate());

    while (currentDate <= endDate) {
      if (!isWeekend(currentDate) && !isPublicHoliday(currentDate) && !isExcluded(currentDate)) {
        workdays++;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }

  return workdays;
}

function updateCountdown() {
  const days = calculateWorkdays();
  document.querySelector('#countdown').textContent = days;
}

document.querySelector('#app').innerHTML = `
  <div class="countdown-container">
    <div class="countdown-display">
      <div id="countdown" class="countdown-number">0</div>
      <div class="countdown-label">days</div>
    </div>
    <div class="target">$4M ARR</div>
  </div>
`;

updateCountdown();
// Update every hour to keep it fresh
setInterval(updateCountdown, 3600000);
