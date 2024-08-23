function filterOutOddNumbers(numbers) {
  return numbers.filter(number => number % 2 === 0);
}

function filterObjectsByNameLength(str, len) {
  if (!Array.isArray(str)) {
    throw new TypeError('Expected an array of objects');
  }
  return str.filter(str.name.length <= len);
}

function compoundFilter(products) {
  return products.filter(product => 
    product.code.length > 5 &&
    !product.category.includes("special") &&
    product.price > 50 &&
    product.location !== "Underground"
  );
}
