function classifyDate(input) {
  const today = new Date();
  
  if (!(input instanceof Date)) {
    throw new TypeError('Input must be a Date object');
  }

  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  const oneYearFromNow = new Date(today);
  oneYearFromNow.setFullYear(today.getFullYear() + 1);

  if (input < oneYearAgo) {
    return "ancient";
  } else if (input <= today) {
    return "past";
  } else if (input > oneYearFromNow) {
    return "distant future";
  } else {
    return "future";
  }
}