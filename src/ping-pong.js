// export function pingPong(goal) {
//   var output = [];
//   for (var i = 1; i <= goal; i++) {
//     if (i % 15 === 0) {
//       output.push("ping-pong");
//     } else if (i % 3 === 0) {
//       output.push("ping");
//     } else if (i % 5 === 0) {
//       output.push("pong");
//     } else  {
//       output.push(i);
//     }
//   }
//   return output;
// }

//Spec test example
export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  debugger;
}

Triangle.prototype.checkType = function() {
  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
    return "not a triangle";
  }
};
