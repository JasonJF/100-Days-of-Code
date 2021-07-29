//Inheritance Problem
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */

Rectangle.prototype.area = function(){  //adding a function to a class
    // console.log("Rectangle Area");
    return (this.w * this.h);
}
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle{
   constructor(s){
       super(s,s);      //super sets the parameters for the parent, why can't I give Square it's own area function?
   }
}