const bottle = {colour: 'yellow', price:50, iscleaned: true, capacity: 1};
//here bottle => object; colour => key; 'yellow' => value
const keys = Object.keys(bottle);
console.log(keys);
const values = Object.values(bottle);
console.log(values);
const pair = Object.entries(bottle);
console.log(pair);


console.log(bottle);
//if we seal any object, then it can't be deleted;
//but it can be modified
//we can't add new keys and values in it;
// Object.seal(bottle);
Object.freeze(bottle);//it will freeze the object and nothing can be changed;
delete bottle.iscleaned;
bottle.price=1000;//we can modify values while it is sealed;
bottle.height = 12;//it will work if the seal line is removed;
console.log(bottle);