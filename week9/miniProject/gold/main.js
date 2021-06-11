// let resolveAfter2Seconds = function () {
//   console.log("starting slow promise");
//   return new Promise(resolve => {
//       setTimeout(function () {
//           resolve("slow");
//           console.log("slow promise is done");
//       }, 2000);
//   });
// };

// let resolveAfter1Second = function () {
//   console.log("starting fast promise");
//   return new Promise(resolve => {
//       setTimeout(function () {
//           resolve("fast");
//           console.log("fast promise is done");
//       }, 1000);
//   });
// };

// let sequentialStart = async function () {
//   console.log('==SEQUENTIAL START==');
//   const slow = await resolveAfter2Seconds();
//   console.log(slow);
//   const fast = await resolveAfter1Second();
//   console.log(fast);
// }

// sequentialStart()

// will log  '==SEQUENTIAL START==' then 
// "starting slow promise"
// then "slow" then "slow promise is done" 
// then "starting fast promise"
// then "fast promise is done"
// then "fast"

// let resolveAfter2Seconds = function () {
//   console.log("starting slow promise");
//   return new Promise(resolve => {
//       setTimeout(function () {
//           resolve("slow");
//           console.log("slow promise is done");
//       }, 2000);
//   });
// };

// let resolveAfter1Second = function () {
//   console.log("starting fast promise");
//   return new Promise(resolve => {
//       setTimeout(function () {
//           resolve("fast");
//           console.log("fast promise is done");
//       }, 1000);
//   });
// };

// let concurrentStart = async function () {
//   console.log('==CONCURRENT START with await==');
//   const slow = resolveAfter2Seconds();
//   const fast = resolveAfter1Second();
//   console.log(await slow);
//   console.log(await fast);
// }

// setTimeout(concurrentStart, 4000)
// log  ==SEQUENTIAL START==
// log starting slow promise
// log slow promise is done
//  return log slow
// log starting fast promise
// log fast promise is done
// return log fast

// ex3

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

let fetcher = async (url)=>{
  let data = await fetch(url)
   return await data.json()
}

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(url =>fetcher(url)));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}

getData()