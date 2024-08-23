var mathObj = {
  abs(a) {
    return math.abs(a);
  },

  isEven: function(a) {
    return (a % 2) == 0;
  },

  isOdd: function(a) {
    return (a % 2) != 0;
 },

 isStrictlyPositive: function(a) {
  return a > 0;
 }
};