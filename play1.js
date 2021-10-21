const name = 'pragya'; //if we decalre variable as const then we won't change

let age = 10;

let hobbies = true;

age = 41;

//normal function 
function summarizeusers(userName, userAge, userHobbies){
    return ('name is ' + userName + ', age is ' + userAge + ' and its hobbers are ' + userHobbies);
}

console.log(summarizeusers(name,age, hobbies));

//Arrow function
const summaryofusers  = (userName, userAge, userHobbies) => {
    return ('name is ' + userName + ', age is ' + userAge + ' and its hobbers are ' + userHobbies);
}

age = 30;

console.log(summaryofusers(name,age, hobbies));

//Short way of using arrow function
const add = (a,b) => a+b;

console.log(add(12,34));

