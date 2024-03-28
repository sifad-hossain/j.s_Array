/**
 * Looping Tecnique
 * 1.for loop
 * 2.while loop 
 * 3.do while   -->ignore
 * 4.for of -->array loop korar jonno 
 * 5.for in -->object loop korar jonno
 */

const friends = ['sifad', 'niaz', 'mahmood', 'hossain', 'lambu'];

for(const friend of friends){
    // console.log(friend);
}

for(let i = 0; i < friends.length; i++){
    // console.log(i);
    // console.log(friends[i]);
}


//While Loop

let i = 0 ;
while(i < friends.length){
    // console.log(friends[i]);
    i++
}


const numbers = [5, 22, 53, 62, 85, 46, 555, 258, 456, 159]

for (let i = 0; i < numbers.length; i++){
    // console.log(numbers[i]);
}

//While Loop

let n = 0 ;
while(i < numbers.length){
    console.log(numbers[i]);
    i++
}
