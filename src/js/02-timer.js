import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');

flatpickr(input, options);
    const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

