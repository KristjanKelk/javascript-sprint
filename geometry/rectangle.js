class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    let area = this.width * this.height;
    //console.log(`${area} is the area`);
    return area;
  }

  perimeter() {
    let perimeter = 2 * (this.width + this.height);
    //console.log(`${perimeter} is the perimeter`);
    return perimeter;
  }
}

const rectangle = new Rectangle(5, 3);

console.log(rectangle);
rectangle.area();       
rectangle.perimeter();

module.exports = Rectangle;