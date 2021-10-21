const person = {
    name : 'Pragya',
    age : 29,
    greet() {console.log('hi I am ' + this.name); }
}

person.greet();

const hobbies = ['Sports', 'Cooking', 1, true];

for (let hobby of hobbies){
    console.log(hobby);
}

console.log(hobbies.map(hobby => 'honey: ' + hobby)); //Map Function
console.log(hobbies);

hobbies.push('programmming');

console.log(hobbies);

const copiedArray = [...hobbies]; //Spread operator with Array, pull out all elements of the array or the obejcts and put it around that.
console.log(copiedArray);

const copiedPerson = {...person}; //Spread Operator with Json object
console.log(person);

//Res Operator understanding

const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
}

console.log(toArray(4,5,'pragya'));

//Using res operator now
const toArray1 = (...args) => {
    return args;
}

console.log(toArray1(1,2,'pragya',7,8,9));


