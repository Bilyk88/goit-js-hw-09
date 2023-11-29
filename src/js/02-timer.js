import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputRef = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

let currentDate = new Date();
let targetDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      
    console.log(selectedDates[0]);

    targetDate = selectedDates[0];
    if (selectedDates[0] < currentDate) {
      Notify.failure("Please choose a date in the future");
    } else {
      startBtn.removeAttribute("disabled");
    }
  },
};

flatpickr(inputRef, options);

startBtn.addEventListener('click', onClickStart);

function onClickStart() {

  startBtn.setAttribute("disabled", "disabled");

  const id = setInterval(() => {

    currentDate = new Date();
    const time = targetDate - currentDate;
    const convertTime = convertMs(time);
      
    days.textContent =  addLeadingZero(convertTime.days);
    hours.textContent = addLeadingZero(convertTime.hours);
    minutes.textContent = addLeadingZero(convertTime.minutes);
    seconds.textContent = addLeadingZero(convertTime.seconds);

    if (time <= 0) {
      clearInterval(id);
      days.textContent = addLeadingZero(0);
      hours.textContent = addLeadingZero(0);
      minutes.textContent = addLeadingZero(0);
      seconds.textContent = addLeadingZero(0);
      return;
    }


  }, 1000);
  
    
}

function addLeadingZero(value) {

  return value.toString().padStart(2, '0');

}

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