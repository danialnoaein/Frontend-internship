// const circle = {
//     radius: 1,
//     location:{
//         x: 1,
//         y: 1
//     },
//     draw: function(){
//         console.log('draw');
//     }
// };
// circle.draw()


// Factory Function
// function createCircle(radius){
//     return{
//         radius,
//         draw: function() {
//             console.log('draw');
//         }
//     }
// };
// const circle = createCircle(1)

// circle.draw()


// Constructor Function
// function Circle(radius){
//     console.log('this' , this);
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }
// const another = new Circle(1)




// function Circle(radius){
//     console.log('this' , this);
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }
// Circle.name()
// const another = new Circle(1)

// const Circle1 = new Function('radius',`
// console.log('this' , this);
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }`);

// const circle = new Circle1(1); <==> Circle1.call({}, 1)

// Circle1.apply({}, [1, 2, 3]);



// let number = 10;

// function increase(number){
//     number++;
// }

// increase(number);
// console.log(number);

// let obj = { value: 10};

// function increase(obj){
//     obj.value++;
// }

// increase(obj);
// console.log(obj);


// function Circle(radius){
//     console.log('this' , this);
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }
// const circle = new Circle(10);

// circle.location = { x: 1 };
// circle['location'] = { x: 1 };

// delete circle.location;  <==> delete circle['location']

// const propertyName = 'center location';
// circle[propertyName] = { x: 1 };



// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }
// const circle = new Circle(10);

// for (let key in circle) {
//     if (typeof circle[key] !== 'function')
//     console.log(key, circle[key]);
// }

// const keys = Object.keys(circle);
// console.log(keys);

// if ( 'radius' in circle)
//     console.log('Circle has a radius.');


// function Circle(radius) {
//     this.radius = radius;

//     let defaultLocation = { x: 0 , y: 0};

//     let computeOptimumLocation = function(factor) {
//         //...
//     }

//     this.draw = function() {
//         this.computeOptimumLocation(0.1);

//         console.log('draw');
//         let x, y;
//     };
// }

// const circle = new Circle(10);
// circle.computeOptimumLocation();
// circle.draw();




function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0 , y: 0};

    this.getDefaultLocation = function() {
        return defaultLocation;
    };

    this.draw = function() {
        console.log('draw');
    };

    Object.defineProperty(this , 'defaultLocation', {
        get : function(){
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || value.y)
                throw new Error('Invalid location.')
                defaultLocation = value;
        }
    });
}

const circle = new Circle(10);
circle.draw();