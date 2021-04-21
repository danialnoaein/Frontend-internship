// let  circle = {
//     radius:1,
//     location:{
//         x:1,
//         y:1
//     },
//     draw : function(){
//         console.log("draw")
//     }
// };
// circle.draw();


// // ......................factory function.............// //

// // ????????????????????

// function creatCircle(radius){
//     return {
//     radius,
//     draw : function(){
//        console.log("draw");
//         },
// };
// }
// const circle = creatCircle (1);
// circle.draw();

// // ?????????????????????


// // // ................constructor function................// //


// function Circle(radius){
//     console.log("this",this);
//     this.radius = radius ;
//     this.draw = function (){
//         console.log("draw");
//     }

// };

// // //Circle.                            // // circle is an object .methods purple .properties blue
// Circle.call({}, 1);
// Circle.apply({}, []);
// // // ba hm barabar || an ina 
// const another = new Circle(1);



// // // value type
// var x =10 ;
// var y = x ;
//  x = 20;


// // // refrence type


// var x = {value :10};
// var y = x ;

// x.value = 20 ;

// //value type
// var number = 10 ;

// function increase(number){

//     number++;
// }
// increase(number);
// console.log(number);


// // // refrence type


// var obj = {value : 10 } ;

// function increase(obj){
//     obj.value++;
// }
// increase(obj);
// console.log(obj);


// // // dynamic we can add additional stuff (properties.....)
// function Circle(radius){
    
//     this.radius = radius ;
//     this.draw = function (){
//         console.log("draw");
//     }

// };
// var circle = new Circle(1);

// circle.location = {x :1};
// circle["location"] = {x:1}

// var propertyname = "center-location";// space - ,.....
// circle[propertyname] = {x :1};

// delete circle.location;
// delete circle["location"];


// // //abstraction

// function Circle(radius){

//     var color = "red";

//     this.radius = radius ;

//     // this.defaultLocation = {x:0 ,y:0};
//     var defaultLocation = {x:0 ,y:0};

//     // this.coumputeOptimumLocation = function(){
//     // }   
//      var coumputeOptimumLocation = function(){
//     }
//     this.draw = function (){
//         // this.coumputeOptimumLocation();
//         coumputeOptimumLocation();


//         console.log("draw");
//     }

// };
// const circle = new Circle(10);




// function Circle(radius){

//     this.radius = radius ;

//     var defaultLocation = {x:0 ,y:0};

//     this.getDefaultLocation = function(){
//         return defaultLocation;
//     }

//     this.draw = function (){
        
        
//         console.log("draw");
//     }

//     Object.defineProperty(this, "defaultLocation",
//     {get: function(){
//         return defaultLocation;
//     },
//     set: function(value){

//         if (!value.x || ! value.y)
//         throw new console.error("invalid location.");
//         defaultLocation = value;

//     }
// });
// };
// const circle = new Circle(10);
// // circle.getDefaultLocation();
// circle.defaultLocation;
// circle.draw();






