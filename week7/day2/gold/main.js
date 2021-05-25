
// ex1
[1, 2, 3].map(num => {
    if (typeof num === 'number') return num * 2;
    return ;
  });

//   [2,4,6]




// ex2
[[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  );

//   [1,2,0,1,2,3]

// ex3

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
// i = 0
// i = 1
// i = 2
// i = 3
// i = 4
// i = 5

    // alert(num);
    return num * 2;
})

// i = undefined

// ex4
const array = [[1],[2],[3],[[[4]]],[[[5]]]]

let array2 = array.map(e=>e[0])
console.log(array2)




const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

let greeting2 = greeting.map(e=>e.join(""))

let greetingstring  = greeting2.join(" ")


const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
let flatDeep =(array)=>array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val) : val), [])
let trapped2 = flatDeep(trapped)

console.log(trapped2)