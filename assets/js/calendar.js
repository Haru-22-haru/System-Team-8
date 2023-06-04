// Get the calendar table body element
const calendarBody = document.getElementById('calendar-body');

// Function to generate and populate the calendar
function generateCalendar(month, year) {
  // Clear the calendar body
  calendarBody.innerHTML = '';

  // Get the number of days in the specified month and year
  const daysInMonth = new Date(year, month, 0).getDate();

  // Get the index of the first day of the month (0-6, where 0 is Sunday)
  const firstDayIndex = new Date(year, month - 1, 1).getDay();

  // Create an array to hold the calendar rows
  const calendarRows = [];

  // Create a new row for the days of the week
  const daysOfWeekRow = document.createElement('tr');

  // Create the cells for the days of the week
  for (let i = 0; i < 7; i++) {
    const cell = document.createElement('th');
    cell.textContent = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i];
    daysOfWeekRow.appendChild(cell);
  }

  // Add the days of the week row to the calendar rows array
  calendarRows.push(daysOfWeekRow);

  // Create the remaining rows for the calendar
  let currentDate = 1;

  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');

      if (i === 0 && j < firstDayIndex) {
        // Empty cells before the first day of the month
        cell.classList.add('empty');
      } else if (currentDate > daysInMonth) {
        // Empty cells after the last day of the month
        cell.classList.add('empty');
      } else {
        // Cells with the date
        cell.textContent = currentDate;
        cell.addEventListener('click', function() {
          selectDate(currentDate, month, year);
        });
        currentDate++;
      }

      row.appendChild(cell);
    }

    // Add the row to the calendar rows array
    calendarRows.push(row);

    if (currentDate > daysInMonth) {
      // Exit the loop if all days of the month have been processed
      break;
    }
  }

  // Append the calendar rows to the calendar body
  calendarRows.forEach(function(row) {
    calendarBody.appendChild(row);
  });
}

// Function to handle date selection
function selectDate(date, month, year) {
  // Perform actions with the selected date, month, and year
  console.log('Date:', date);
  console.log('Month:', month);
  console.log('Year:', year);

  // Clear form inputs
  document.getElementById('month').value = '';
  document.getElementById('date').value = '';
  document.getElementById('time').value = '';

  // Clear the calendar selection
  const selectedCell = document.querySelector('.selected');
  if (selectedCell) {
    selectedCell.classList.remove('selected');
  }

  // Highlight the selected cell
  const calendarCells = document.querySelectorAll('#calendar-body td');
  calendarCells.forEach(function(cell) {
    if (cell.textContent === date.toString()) {
      cell.classList.add('selected');
    }
  });
}

// Handle form submission
const calendarForm = document.getElementById('calendar-form');
calendarForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const month = parseInt(document.getElementById('month').value);
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  // Perform actions with the selected month, date, and time
  console.log('Selected Month:', month);
  console.log('Selected Date:', date);
  console.log('Selected Time:', time);
});

// Load the current month and year
const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
const currentYear = currentDate.getFullYear();

// Generate and populate the calendar for the current month and year
generateCalendar(currentMonth, currentYear);
