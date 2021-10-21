const person = {
    name : 'Pragya',
    age : 29,
    greet() {console.log('hi I am ' + this.name); }
}

const printName = (persondata) =>{
    console.log(persondata.name);
}

printName(person);

//Lets See the destruct way

const printobject = ({name, greet}) =>{
    console.log(name);
    console.log(greet());
}

printobject(person);


const {name, age} = person;
console.log(name, age);

//on Array

const hobbies = ['Sports', 'Cooking', 1, true];

const [hobby1, hobby2, hobbyt] = hobbies;
console.log(hobby1, hobby2,hobbyt);