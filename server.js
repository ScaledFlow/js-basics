// Class ES6
console.log("---Class ES6")
class Person {
  constructor() {
    this.name = 'Max';
  }

  printMyName() {
    console.log(this.name)
  }
}

const person = new Person();
person.printMyName();

//Class Modern Way ES7 - skip constructor call
console.log("---Class ES7")
class Human {
  gender = 'male';

  printGender = () => {
    console.log(this.gender);
    console.log(this);
  }
}

const human = new Human();
human.printGender();

// Spread Operator
console.log("---Spread Operator")
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const person2 = {
  name: 'Max'
};

const newPerson = {
  ...person2,
  age: 28
}

console.log(newPerson);

// Rest Operator
console.log("---Rest Operator")
const filter = (...args) => {
  return args.filter(elx => elx ===2);
}
console.log(filter);
console.log(filter(1, 2, 3));

// Regular Function
console.log("---Regular Fuction")
const funx = (num) => {
  return num + 1
}

console.log("number is: " + funx(2));

// Destructuring
console.log("---Destructuring")
const numbersx = [1, 2, 3];
[num1, , num3] = numbersx;
console.log(num1, num3);

// Pointers
console.log("---Pointers");

const allien = {
  name: 'Max'
};

const secondAllien = allien;
allien.name = "Tom"

console.log(allien);
console.log(secondAllien);

// Pointers with Spread Operator - objects and arrays are reference types
console.log("---Pointer with Spread Operator");

const allien2 = {
  name: 'Max'
};

const secondAllien2 = { 
  ...person
};

allien2.name = "Bob";

console.log(allien2);
console.log(secondAllien2);

// Map - is a build in array method
console.log("---Map");
const numbers3 = [1, 2, 3];

const doubleNumArray = numbers3.map((numx) => {
  return numx * 2;
});

console.log(doubleNumArray);