// const numbers = [3 ,4]
// //End
// numbers.push(5 ,6);

// //Beginning
// numbers.unshift(1,2)

// console.log(numbers)
// //Middle
// numbers.splice(2,0,'a','b')



// const numbers = [1, 2, 3, 1, 4];

// console.log(numbers.indexOf(1, 2));
// console.log(numbers.lastIndexOf(1));

// console.log(numbers.indexOf(1) !== -1);
// console.log(numbers.includes(1));

// const courses = [
//     {id: 1 , name: 'a'},
//     {id: 2 , name: '2'},
// ]
// console.log(courses.includes({id: 1 , name: 'a'}))
// // console.log(courses.find(function(course){
//     // return course.name === 'a';
// // }));
//     console.log(courses.findIndex(function(course){
//         return course.name === 'a';
//     }))

// const courses = [
//          {id: 1 , name: 'a'},
//          {id: 2 , name: '2'},
//     ]

// console.log(courses.find(course =>  course.name === 'a'));
//  console.log(course);

// const numbers = [1, 2, 3, 4];

//End

// const last = numbers.pop();
// console.log(numbers);
// console.log(last);

// //Beginning
// const first = numbers.shift();
// console.log(first);

//Middle
// numbers.splice(2, 2);
// console.log (numbers);

// let numbers = [1, 2, 3, 4];
// let another = numbers;

// Solution 1
// numbers = [];

// Solution 2
// numbers.length = 0

// Solution 3
// numbers.splice(0 , numbers.length)

// Solution 4

// while (numbers.length > 0)
//     numbers.pop();
// console.log(numbers);
// console.log(another);

// const first = [1, 2, 3];
// const first = [{id: 1}];
// const second = [4, 5, 6];
// const combined = first.concat(second);
// first[0].id = [10]

// const slice = combined.slice(2 , 4);
// const slice = combined.slice(2);
// const slice = combined.slice(0);


// console.log(combined);
// console.log(slice);

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// //const combined = first concat (second);
// const combined = [...first ,'a', ...second, 'b'];
// console.log(combined)

// //const copy = combined.slice();

// const copy = [...combined];
// const numbers = [1, 2, 3];

// for (let number of numbers)
//     console.log(number);

// numbers.forEach((number, index) =>console.log(index, number));

// const numbers = [1, 2, 3];
// const joined = numbers.join(',');
// console.log(joined)

// const message = 'This is my first message';
// const parts = message.split(' ');
// console.log(parts)

// const combined = parts.join('-');
// console.log(combined)

// const numbers = [2, 3, 1];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// const courses = [
//     {id: 1 , name:'Node.js'},
//     {id: 2 , name: 'javascript'},
// ];
// courses.sort(function(a , b){
//     // a < b => -1
//     // a > b => 1
//     // a === b => 0
//     const nameA = a.name.toLowerCase();
//     const nameB = b.name.toLowerCase();
//     if (nameA < nameB) return -1;
//     else if (nameA > nameB) return 1;
//     return 0;
// })
// console.log(courses);

// const numbers = [1, -1, 2, 3];
// const allPositive = numbers.every(function(value){
//     return value >=0;
// });
// console.log(allPositive)

// const numbers = [1, 2, 3];
// const atLeastOnePositive = numbers.some(function(value){
//     return value <=0;
// });
// console.log(atLeastOnePositive)


// const numbers = [1, -1, 2, 3];

// const filterd = numbers.filter(n => n >= 0);
// console.log(filterd);


// const numbers = [1, -1, 2, 3];
// const filterd = numbers.filter(n => n >= 0);
// const items = filterd.map(n => '<li>' + n + '</li>');

// const html = '<ul>' + items.join('') + '</ul>';

// const items  = numbers
// .filter(n => n >= 0)
// .map(n => ({ value : n}))
// .filter(obj => obj.value > 1)
// .map(obj => obj.value);

// console.log(items);

// const numbers = [1, -1, 2, 3];

// let sum = 0;
// for (let n of numbers)
//     sum += n;
// const sum = numbers.reduce(
//     (accumulator , currentValue) =>  accumulator + currentValue
// );
// console.log(sum);