// Helper function to get the number of days in a month
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
  
  // Function to generate the calendar
  function generateCalendar(year, month) {
    const calendarBody = document.getElementById('calendar-body');
    calendarBody.innerHTML = '';
  
    const firstDay = new Date(year, month - 1, 1).getDay();
    const daysInMonth = getDaysInMonth(year, month);
  
    let date = 1;
  
    for (let i = 0; i < 6; i++) {
      const row = document.createElement('tr');
  
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          const cell = document.createElement('td');
          row.appendChild(cell);
        } else if (date > daysInMonth) {
          break;
        } else {
          const cell = document.createElement('td');
          cell.textContent = date;
          cell.addEventListener('click', function() {
            // Handle date selection logic here
            console.log(`Selected date: ${year}-${month}-${date}`);
          });
          row.appendChild(cell);
          date++;
        }
      }
  
      calendarBody.appendChild(row);
    }
  }
  
  // Function to navigate to the previous month
  function previousMonth() {
    const monthSelect = document.getElementById('month');
    const yearSelect = document.getElementById('year');
  
    let month = parseInt(monthSelect.value);
    let year = parseInt(yearSelect.value);
  
    if (month === 1) {
      month = 12;
      year--;
    } else {
      month--;
    }
  
    monthSelect.value = month;
    yearSelect.value = year;
  
    generateCalendar(year, month);
  }
  
  // Function to navigate to the next month
  function nextMonth() {
    const monthSelect = document.getElementById('month');
    const yearSelect = document.getElementById('year');
  
    let month = parseInt(monthSelect.value);
    let year = parseInt(yearSelect.value);
  
    if (month === 12) {
      month = 1;
      year++;
    } else {
      month++;
    }
  
    monthSelect.value = month;
    yearSelect.value = year;
  
    generateCalendar(year, month);
  }
  
  window.onload = function() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
  
    const monthSelect = document.getElementById('month');
    const yearSelect = document.getElementById('year');
  
    // Populate month options
    for (let i = 1; i <= 12; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = new Date(0, i - 1).toLocaleString('default', { month: 'long' });
      monthSelect.appendChild(option);
    }
  
    // Populate year options
    for (let i = currentYear; i <= currentYear + 10; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      yearSelect.appendChild(option);
    }
  
    // Set initial values for month and year selects
    monthSelect.value = currentMonth;
    yearSelect.value = currentYear;
  
    // Generate calendar for current month
    generateCalendar(currentYear, currentMonth);
  };
  