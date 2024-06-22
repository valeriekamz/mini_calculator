document.addEventListener("DOMContentLoaded", function() {
  const dateElement = document.getElementById("date");
  const dayElement = document.getElementById("day");
  const monthElement = document.getElementById("month");
  const yearElement = document.getElementById("year");

  const today = new Date();

  const daysOfWeek = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  const monthsOfYear = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
  ];

  const formattedDate = (today.getDate() < 10 ? "0" : "") + today.getDate();
  dateElement.innerHTML = formattedDate;
  dayElement.innerHTML = daysOfWeek[today.getDay()];
  monthElement.innerHTML = monthsOfYear[today.getMonth()];
  yearElement.innerHTML = today.getFullYear();
});
