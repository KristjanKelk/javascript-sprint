function printPrettyDate(date) {
  if (!(date instanceof Date)) {
    throw new TypeError('Input must be a Date object');
  }

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayName = days[date.getDay()]; // e.g., "Monday"
  const monthName = months[date.getMonth()]; // e.g., "March"
  const dayOfMonth = date.getDate(); // e.g., 11
  const year = date.getFullYear(); // e.g., 2024

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0'); // e.g., "50"
  const seconds = String(date.getSeconds()).padStart(2, '0'); // e.g., "37"
  const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM

  hours = hours % 12;
  hours = hours ? hours : 12;
  
  const formattedHours = String(hours).padStart(2, '0');
  

  console.log(prettyDate);
}