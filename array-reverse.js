// const numbers = [1, 2, 3, 4, 5, 6];

// console.log(numbers);

// const reversed =  numbers.reverse();

// console.log(reversed);



// const numbers = [1, 2, 3, 4, 5, 6];
// const revers = [];

// for(const num of numbers){
//     // console.log(num);
//     revers.unshift(num)
// }
// // console.log(revers);



// const numbers = [1, 2, 3, 4, 5, 6];

// const rev_numbers = [];
// for(let i = 0; i< numbers.length; i++){
//     const num = numbers[i];
//     rev_numbers.unshift(num);
// }

// console.log(rev_numbers);


//reverses side
const numbers = [1, 2, 3, 4, 5, 6, 7];

const rev_numbers = [];
for(let i = numbers.length -1; i >=0; i++){
    const num = numbers[i];
    rev_numbers.push(num);
}

console.log(rev_numbers);