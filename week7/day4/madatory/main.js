// ex1
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// `I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)`


// ex2

let displayStudentInfo = ({first,last})=>`Your full name is ${first} ${last}`
console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}) )

// ex3

const users = { user1: 18273, user2: 92833, user3: 90315 }

let usersAsArray  = Object.entries(users)
console.log(usersAsArray)

usersAsArray2 = usersAsArray.map(e=>[e[0],e[1]*2])
console.log(usersAsArray2)

// ex4

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);
//   {name:"John"}


// letex5

  // 2

  class Dog {
    constructor(name) {
      this.name = name;
    }
  };

  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };


//   Exercise 6 : Challenges

// [2] === [2] //false
// {} === {}//false

const object1 = { number: 5 }; //4
const object2 = object1; //4
const object3 = object2; //4
const object4 = { number: 5}; //5 
object1.number = 4;


class Animal  {
    constructor(name , type ,color) {
      this.name = name;
      this.type = type;
      this.color = color;

    }
}


class Mamal  extends Animal {
    constructor(name , type ,color,sound) {
      super(nom); // appelle le constructeur parent avec le paramètre
      this.sound = sound,
      displayType =  function() {l
        console.log(this.type);
      }
    }
    
  }

  const cow = new Mamal(name,type,color);

  console.log(cow)