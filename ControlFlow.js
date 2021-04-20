// let hour = 20;

// if (hour >= 6 && hour < 12)
//     console.log('Good morning');
// else if (hour >= 12 && hour <18)
//     console.log('Good afternoon');
// else
//     console.log('Good evening');

// let role = 'guest';

// switch (role){
//     case 'guest':
//         console.log('Guest user');
//         break;
//     case 'moderator':
//         console.log('Moderator User');
//         break;
//     default:
//         console.log('Unknown User');
// }

// for (let i = 0 ; i<= 5 ; i++){
//     // console.log('Hellow World' , i);
//     if (i % 2 !== 0) console.log(i);
// }

// let i = 0;
// while (i <= 5){
//     if(i % 2 !== 0) console.log(i);
//     i++
// }

// let i = 0;
// do{
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }while (i <= 5);


// const person = {
//     name : 'Amir',
//     age: 27,
// };
// for (let key in person){
//     console.log(key , person[key]);
// }

// const colors = ['red' , 'green' , 'blue'];

// for (let index in colors)
//     console.log(index , colors[index]);

// const colors = ['red' , 'green' , 'blue'];
// for (let color of colors)
//     console.log(color);


// let i = 0;
// while (i <= 10) {
//     // if (i === 5) break;
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

// let number = max(3 , 10);
// console.log(number);

// function max(a , b){
//     return (a > b) ? a : b ;
// }

// console.log(isLandscape(800 , 600));

// function isLandscape(width , height){
//     return (width > height);
// }

// const output = fizzBuzz(5);
// console.log(output);

// function fizzBuzz (input) {

//     if ((input % 3 === 0) && (input % 5 === 0))
//         return 'FizzBuzz';

//     if (typeof input !== 'number')
//       return 'Not a number';

//     if (input % 3 === 0)
//       return 'fizz';

//     if (input % 5 === 0)
//       return 'Buzz';
    
//     return input;
// }


// checkSpeed(50);

// function checkSpeed(speed){
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed <= speedLimit + kmPerPoint){
//         console.log('Ok');
//         return
//     }
//     const points = Math.floor((speed - speedLimit) /kmPerPoint);
//     if (points >= 12)
//         console.log('License suspended');
//         else
//           console.log('Points' , points)
// }


// showNumbers(10);

// function showNumbers(limit){
//     for (let i = 0 ; i <= limit ; i++){
//         // if(i % 2 === 0) console.log(i , 'EVEN');
//         // else console.log(i , 'ODD');

//         const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
//         console.log(i , message);
//     }
// }

// const array = [0 , null, undefined, '', 2, 3];

// console.log(countTruthy(array));

// function countTruthy(array){
//     let count = 0;
//     for (value of array)
//       if (value !== false || value !== undefined)
//         count++;
//     return count;
// }


// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// showProperties(movie);

// function showProperties(obj){
//     for (let key in obj){
//         if (typeof obj[key] === 'string')
//             console.log(key, obj[key]);
//     }
// }


// console.log(sum(10));

// function sum (limit) {
//     let sum =0;
    
//     for (let i = 0; i <= limit; i++)
//         if (i %3 === 0 || i % 5 === 0)
//         sum += i;

//     return sum;
// }

// const marks = [80 , 80 , 50];

// console.log(calculateGrade(marks));
// function calculateGrade(marks){
//     const average = calculateAverage(marks);
//     if (average < 60) return 'F';
//     if (average < 70) return 'D';
//     if (average < 80) return 'C';
//     if (average < 90) return 'B';
//     return 'A'
// }

// function calculateAverage(array){
//     let sum = 0;
//     for (let value of array)
//         sum += value;
//     return  sum / array.length;
 
// }


// showStars(10);

// function showStars(rows) {
//     for (let row = 1 ; row <= rows; row++) {
//         let pattern = '';
//         for (let i = 0; i< row; i++)
//         pattern += '*';
//     console.log(pattern);
//     }
// }


showPrimes(10);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrime) console.log(number);
}
    function isPrime(number){
        let isPrime = true;
        for (let factor = 2; factor < number; factor++)
            if (number % factor === 0)
                return false;
        return true;
}