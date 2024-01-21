// ## Array Cardio Day 2

const people = [
  { name: 'Wes', DOB: 1988 },
  { name: 'Kait',DOB: 1986 },
  { name: 'Irv', DOB: 1970 },
  { name: 'Lux', DOB: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 18 or older?
 const isAdult = people.some(function(person){
    const Currentage = (new Date()).getFullYear();
    if(Currentage - person.DOB >= 18){
  return true;
    }
 });
 console.log(isAdult);


// Array.prototype.every() // is everyone 18 or older?

const Cheakevry =people.every(function(person){
    const isevryoneisAdult = (new Date ()).getFullYear();
    if(person - isevryoneisAdult >= 18){
        return true;
    }
})
console.log(Cheakevry);
// Array.prototype.find()

// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

/* this is normal function ,*/

// const comment = comments.find(function(commentes){
//     if (commentes.id === 823423 ){
//         return true ;
//     }
// });
// console.log(comment)
/* this is arrow function */

const comment = comments.find(commentes => commentes.id === 823423);
console.log(comment)




// Array.prototype.findIndex()
// Find the comment with this ID
const index = comments.findIndex( findtheindex => findtheindex.id === 823423)
console.log(index)
// delete the comment with the ID of 823423
comments.splice(index,1)
console.log(comments)

