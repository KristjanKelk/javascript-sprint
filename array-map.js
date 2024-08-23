function convert2DArrayToObjectArray(arr) {
  return arr.map(([key, value]) => ({ [key]: value }));
}

function convertArrayOfObjectsToStrings(objects) {
  return objects.map(obj => {
    const entries = Object.keys(obj).map(key => `${key}: ${obj[key]}, `);
    return entries;
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
