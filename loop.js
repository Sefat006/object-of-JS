const numbers = [12, 54, 65, 3, 54];
for(const number of numbers){
    console.log(number);
}

const bottle = {colour: 'yellow', price:50, iscleaned: true, capacity: 1}; 
const keys = Object.keys(bottle);
for(const key of keys){
    // console.log(key, bottle[key]);
}
for(key in bottle){
    console.log(key);
}

const pair = Object.entries(bottle);
console.log(pair);
for(const [pair, value] of Object.entries(bottle)){
    console.log(key, value);
}