// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//  output I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


// 🌟 Exercise 2: Display Student Info
// Instructions
// function displayStudentInfo(objUser){
//     const {first, last} = objUser;
//     console.log(`Your full name is ${first} ${last}`)
// }

// displayStudentInfo({first: 'Elie', last:'Schoppik'});


// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik' 

// 🌟 Exercise 3: User & Id
// Instructions
// Using this object 
// const users = { user1: 18273, user2: 92833, user3: 90315 }

// class User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//     }

//     getName() {
//         return [this.name, this.id]
//     }

//     set multIds(multiplyer) {
//         this.id *= multiplyer;
//     }
// }

// const exceptedOutput = Object.keys(users).map((key) => {
//     const user = new User(key, users[key])
//     return user.getName()
// })

// console.log(exceptedOutput)

// const exceptedOutput2 = Object.keys(users).map((key) => {
//     const user = new User(key, users[key])
//     user.multIds = 2
//     return user.getName()
// })

// console.log(exceptedOutput2)
// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]


// Exercise 4 : Person Class
// Instructions
// Analyze the code below. What will be the output?
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person('John');
// console.log(typeof member);

// OUTPUT object


// 🌟 Exercise 5 : Dog Class
// Instructions
// Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
};
// Analyze the options below. Which constructor will successfully extend the Dog class?
  // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };

// NO must call super()

//   // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };

// YES it works

//   // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };

// Need to specify name in arguments


//   // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };

// NO must call super()


// 🌟 Exercise 6 : Challenges
// Evaluate these (ie True or False)
// [2] === [2]
// {} === {}
 
// Both false, cause its in different memory segments

// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)

// 4 for obj2 and obj3, 5 for obj4, cause 1 2 and 3 it exatly the same objects, 4th is different with the same value of number.


// Create a class Animal with the attributes name, type and color. The type is the animal type,
// for example: dog, cat, dolphin ect …

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color
    }
}

const kingKong = new Animal("KingKong", "gorilla", "black")

// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). 
// This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color)
 // as well as the sound it makes.

class Mammal extends Animal {
    constructor(name, type, color) {
        super(name, type, color)
    }

    sound(sound) {
        return `${this.color} ${this.type} ${this.name} says ${sound}`

    }
}

// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name,
// a type and a color and calls the sound method that “moos” her information.
const farmerCow = new Mammal('name', 'cow', 'black n white')
console.log(farmerCow.sound('moo'))
// For example: Moooo I'm a cow, named Lily and I'm brown and white