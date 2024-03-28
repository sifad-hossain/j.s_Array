const persons = ['rakib', 'nakib', 'sakib', 'akib', 'dakib'];
const sortedPersons = persons.sort();
// console.log(sortedPersons);

//Asscending --> smaller to larger: [2,3----8]

//Descending --> larger to smaller: [8,7,6--2]

// const numbers = [5, 8, 2, 6, 4, 7, 3]
// const numbers_asc = numbers.sort()c//not working

// console.log(numbers_asc);

const numbers = [5, 8, 12, 6, 43, 7, 3]
const numbers_asc = [...numbers].sort(function(a, b) { return a-b })
const numbers_dsc = [...numbers].sort(function(a, b) { return b-a })
console.log(numbers_asc);
console.log(numbers_dsc);