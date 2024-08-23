function sliceFunc(arr, start, end) {
  // Find the start index using indexOf
  let startIndex = arr.indexOf(start);

  // Find the end index using lastIndexOf (if it's a string/array with potential duplicates)
  let endIndex = arr.lastIndexOf(end);

  // If start or end elements are not found, return an empty array
  if (startIndex === -1 || endIndex === -1) {
    return [];
  }

  // If startIndex is greater than endIndex, return an empty array (invalid slice)
  if (startIndex > endIndex) {
    return [];
  }

  // Use slice to return a shallow slice from startIndex to endIndex + 1
  return arr.slice(startIndex, endIndex + 1);
}
  /*
    arr is a string or array
    sliceFunc should return a shallow slice of arr

    start & end are values of elements/characters in arr.
    these represent the start/end of the slice to be returned.

    the logic for finding start/end indexes must be the same as `Array.indexOf` and `Array.lastIndexOf`.
    slice logic must be the same as `Array.slice`.

    e.g.

    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

    sliceFunc(animals, 'bison', 'duck') ⇒ ['bison', 'camel', 'duck']
  */
