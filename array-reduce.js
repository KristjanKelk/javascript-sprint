const arr = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: undefined },
  { name: "Charlie", age: 35 },
];

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
  const totalAge = getTotalSum(arr, 'age');
  const validEntries = arr.filter(person => person.age !== undefined).length;
  return totalAge / validEntries;
}

console.log(getAverageAge(arr));