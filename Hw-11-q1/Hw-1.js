class Shape {
  constructor(shapeName) {
    this.shapeName = shapeName;
  }
}

class Polygon extends Shape {
  constructor(shapeName, width, height) {
    super(shapeName);
    this.width = width;
    this.height = height;
  }
  calculateArea = () => Math.pow(this.width, 2);
  calculatePerimeter = () => (this.width + this.height) * 2;
}
class NonPolygon extends Shape {
  constructor(shapeName, radius) {
    super(shapeName);
    this.radius = radius;
  }
  calculateArea = () => (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
  calculatePerimeter = () => 2 * Math.PI * this.radius;
}

class Square extends Polygon {
  constructor(shapeName, width) {
    super(shapeName, width);
  }
  calculateArea = () => this.width * 2;
  calculatePerimeter = () => this.width * 4;
}
class Circle extends NonPolygon {
  constructor(shapeName, radius) {
    super(shapeName, radius);
  }
}
class Cylinder extends NonPolygon {
  constructor(shapeName, radius, height) {
    super(shapeName, radius);
    this.height = height;
  }
  calculateArea = () =>
    (2 * Math.PI * this.radius * (this.radius + this.height)).toFixed(2);
  calculatePerimeter = () => 4 * Math.PI * this.radius;
}

const squ = new Polygon("squer", 10, 10);
console.log(squ.calculateArea());
const cyl = new Cylinder("cyl", 3, 10);
console.log(cyl.calculateArea());
