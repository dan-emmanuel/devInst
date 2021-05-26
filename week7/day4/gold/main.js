let printFullName =({firs,last}) =>`Your full name is ${firs} ${last}`

console.log(printFullName({first: 'Elie', last:'Schoppik'})) 



let keysAndValues = (object)=>{
  let ordered = Object.keys(object).sort().reduce(
    (obj, key) => { 
      obj[key] = object[key]; 
      return obj;
    }, 
    {}
  );
  return [Object.keys(ordered),Object.values(ordered)]

}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }))
// [["a", "b", "c"], [1, 2, 3]]

console.log(keysAndValues({  b: "Microsoft", c: "Google",a: "Apple" }))
// [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

console.log(keysAndValues({ key1: true, key2: false, key3: undefined }))
//  [["key1", "key2", "key3"], [true, false, undefined]]



class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);
// 3