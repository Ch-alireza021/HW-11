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
  calculateArea = () => this.width * this.height;
  calculatePerimeter = () => (this.width + this.height) * 2;
}

class NonPolygon extends Shape {
  constructor(shapeName, radius) {
    super(shapeName);
    this.radius = radius;
  }
  calculateArea = () => (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
  calculatePerimeter = () => (2 * Math.PI * this.radius).toFixed(2);
}

class Square extends Polygon {
  constructor(width) {
    super("Square", width);
  }
  calculateArea = () => Math.pow(this.width, 2);
  calculatePerimeter = () => this.width * 4;
}
class Circle extends NonPolygon {
  constructor(radius) {
    super("Circle", radius);
  }
}
class Cylinder extends Circle {
  constructor(radius, height) {
    super("Cylinder");
    this.height = height;
    this.radius = radius;
  }
  calculateArea = () =>
    (2 * Math.PI * this.radius * (this.radius + this.height)).toFixed(2);
  calculatePerimeter = () => 4 * Math.PI * this.radius;
}

// ------------------------------------------------------------
const btn = document.querySelector(".btn");
const selectShape = document.querySelector("#shape");
let radius = document.querySelector(".Radius");
let width = document.querySelector(".width");
let Height = document.querySelector(".Height");

selectShape.addEventListener("change", showInput);

btn.addEventListener("click", function () {
  const input = Object.fromEntries(new FormData(document.forms[0]).entries());
  console.log(input);

  console.log(input.shape);

  if (input.shape === "Polygon") {
    const useClass = new Polygon("Polygon", input.width, input.Height);
    console.log(input.width);
    console.log(input.Height);
    calculate(useClass);
  } else if (input.shape === "Square") {
    const useClass = new Square(input.width);
    calculate(useClass);
  } else if (input.shape === "Circle") {
    const useClass = new Circle(input.Radius);
    calculate(useClass);
  } else if (input.shape === "Cylinder") {
    const useClass = new Circle(input.Radius, input.Height);
    calculate(useClass);
  }
});
// -----------------------------------------------------------
// show input width and height or radius
function showInput() {
  const input = Object.fromEntries(new FormData(document.forms[0]).entries());
  if (input.shape === "Polygon") {
    display("none", "block", "block");
  } else if (input.shape === "Circle") {
    display("block", "none", "none");
  } else if (input.shape === "Square") {
    display("none", "block", "none");
  } else if (input.shape === "Cylinder") {
    display("block", "none", "block");
  }
}
// ----------------------------------------------------------
// show Perimeter and Area result on html
function show(Perimeter, Area) {
  const result = document.querySelectorAll(".resultShow");
  console.log(result);
  result[0].textContent = Perimeter;
  result[1].textContent = Area;
}
// -------------------------------------------------------
// display none or block
function display(radiusDisplay, widthDisplay, HeightDisplay) {
  radius.style.display = radiusDisplay;
  width.style.display = widthDisplay;
  Height.style.display = HeightDisplay;
}
// -----------------------------------------------------------
function calculate(useClass) {
  console.log(useClass);
  const Perimeter = useClass.calculateArea();
  const Area = useClass.calculatePerimeter();
  show(Perimeter, Area);
}
