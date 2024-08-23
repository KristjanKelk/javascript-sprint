function classifyDate(input){
  const today = new Date();
  if (!(input instanceof Date)) {
    throw new TypeError('Input must be a Date object');
  }
  if (input <= today) {
    return "past";
  } else if (input >= today){
    return "future";
  }
};