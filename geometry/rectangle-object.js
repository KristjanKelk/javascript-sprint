const rectObj = {
  width: 50,
  height: 30,

  area() {
    return this.width * this.height;
  },

  perimeter() {
    return 2 * (this.width + this.height);
  }
};


console.log(`Initial Area: ${rectObj.area()}`);     
console.log(`Initial Perimeter: ${rectObj.perimeter()}`); 

rectObj.width = 60;
rectObj.height = 40;

console.log(`New Area: ${rectObj.area()}`); 
console.log(`New Perimeter: ${rectObj.perimeter()}`);