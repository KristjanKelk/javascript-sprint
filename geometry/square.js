import { Rectangle } from './rectangle.js';

export class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.side = side;
  }
}

export const square = new Square(4);