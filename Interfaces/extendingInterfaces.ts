interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

var square = <Square>{};
square.color = "Blue";
square.sideLength = 10;
square.penWidth = 5.0;
