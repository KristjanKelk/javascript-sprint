function convert2DArrayToObjectArray(arr) {
  return arr.map(([key, value]) => ({ [key]: value }));
}

function convertArrayOfObjectsToStrings(objects) {
  return objects.map(obj => {
    return `Name: ${obj.name}, Age: ${obj.age}, City: ${obj.city}`;
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
