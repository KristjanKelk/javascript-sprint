
function getTotalSum(arr, property) {
  const initialValue = 0;
  const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + (currentValue[property] || 0),
    initialValue
  );
  return sumWithInitial;
}

function getTotalFromShoppingBasket(arr) {
  return getTotalSum(arr, 'price');
}

function getAverageAge(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const totalAge = getTotalSum(arr, 'age');
  const validEntries = arr.filter(person => person.age !== undefined).length;
  return totalAge / validEntries;
}

function concatenateObjects(objects) {
  return objects.reduce((accumulator, current) => {
    const { key, value } = current;
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(value);
    return accumulator;
  }, {});
}
