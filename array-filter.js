function filterOutOddNumbers(numbers) {
  return numbers.filter(number => number % 2 === 0);
}

function filterObjectsByNameLength(objects, maxLength) {
  if (!Array.isArray(objects)) {
    throw new TypeError('Expected an array of objects');
  }
  return objects.filter(object => object.name.length <= maxLength);
}

function compoundFilter(products) {
  return products.filter(product => 
    product.code.length > 5 &&
    !product.category.includes("special") &&
    product.price > 50 &&
    product.location !== "Underground"
  );
}
