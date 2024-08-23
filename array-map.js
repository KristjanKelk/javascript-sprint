function convert2DArrayToObjectArray(arr) {
  return arr.map(([key, value]) => ({ [key]: value }));
}
/*
const objects = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 25, city: "Los Angeles" },
]

console.log(convertArrayOfObjectsToStrings(objects))
*/
function convertArrayOfObjectsToStrings(objects) {
  return objects.map(obj => {
    const entries = Object.keys(obj).map(key => {
      const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
      return `${capitalizedKey}: ${obj[key]}`;
    });
    return entries.join(', ');
  });
}

function concatenateStrings(strings, maxLength) {
  return strings.map(str => {
    if (str === undefined) {
      return str;
    } else if (str.length > maxLength) {
      return str.slice(0, maxLength) + '...';
    } else {
      return str;
    }
  });
}
