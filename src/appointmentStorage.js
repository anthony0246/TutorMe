const STORAGE_KEY = 'appointments';

/*  Turn a Date object into a unique key for the slot.
    • If you want one appointment per *day*, use the first return.
    • If you want one appointment per specific time, use the second. */
function makeDateKey(date) {
  // return date.toISOString().split('T')[0];      // per-day
  return date.toISOString();                       // precise time
}

function loadAppointments() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveAppointments(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function isTutorAvailable(tutor, date) {
  const dateKey = makeDateKey(date);
  const data = loadAppointments();
  return !(data[tutor] && data[tutor].includes(dateKey));
}

export function datePassed(date) {
  const userChosenDate = new Date(date);
  const currDate = new Date();

  if (userChosenDate < currDate) {
    return true;
  }
  return false;
}

export function addAppointment(tutor, date) {
  const dateKey = makeDateKey(date);
  const data = loadAppointments();
  data[tutor] = [...(data[tutor] || []), dateKey];
  saveAppointments(data);
}
