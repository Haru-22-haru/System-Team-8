const isLeapYear = (year) => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

const getFebDays = (year) => {
  return isLeapYear(year) ? 29 : 28;
};

let calendar = document.querySelector('.calendar');
const month_names = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];
let month_picker = document.querySelector('#month-picker');
let month_list = calendar.querySelector('.month-list');

let year_month_picker = document.querySelector('#year-month-picker');

year_month_picker.onclick = () => {
  month_list.classList.toggle('hideonce');
  month_list.classList.toggle('show');
};


const generateCalendar = (month, year) => {
  let calendar_days = document.querySelector('.calendar-days');
  calendar_days.innerHTML = '';
  let calendar_header_year = document.querySelector('#year');
  let days_of_month = [
    31, getFebDays(year), 31, 30, 31, 30,
    31, 31, 30, 31, 30, 31
  ];
  
  let currentDate = new Date();
  month_picker.innerHTML = month_names[month];
  calendar_header_year.innerHTML = year;
  let first_day = new Date(year, month);

  for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
    let day = document.createElement('div');
    if (i >= first_day.getDay()) {
      let dayNumber = i - first_day.getDay() + 1;
      day.innerHTML = dayNumber;

      if (
        dayNumber === currentDate.getDate() &&
        year === currentDate.getFullYear() &&
        month === currentDate.getMonth()
      ) {
        day.classList.add('current-date');
      }

      if (isDayFullyBooked(dayNumber, month, year)) {
        day.classList.add('fully-booked');
      }
    }
    calendar_days.appendChild(day);
    day.addEventListener('click', () => selectDay(day));
  }
};



// Function to check if a day is fully booked
const isDayFullyBooked = (day, month, year) => {
  // Example logic to determine if a day is fully booked
  // You can replace this with your own logic
  const fullyBookedDates = [5, 10, 15, 20]; // Array of fully booked dates

  // Check if the day is present in the fully booked dates array
  return fullyBookedDates.includes(day);
};


month_names.forEach((e, index) => {
  let month = document.createElement('div');
  month.innerHTML = `<div> ${e} </div>`;
  month_list.append(month);
  month.onclick = () => {
    currentMonth.value = index;
    generateCalendar(currentMonth.value, currentYear.value);
    month_list.classList.replace('show', 'hideonce');
  };
});

(function () {
  month_list.classList.add('hideonce');
})();

document.querySelector('#pre-year').onclick = () => {
  if (currentMonth.value === 0) {
    --currentYear.value;
    currentMonth.value = 11;
  } else {
    --currentMonth.value;
  }
  generateCalendar(currentMonth.value, currentYear.value);
};

document.querySelector('#next-year').onclick = () => {
  if (currentMonth.value === 11) {
    ++currentYear.value;
    currentMonth.value = 0;
  } else {
    ++currentMonth.value;
  }
  generateCalendar(currentMonth.value, currentYear.value);
};

let currentDate = new Date();
let currentMonth = { value: currentDate.getMonth() };
let currentYear = { value: currentDate.getFullYear() };
generateCalendar(currentMonth.value, currentYear.value);

const todayButton = document.querySelector('#today-button');
const tomorrowButton = document.querySelector('#tomorrow-button');
const nextWeekButton = document.querySelector('#next-week-button');
const nextMonthButton = document.querySelector('#next-month-button');
const nextYearButton = document.querySelector('#next-year-button');

// Array to store all the quick action buttons
const quickActionButtons = [todayButton, tomorrowButton, nextWeekButton, nextMonthButton, nextYearButton];

// Function to reset the button styles and remove the magenta color
const resetButtonStyles = () => {
  quickActionButtons.forEach((button) => {
    button.style.backgroundColor = '';
  });
};

// Function to mark the selected button as magenta and perform the corresponding action
const markSelectedButton = (button) => {
  resetButtonStyles();
  button.style.backgroundColor = 'rgba(255, 0, 255, 0.605)';
};

todayButton.onclick = () => {
  const currentDate = new Date();
  currentMonth.value = currentDate.getMonth();
  currentYear.value = currentDate.getFullYear();

  generateCalendar(currentMonth.value, currentYear.value);

  const currentDay = currentDate.getDate();
  const calendarDays = document.querySelectorAll('.calendar-days div');

  calendarDays.forEach((day) => {
    const dayNumber = parseInt(day.innerHTML);
    if (dayNumber === currentDay) {
      day.style.backgroundColor = 'rgba(0, 0, 0, 0.24)';
      day.style.color = '#A80CA6';
    } else {
      day.style.backgroundColor = '';
    }
  });

  markSelectedButton(todayButton);
};


tomorrowButton.onclick = () => {
  const currentDate = new Date();
  const tomorrowDate = new Date();
  tomorrowDate.setDate(currentDate.getDate() + 1);
  const tomorrowDay = tomorrowDate.getDate();
  const calendarDays = document.querySelectorAll('.calendar-days div');

  calendarDays.forEach((day) => {
    const dayNumber = parseInt(day.innerHTML);
    if (dayNumber === tomorrowDay) {
      day.style.backgroundColor = 'rgba(0, 0, 0, 0.24)';
      day.style.color = '#A80CA6';
    } else {
      day.style.backgroundColor = '';
    }
  });

  markSelectedButton(tomorrowButton);
};

nextWeekButton.onclick = () => {
  const currentDate = new Date();
  const nextWeekDate = new Date();
  nextWeekDate.setDate(currentDate.getDate() + 7);
  const nextWeekDay = nextWeekDate.getDate();
  const calendarDays = document.querySelectorAll('.calendar-days div');

  calendarDays.forEach((day) => {
    const dayNumber = parseInt(day.innerHTML);
    if (dayNumber === nextWeekDay) {
      day.style.backgroundColor = 'rgba(0, 0, 0, 0.24)';
      day.style.color = '#A80CA6';
    } else {
      day.style.backgroundColor = '';
    }
  });

  markSelectedButton(nextWeekButton);
};

nextMonthButton.onclick = () => {
  if (currentMonth.value === 11) {
    ++currentYear.value;
    currentMonth.value = 0;
  } else {
    ++currentMonth.value;
  }

  generateCalendar(currentMonth.value, currentYear.value);

  const currentDate = new Date();
  const selectedDate = new Date(currentYear.value, currentMonth.value, currentDate.getDate());
  const selectedDay = selectedDate.getDate();
  const calendarDays = document.querySelectorAll('.calendar-days div');

  calendarDays.forEach((day) => {
    const dayNumber = parseInt(day.innerHTML);
    if (dayNumber === selectedDay) {
      day.style.backgroundColor = 'rgba(0, 0, 0, 0.24)';
      day.style.color = '#A80CA6';
    } else {
      day.style.backgroundColor = '';
    }
  });

  markSelectedButton(nextMonthButton);
};

nextYearButton.onclick = () => {
  ++currentYear.value;

  generateCalendar(currentMonth.value, currentYear.value);

  const currentDate = new Date();
  const selectedDate = new Date(currentYear.value, currentMonth.value, currentDate.getDate());
  const selectedDay = selectedDate.getDate();
  const calendarDays = document.querySelectorAll('.calendar-days div');

  calendarDays.forEach((day) => {
    const dayNumber = parseInt(day.innerHTML);
    if (dayNumber === selectedDay) {
      day.style.backgroundColor = 'rgba(0, 0, 0, 0.24)';
      day.style.color = '#A80CA6';
    } else {
      day.style.backgroundColor = '';
    }
  });

  markSelectedButton(nextYearButton);
};
