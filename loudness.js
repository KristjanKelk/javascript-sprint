function makeLouder(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      // Check if character is lowercase (a-z)
      if (charCode >= 97 && charCode <= 122) {
          // Convert to uppercase by subtracting 32 from the charCode
          result += String.fromCharCode(charCode - 32);
      } else {
          result += str[i]; // Keep non-lowercase characters as is
      }
  }
  return result;
}

function makeQuieter(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      // Check if character is uppercase (A-Z)
      if (charCode >= 65 && charCode <= 90) {
          // Convert to lowercase by adding 32 to the charCode
          result += String.fromCharCode(charCode + 32);
      } else {
          result += str[i]; // Keep non-uppercase characters as is
      }
  }
  return result;
}