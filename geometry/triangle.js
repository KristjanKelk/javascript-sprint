class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  perimeter() {
    return this.sideA + this.sideB + this.sideC;
  }

  area() {
    const p = this.perimeter() / 2;
    return Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
  }
}

const triangle = new Triangle(3, 4, 5);

module.exports = { Triangle, triangle };
