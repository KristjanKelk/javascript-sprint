const location = {
  city: 'Tallinn',
  country: 'Estonia',
}



function getValueFromKey(object, key) {
  return object[key];
}

  function setValueForKey(obj, key) {
    const newObj = { ...obj, ...key };
    return newObj;
}
