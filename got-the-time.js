//let date = new Date();

function printPrettyDate(date) {
  if (!(date instanceof Date)) {
    throw new TypeError('Input must be a Date object');
  }

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;
  
  const formattedHours = String(hours).padStart(2, '0');
 
  const prettyDate = `Today is ${dayName}, ${monthName} ${dayOfMonth}, ${year}, and the time is ${formattedHours}:${minutes}:${seconds} ${ampm}.`;

  console.log(prettyDate);
}

//printPrettyDate(date);
