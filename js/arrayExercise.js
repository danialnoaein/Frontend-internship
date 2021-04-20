// const numbers = arrayFromRange(-10 , 4);

// console.log(numbers);

// function arrayFromRange(min, max){
//     const output = [];
//     for (let i = min ; i <= max ; i++)
//         output.push(i);
//     return output;
// }

// const numbers = [1, 2, 3, 4];
// console.log(includes(numbers, 2));

// function includes(array ,searchElement) {
//     for (let element of array)
//     if (element === searchElement)
//         return true;
//     return false;
// }

// const numbers = [1, 2, 3, 4, 1, 1];

// const output = except (numbers , [1, 2]);
// console.log (output);

// function except(array , excluded){
//     const output = [];
//     for (let element of array)
//         if (!excluded.includes(element))
//             output.push(element);
//     return output;
// }

// const numbers = [1, 2, 3, 4];

// const output = move(numbers, 0,2);
// console.log(output);

// function move(array, index, offset){
//     const position = index + offset;
//     if (position >= array.length || position < 0){
//         console.error('Invalid offset.');
//         return;
//     }
//     const output = [...array];
//     const element = output.splice(index , 1)[0];
//     output.splice(position , 0 , element);
//     return output;
// }

// const numbers = [1, 2, 3, 4, 1];

// const count = countOccurrences(numbers, 1);

// console.log(count);

// function countOccurrences (array , searchElement) {
//     return array.reduce((accumulator, current) => {
//         const occurrence = (current === searchElement) ? 1 : 0;
//         console.log(accumulator, current, searchElement)
//         return accumulator + occurrence;
//     },0)
// }


// const numbers = [1, 2, 3, 4];
// const max = getMax ([1, 2, 3, 4]);

// console.log(max);

// function getMax(array){
//     if (array.length === 0)
//         return undefined;

//     // let max = array[0];

//     // for (let i = 1; i< array.length ; i++)
//     //     if (array[1] > max)
//     //       max = array[i];
//     // return max;

//    return array.reduce((a, b) => (a > b) ? a : b);
// }


const movies = [
    { title: 'a', year: 2018, rating: 4.5},
    { title: 'b', year: 2018, rating: 4.7},
    { title: 'c', year: 2018, rating: 3},
    { title: 'd', year: 2017, rating: 4.5},
]

const titles = movies
    .filter(m => m.year ===2018 && m.rating >= 4)
    .sort((a , b)=> a.rating - b.rating)
    .reverse()
    .map(m => m.title)
console.log(titles);