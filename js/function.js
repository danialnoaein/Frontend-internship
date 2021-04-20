// function walk(){
//     console.log('walk');
// };
// const run = function(){
//     console.log('run');
// };
// let move = run;
// run();
// move();


// function sum(){
//     let total = 0;
//     for (let value of arguments)
//         total += value;
//     // console.log(arguments);
//     return total ;
// }
// console.log(sum(1,2,3,4,5,10));

// function sum(...args){
//     // console.log(args);
//   return  args.reduce((a,b) => a + b);
// }
// console.log(sum(1,2,3,4,5,10));

// function sum(discunt, ...prices){
//   const total = prices.reduce((a,b) => a + b);
//   return total * (1 - discunt);
// }
// console.log(sum(0.1, 20 , 30));



// function interest (principal, rate = 3.5, years = 5){
//     return principal * rate / 100 * years;
// }
// console.log(interest(10000))

// const person = {
//     firstName : 'Amir',
//     lastName : 'Pouyan Nasab',
//     get fullName(){
//         return (`${person.firstName} ${person.lastName}`);
//     },
//     set fullName(value){
//       const parts =  value.split(' ');
//       this.firstName = parts[0];
//       this.lastName = parts[1];
//     }
// };

// person.fullName = 'Adele Queen'

// console.log (person);




// const person = {
//     firstName : 'Amir',
//     lastName : 'Pouyan Nasab',
//     set fullName(value){
//         if (typeof value !== 'string')
//             throw new Error('Value is not a string.');
            
//       const parts =  value.split(' ');
//         if (parts.length !== 2)
//             throw new   Error('Enter a first and Last name');
//       this.firstName = parts[0];
//       this.lastName = parts[1];
//     }
// };

// try{
//     person.fullName = '';
// }
// catch (e) {
//     alert(e)
// }

// console.log (person);


// const video = {
//     title : 'a',
//     play(){
//         console.log(this);
//     }
// };

// video.stop = function(){
//     console.log(this);
// };
// video.stop();

// function Video(title) {
//     this.title = title;
//     console.log(this);
// }
// const v = new Video('a');

// const video = {
//     title : 'a',
//     tags : ['a', 'b', 'c'],
//     showTags(){
//         this.tags.forEach(function(tag){
//             console.log(this.title ,tag);
//         },this);
//     }
// };
// video.showTags();



// const video = {
//     title : 'a',
//     tags : ['a', 'b', 'c'],
//     showTags(){
//         const self = this;
//         this.tags.forEach(function(tag){
//             console.log(self.title ,tag);
//         });
//     }
// };
// video.showTags();

// function playVideo(a,b){
//     console.log(this);
// }
// playVideo.call({ name: 'Amir'},1 ,2);
// playVideo.apply({ name: 'Amir'}, [1,2]);
// playVideo.bind({ name: 'Amir'})();
// playVideo();



// const video = {
//     title : 'a',
//     tags : ['a', 'b', 'c'],
//     showTags(){
//         this.tags.forEach(function(tag){
//             console.log(this.title ,tag);
//         }.bind(this));
//     }
// };
// video.showTags();

// const video = {
//     title : 'a',
//     tags : ['a', 'b', 'c'],
//     showTags(){
//         this.tags.forEach(tag => {
//             console.log(this.title ,tag);
//         });
//     }
// };
// video.showTags();




// console.log(sum([1,2,3,4]))
// function sum (...items) {
//     if (items.length === 1 && Array.isArray(items[0]))
//     items = [...items[0]];
//   return  items.reduce((a, b) => a + b);
// }



// const circle = {
//     radius: 2,
//     get area() {
//         return Math.PI * this.radius * this.radius;
//     }
// };
// console.log(circle.area)



try{
    const numbers = [1,2,3,4];
    const count = countOccurences(null, 1);
    console.log(count);
}
catch (e){
    console.log(e.message);
}
function countOccurences(array, searchElement){
    if (!Array.isArray(array))
        throw new Error('Invalid array.');
    
    return array.reduce((accumulator, current) => {
        const occurence = (curent === searchElement) ? 1 : 0;
        return accumulator + occurence;
    },0);
}