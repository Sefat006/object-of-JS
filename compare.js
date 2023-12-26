const first = {a: 5, b: 2, d: 5};
const second = {a: 5, c: 5, b: 2};
//stringify makes it in strings;
//then compare it and it will be same;
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
if(firstString === secondString){
    console.log('same');
}
else{
    console.log('different');
}

function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        for (const key of firstKeys){
            if(first[key] !== second[key]){
                return false;
            }
        }
        return false;
    } else{
        return false;
    }
}
const isSame = compareObject(first, second);
console.log(isSame);