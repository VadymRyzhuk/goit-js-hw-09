import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
import "flatpickr/dist/flatpickr.min.css";

// Оголосіть функцію addLeadingZero перед її використанням
function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');

const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');

const currentDate = new Date();
startBtn.disabled = true;
let timerId;



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() - currentDate.getTime() < 0) {
      alert("Please, choose a date in the future!");
    } else {
      startBtn.disabled = false;
      startBtn.addEventListener('click', () => {
        timerId = setInterval(() => {
          const currentTime = new Date();
          const ms = selectedDates[0].getTime() - currentTime.getTime();
          daysSpan.textContent = addLeadingZero(convertMs(ms).days);
          hoursSpan.textContent = addLeadingZero(convertMs(ms).hours);
          minutesSpan.textContent = addLeadingZero(convertMs(ms).minutes);
          secondsSpan.textContent = addLeadingZero(convertMs(ms).seconds);
          if (ms < 1000) {
            clearInterval(timerId);
          }
        }, 1000);
      });
    };
  },
};

const flat = flatpickr(input, options);




