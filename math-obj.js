var mathObj = {
  abs(a) {
    return Math.abs(a);
  },

  isEven: function(a) {
    return (a % 2) == 0;
  },

  isOdd: function(a) {
    return (a % 2) != 0;
  },

  isStrictlyPositive: function(a) {
    return a > 0;
  },
  min: (a, b) => Math.min(a, b),

  max: (a, b) => Math.max(a, b),
};
