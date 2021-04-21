// function Circle(radius){
//         this.radius = radius;
//         this.draw = function(){
//             console.log('draw');
//         }
//     }

// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }

//     draw() {
//         console.log ('draw');
//     }
// }

// const c = new Circle();
// sayHello(); 
// function sayHello() {    // Hoisted

// }

// const sayGoodbye = function() {};    // Not Hoisted

// class Circle {         // Not Hoisted

// }

// const Square = class {       // Not Hoisted

// }


// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }
//     // Instance Method
//     draw() {
//     }

//     // Static Method
//     static parse (str) {
//         const radius = JSON.parse(str).radius;
//         return new Circle(radius);
//     }
// }

// const circle = Circle.parse('{"radius" : 1 }');
// console.log(circle);

// class Math2 {
//     static abs(value) {
//         // ...
//     }
// }
// Math2.abs()


// const Circle = function() {
//     this.draw = function() {console.log(this); }
// };

// const c = new Circle();
//     //Method Call
// c.draw();

// const draw = c.draw;

// // Function Call
// draw();


// const _radius = Symbol();
// const _draw = Symbol();

// class Circle {
//     constructor(radius) {
//         this[_radius] = radius;
//     }
//     [_draw]() {

//     }
// }

// const c = new Circle(1);
// const key = Object.getOwnPropertySymbols(c)[0];
// console.log(c[key]);




// const _raduis = new WeakMap ();
// const _move = new WeakMap ();
// const privateProps = new WeakMap ();

// class Circle {
//     constructor (radius) {
//         _raduis.set(this, radius);

//         _move.set(this, () => {
//             console.log('move , this');
//         });
//     }
//     draw() {
//         _move.get(this)();
//         console.log
//     }
// }
// const c = new Circle(1);
// console.log(c.draw)




// const _raduis = new WeakMap ();

// class Circle{
//     constructor(radius) {
//         _raduis.set(this, radius);
//     }
//     get radius() {
//         return _raduis.get(this);
//     }
//     set radius(value) {
//         if (value <= 0) throw new Error('invalid radius');
//         _raduis.set(this, value);
//     }
// }
// const c = new Circle(1);
// console.log(c.radius)



// class Shape {
//     constructor(color) {
//         this.color = color;
//     }

//     move() {
//         console.log('move');
//     }
// }

// class Circle extends Shape {
//     constructor(color, radius) {
//         super(color);
//         this.radius = radius;
//     }

//     draw() {
//         console.log('draw');
//     }
// }

// const c = new Circle('red', 1);
// console.log(c)



// class Shape {

//     move() {
//         console.log('move');
//     }
// }

// class Circle extends Shape {
//     move() {
//         super.move();
//         console.log('circle move');
//     }
// }

// const  c = new Circle();
// console.log(c)



const _items = new WeakMap();

class Stack {
    constructor(){
        _items.set(this, []);
    }
    push(obj){
        _items.get(this).push(obj);
    }
    pop() {
        const items = _items.get(this);

        if (items.length === 0)
            throw new Error('Stack is empty.')

        return items.pop();
    }
    peek() {
        const items = _items.get(this);

        if (items.length === 0)
            throw new Error('Stack is empty.')

        return items[items.length - 1]
    }

    get count() {
        return _items.get(this).length
    }
}