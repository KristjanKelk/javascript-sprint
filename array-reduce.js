const arr = [
  { name: "Apple", price: 2.5 },
  { name: "Banana", price: 1.5 },
  { name: "Orange", price: 3 },
  { name: "Mango", price: 4 },
]

function getTotalSum(arr) {
  const initialValue = 0;
  const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    initialValue
  );
  return sumWithInitial;
}

function getTotalFromShoppingBasket(arr) {

  return getTotalSum(arr);
}

console.log(getTotalFromShoppingBasket(arr))

function getAverageAge(arr) {
  return getTotalSum(arr) / arr.length;
}

//console.log(getAverageAge(arr))
