
const { clear } = require("console");
const { SSL_OP_EPHEMERAL_RSA } = require("constants");
const {performance} = require('perf_hooks');
var start = performance.now();

let lowerNumber = 1;
let higherNumber = 1000;
let primeNumArrayAsc = [];
let k = 0;

//Fucntion for only ascending Order
function is_increasing_digits_Sequence(num) {

    var arr_num = ('' + num).split('');
  
    for (var i = 0; i < arr_num.length - 1; i++) {
      if (parseInt(arr_num[i]) > parseInt(arr_num[i + 1]))
        return false;
      }
    return true;
  }

  //Fucntion for checking number is not greater than 1
function Right_Sequence(num) {

    var arr_num = ('' + num).split('');
  
    for (var i = 0; i < arr_num.length - 1; i++) {
      if ((parseInt(arr_num[i+1]) - parseInt(arr_num[i])>1))
        return false;
      }
    return true;
  }
// looping from lowerNumber to higherNumber to find the prime number and store in array
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        primeNumArrayAsc[k] = i;
    //  console.log(primeNumArrayAsc[k]);
         k++;
    }
}  
//console.log(primeNumArrayAsc.length);
let p ;
let q;
let r ;
let s ;
let product ;
let primeNumArray = [];

primeNumArray = primeNumArrayAsc.reverse(); // to start from the larget number


for (p in primeNumArrayAsc){
   //console.log(primeNumArray[p]);
    for (q in primeNumArrayAsc){
            if (primeNumArrayAsc[q] > primeNumArrayAsc[p]){
                for (r in primeNumArray){
                    if (primeNumArrayAsc[r] > primeNumArrayAsc[q]) {
                        for (s in primeNumArrayAsc){
                            if (primeNumArrayAsc[s] > primeNumArrayAsc[r]){
                                product =  primeNumArrayAsc[p]*primeNumArrayAsc[q]*primeNumArrayAsc[r]*primeNumArrayAsc[s];
                                //console.log(primeNumArray[p],primeNumArray[q],primeNumArray[r],primeNumArray[s]);
                                if (product > 10**11){
                                    if(is_increasing_digits_Sequence(product)){
                                       if(Right_Sequence(product))  {
                                            console.log(primeNumArrayAsc[p],primeNumArrayAsc[q],primeNumArrayAsc[r],primeNumArrayAsc[s],product);
                                        }    
                                    }
                                }
                        }
                        }
                    }
                }
            }
        }
    
}
console.log(p,q,r,s);
var end = performance.now();
console.log(`Execution time: ${end - start} ms`);

