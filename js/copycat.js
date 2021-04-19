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

// showstars(5);

// function showstars(rows) {
//     for (var row = 1; row <= rows; row++){
//         var pattern = "";
//         for (var i = 0; i<row ;i++ )
//         pattern += "*"
//         console.log(pattern)
//     }

// }

// console.log(sum(10));

// function sum(limit) {

//     var sum = 0 ;
//     for (var i = 0; i <= limit ; i++)
//         if (i % 3 === 0 || i % 5 === 0 );
//         sum += i;

//         return sum;
// }

// showPrimes(20);

// function showPrimes(limit){
//     for(var number = 2 ; number <= limit ; number++ ){
//     var isPrime = true;

//         for(var factor=2 ; factor < number ; factor++)
//             if( number % factor === 0){
//             isPrime = false ;
//             break;
//         }

//         if (isPrime) console.log(number);
//     }
// }

// showPrimes(20);

// function showPrimes(limit){
//     for(var number = 2 ; number <= limit ; number++ )
   
//         if (isPrime(number)) console.log(number);
// }
// function isPrime(number){
//         for(var factor=2 ; factor < number ; factor++)
//             if( number % factor === 0)
//             return false;
//         return true;
// }


function sum(numberOne , numberTwo){
//    var sum = parsInt(prompt( 25 , 25));
    var sum = 25 + 20

    // return numberOne + numberTwo
    // console.log(sum)
}
// sum()

// //important

// const numbers = [3,4];

// numbers.push("push adds things at the end",5,8);

// numbers.unshift("adds new elements at the begining");

// numbers.splice(6,0,"adds anythin yo want after first number you give ,second number is how many emelent you want todelet")

// console.log(numbers);



// //finding primitive elemnts
// const numbers = [1,2,3,1,4];

// // indexofمیاد نشون میدخ این چیزی که داخلش گذاشتیم توی
// //مثلا نامبرز هست اگر اره چندمیه

// console.log(numbers.indexOf(1 , 2));//عدد دوم نشون میده عدد بعدی چندمیه
// console.log(numbers.lastIndexOf(1));
// console.log(numbers.indexOf(1) !== -1);//true means this element exist
// console.log(numbers.includes(2));//true means this element exist


// // // finding element objects

// var array = [4,12,3]
// var found = array.find(function(element){
//     return element > 10
// });
// console.log(found)

// const courses = [
//     {id: 1 , name : "rosa"},
//     {id:2 , name : "romina"},
// ];

//  const course = courses.find(function(course){
//    return course.name === "romina";

// });
// console.log(course);

//   // same
// var courses = [
//     {id: 1 , name : "rosa"},
//     {id:2 , name : "romina"},
// ];

//  var course = courses.findIndex(function(course){
//    return course.name === "rosa"; 

// });
// console.log(course);


// // short model of first one
// var array = [4,1,32]
// var found = array.find(element => element > 10);
// console.log(found);


// // // //removing elements

// // const numbers = [1,2,3,4]

// // // // numbers.push() removing =>
// // // const last = numbers.pop();
// // // console.log(numbers);
// // // console.log(last);

// // // // numbers.unshift(); removing =>
// // // const first = numbers.shift();
// // // console.log(numbers);
// // // console.log(first);

// // // // // we want to remove 3
// // // numbers.splice(2 , 1);
// // // console.log(numbers);

// // numbers.splice(1 , 2);
// // console.log(numbers);



// // //emptying an array همه چی توی اری حذف

// let numbers = [1,4,7,9];
// let another = numbers ;
// // // //sloution 1 wont work with const we are changing the value

// // numbers = [];
// //  console.log(numbers);
// //  console.log(another);

// // //1 works if we do not have another refrence (another) to that array 

// // //solution 2  
// // //removes all elemnts

// // numbers.length = 0;

// // console.log(numbers);
// // console.log(another);

// // //solution 3

// // numbers.splice(0, numbers.length);

// // console.log(numbers);
// // console.log(another);

// // // solution 4 
// // // we put pop in a loop

// while  (numbers.length > 0)
// numbers.pop();

// console.log(numbers);
// console.log(another);



// // combine or slice arrays
// // // concat

// // const first = [1,2,3];
// // const second = [4,5,6];

// // const combined = first.concat(second);
// // const slice = combined.slice(2,4);
// // const slice2 = combined.slice(2);
// // const slice3 = combined.slice();


// // console.log(combined);
// // console.log(slice);
// // console.log(slice2);
// // console.log(slice3);


// const first = [{ id :1}];
// const second = [4,5,6];

// const combined = first.concat(second);
// const slice = combined.slice(2,4);
// const slice2 = combined.slice(2);
// const slice3 = combined.slice();


// console.log(combined);
// console.log(slice);
// console.log(slice2);
// console.log(slice3);


// // // iterating an array iterate ->repeat

// const numbers = [1,2,3];

// // // till here only one number will be executed
// for (var number of numbers);
// console.log(number);

// // //will execute all the numbers 

// numbers.forEach(function(number){
//     console.log(number);

// })
// numbers.forEach((number , index) =>console.log(number ,index));



// // // sorting the numbers

// const numbers = [3,2,1];

// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);


// var courses = [
//     {id:2 , name : "script"},
//     {id:1 , name : "java"},
// ]

// courses.sort(function(a , b){

//     if(a.name < b.name) return -1;
//     if(a.name > b.name) return 1;
//     return 0;
    
// });

// console.log(courses);

// var courses = [
//     {id:2 , name : "script"},
//     {id:1 , name : "java"},
// ]

// courses.sort(function(a , b){
    
//     var nameA = a.name.toLowerCase
//     var nameB = b.name.toLowerCase

//     if(nameA < nameB) return -1;
//     if(nameB > nameA) return 1;
//     return 0;
    
// });

// console.log(courses);




// // //filter an array

// var numbers = [1,-1,3,4];

// var filtered = numbers.filter(function(value){

//     return value >= 0;

// });
// console.log(filtered)

// var numbers = [1,-1,3,4];

// var filtered = numbers.filter(value => value <= 0);

// console.log(filtered)




// // // mapping an arry

// var numbers = [1,-1,3,4];

// var filtered = numbers.filter(n => n >= 0);
// var items = filtered.map(n => "<li>" + n + "</li>");

// console.log(items);


// var numbers = [1,-1,3,4];

// var filtered = numbers.filter(n => n >= 0);
// var items = filtered.map(n => "<li>" + n + "</li>");

// var html = "<ul>" + items.join("") + "</ul>" ;

// console.log(html);


// var numbers = [1,-1,3,4];

// var filtered = numbers.filter(n => n >= 0);
// var items = filtered.map(n => {

//     var obj = {value:n};
//     return obj;
// });

// console.log(items);


// // ??????

// const numbers = arrayFromRange(-1,4);

// console.log(numbers);

// function arrayFromRange( min , max ){

//     const outPut = [];
//     for ( var i = min ; i <= max ; i++);
//      outPut.push(i);

//     return outPut;
// };

// // ??????



// const numbers = [1,2,3,4];

// console.log(inCludes(numbers, 1));

// function inCludes(array, searchElement){

//     for(var element of array)
//         if(element === searchElement ) return true;
//     return false ;

// }

// // // ???????
// const numbers =[1,2,3,4];

// const outPut = except(numbers,[1,2]);

// console.log(outPut);

// function except(array, excluded){

//     var outPut =[];
//     for(var element of array)
//     if (!excluded.inCludes(element))
//     outPut.push(element);
//     return outPut;

// }

// // // ???????


// const numbers =[1,2,3,4];

// const count = countOccurences(numbers , 1);

// console.log(count);

// function countOccurences(array,searchElement){

//     var count = 0;
//      for( var element of array)
//      if(element === searchElement) count++;
//      return count;

// }




// var numbers = [1,2,3,4];

// var max = getmax(numbers);

// console.log(max);

// function getmax(array){

//     if(array.length === 0) return undefined ;

//     var max = array[0]
//     for( var w = 1; w < array.length ; w++ )
//     if(array[w] > max)
//     max = array[w];
//     return max;
// }
// // // we use i becuase of index meaning but we can use anything we want
// var numbers = [1,2,3,4,12];

// var max = getmax(numbers);

// console.log(max);

// function getmax(array){

//     if(array.length === 0) return undefined ;

//     var max = array[0]
//     for( var i = 1; i < array.length ; i++ )
//     if(array[i] > max)
//     max = array[i];
//     return max;
// }

// var numbers = [1,2,3,4];

// var max = getmax(numbers);

// console.log(max);

// function getmax(array){

//     if(array.length === 0) return undefined ;

//     return array.reduce((a,b )=> (a > b) ? a : b);
// }



const movie = [
    {title: "a", year: 2017 , rating: 9 },
    {title: "b", year: 2018 , rating: 5 },
    {title: "c", year: 2018 , rating: 6.5 },
    {title: "d", year: 2019 , rating: 8.9 },
    {title: "e", year: 2020 , rating: 10 },
];










