import { Triangle } from './../src/ping-pong';


// describe('pingPong', function() {
//
//   it('should test whether a number mod 5 is replaced with pong', function() {
//     //Test content will go here.
//     var Output = 5;
//     expect(pingPong(Output)).toEqual(1,2,"ping",4,"pong")
//   });
// });


describe('Triangle', function() {
  var reusableTriangle;

  beforeEach(function() {
    reusableTriangle = new Triangle(5, 5, 5);
  });

  it('should show how beforeEach() works', function() {
    console.log(reusableTriangle);
  });
});

describe('Triangle', function() {
  var reusableTriangle;

  beforeEach(function() {
    reusableTriangle = new Triangle(5, 5, 5);
  });

  it('should show how beforeEach() works', function() {
    console.log(reusableTriangle);
  });
});

describe('Triangle', function() {

  it('should test whether a Triangle has three sides', function() {
    var triangle = new Triangle(3,4,5)
    expect(triangle.side1).toEqual(3)
    expect(triangle.side2).toEqual(4)
    expect(triangle.side3).not.toEqual(6)
  });


  it('should correctly determine whether three sides are not a triangle', function() {
    var triangle = new Triangle(12,3,3)
    console.log(triangle);
    expect(triangle.checkType()).toEqual("not a triangle");
  });
});
