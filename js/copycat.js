// console.log("hello world")

// var name = "rosa";
// console.log(name);

// var interestRate = 2;
// interestRate = 1;
// console.log(interestRate)
// const rate = 2;
// console.log(rate)

// var name = "rosa"; //string "" ''
// var age = 20 ; //number
// var isApproved = true; //false boolean
// //undefined //null ??
// console.log(name,age,isApproved)

// // type of ?

// var person = {
//     name: "rosa",
//     age: 20
// };
// // dot notation
// person.age = "twenty six"
// //bracet notation
// person["name"] = "romina"
// var selection = "name"
// person[selection] = "romina"

// console.log(person);

// var x = 10;
// x++;
// console.log(x);
// //-----====--------//
// var x = 10;
// x = x + 1;
// console.log(x)

// var x = 10;
// x = x + 23;
// console.log(x)
// //------====-------یکین//
// var x = 24;
// x += 9;
// console.log(x)

// var y = 5;
// y = y * 4;
// console.log(y)
// //------====-------یکین//
// var y = 6;
// y *= 5;
// console.log(y)
//اگر به جای ور لت بزاریم دستور یکسان روی یک ولیو رو دوباره انجام میده

// let c = 1;
// // console.log(c > 0);
// // console.log(c < 0);
// // console.log(c <= 0);
// // console.log(c >= 0);
// console.log(c == 1);
// console.log(c === 1);

// let c = "1";
// console.log( c==1 ) //true only value
// console.log( c===1 ) //false the value + type will be counted
// console.log(c != 1) //false
// console.log(c !== 1) //true

// //if a customer has more than 100 points,
// //gold ,otherwise     ??? if its true 
// //silver              ::: otherwise

// var points = 150;
// var type = points > 100 ? "gold" : "silver";
// console.log(type)

// var points = 90;
// var type = points > 100 ? "gold" : "silver";
// console.log(type)


// //logical AND && (operator)
// //logical or  ||
// //NOT         !

// // console.log(true && false);
// // console.log(true && true);
// // console.log(false && false);

// // var highIncome = true;
// // var goodCreditstore = true;
// // var eligibleForLoan = highIncome && goodCreditstore ;
// // console.log(eligibleForLoan);

// // var highIncome = true;
// // var goodCreditstore = false;
// // var eligibleForLoan = highIncome || goodCreditstore ;
// // console.log(eligibleForLoan);

// // var highIncome = false;
// // var goodCreditstore = false;
// // var eligibleForLoan = highIncome || goodCreditstore ;
// // console.log(eligibleForLoan);


// var applicationRefuesd = !eligibleForLoan;
// console.log(applicationRefuesd)

// var userColor = "pink";
// var defaultColor = "blue";
// var currentColor = userColor || defaultColor
// console.log(currentColor)

// var userColor = undefined ;
// var defaultColor = "blue";
// var currentColor = userColor || defaultColor
// console.log(currentColor)


// var x = 2 + 3 * 4;
// console.log(x);

// var x = (2 + 3) * 4;
// console.log(x);





// //hour
// //if hour is between 6am and 12pm: good morning!
// //if hour is between 12pm and 6am: good afternoon!
// //otherwise: good evening!
// //if(condition){ statment}

// var hour = 9;
// if(hour >= 6 && hour <12){

//     console.log("good morning")
//     alert("good morning")

// }else if( hour >=12 && hour <6){

//     console.log("good afternoon")
//     alert("good afternoon")

// }
// else{
//     console.log("good evening")
//     alert("good evening")
// }

// var hour = 1;
// if(hour >= 6 && hour < 18){

//     console.log("good morning")
//     alert("good morning")

// }else if( hour >=12 && hour < 18){

//     console.log("good afternoon")
//     alert("good afternoon")

// }
// else{
//     console.log("good evening")
//     alert("good evening")
// }


// // var role;

// // switch (role){
// //     case "guest":
// //         console.log("guest user")
// //         break;

// //     case "moderator":
// //         console.log("moderator user")
// //         break;

// //     default:
// //         console.log("unknown user")

// // }
// // var role = "guest";

// // switch (role){
// //     case "guest":
// //         console.log("guest user")
// //         break;

// //     case "moderator":
// //         console.log("moderator user")
// //         break;

// //     default:
// //         console.log("unknown user")

// // }
// // var role = "moderator";

// // switch (role){
// //     case "guest":
// //         console.log("guest user")
// //         break;

// //     case "moderator":
// //         console.log("moderator user")
// //         break;

// //     default:
// //         console.log("unknown user")

// // }

// var role = "moderator";
// if (role === "guest") {
//     console.log("guest")
// }else if (role === "moderator") {
//     console.log("moderator")
// }else {
//     console.log("unknown user")
// }


// //loop
// // for (initialexpression ; condition ; incrementExpression) i=index condition will run as long as its true
// //{statment}
// for(var i = 0 ; i < 5 ; i++){
//     console.log("hello world" , i)
// }
// for(var i = 1 ; i <= 5 ; i++){
//     console.log("hello world" , i)
// }
// for(var i = 1 ; i <= 5 ; i++){
//     if(i % 2 !== 0 ) console.log(i)
// }
// for(var i = 5 ; i >= 1 ; i--){
//     console.log("hello world" , i)
// }

// //while loop
// var varName = value;
// while (condition)

// var i = 0;
// while ( i <= 5){
//     if(i % 2 !== 0 ) console.log(i);
//     i++;
// }


//do while loop

// var i = 0;
// do{
//     if(i % 2 !== 0 ) console.log(i);
//         i++;
// }while ( i<= 5);


// const person = {
//     name : "rosa",
//     age : 30 

// };
// for ( var key in person)
// console.log(key , person[key]);

// const colors = ["red","green","blue"];
// for (var index in colors)
// console.log(index , colors[index])




// // for-of
// const colors = ["red","green","blue"];
// for (var color of colors)
// console.log(color);

// var i = 0
// while ( i<= 10 ){
//     // if ( i===5 ) break;

//     if ( i % 2 === 0){
//         i++;
//         continue;
//     }

//     console.log(i);
//     i++;
// }



// var number =max(10,3)
// console.log(number)

//  function max(a,b){
//     //  if(a>b) return a;
//     //  return b;
    
//      return (a>b) ? a : b ;
//  }


// function isLandscape(width, height){
//     if (width>height) return true;
//     else return false;
// }


// console.log(isLandscape(800,600))
// function isLandscape(width, height){
//     return (width>height) ? true : false; 
// }

// //???????
// const output = fizzBuzz(3)
// console.log(output);


// function fizzBuzz(input){

// }//????????


// checkSpeed(70)

// function checkSpeed(speed){
//     const speedLimit = 70;
//     const kmPerpoint = 5;

//     if (speed < speedLimit + kmPerpoint)
//     console.log("ok");
//     else{
//         var point = Math.floor((speed - speedLimit) / kmPerpoint);
//         // points++;
//         if (points >=12)
//         console.log("license suspended");
//         else
//         console.log("points",points)
//     }
// }




// showNubers(10);

// function showNubers(limit) {
//     for (var i=0; i<= limit ; i++ ){
    
//     // if (i % 2===0) console.log(i, "even");
//     // else console.log(i ,"odd");

//     const message = (i % 2===0) ? "even" : "odd"
//     console.log(i, message);
// }
// }


// const movie = {
//     title : "a",
//     rating: 4.5,
//     director : "b"
// };
// showProperties(movie);

// function showProperties(obj){
//     for (var key in obj){
//     if (typeof obj[key] === "string")
//     console.log(key, obj[key])}
// }


// const marks = [80,80,50]

// console.log(calculateGrade(marks))

// function calculateGrade(marks){
//     var avarage =calculateAvrage(marks);
    
//     var sum = 0;
//     for (var mark of marks){
//         sum += mark ;
//     var avarage = sum / marks.length;

//     if (avarage >= 0 && avarage <= 59) return "f";
//     if (avarage < 70) return "d";
//     if (avarage < 80 ) return "c";
//     if (avarage < 90 ) return "b";
//     return "a";}
// }

// function calculateGrade(array){
//     var sum = 0;
//     for (var value of array){
//         sum += value ;
//     return sum / array.length;
//     return avarage;
// }}


