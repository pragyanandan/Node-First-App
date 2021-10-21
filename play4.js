
const fetchData = (callback) =>{
    setTimeout(()=>{
        callback('XYZ-111');
    },1500);
}

setTimeout(()=>{
    console.log('time is done');
    fetchData(text=>{
        console.log(text);
    });
}, 1);

console.log('hello');

console.log('hi');