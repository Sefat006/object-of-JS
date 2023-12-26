const player = {};
player.name = 'little jhonny';
player.speciality = 'batsman';
player.bat = function(){
    console.log('swing the bat');
}
console.log(player);
player.bat();

const student = {
    name: 'pandey',
    job: 'khai andey',
    ball: function(){
        console.log('throw the ball')
    },
    salary: 10000
}

//construct
const person = new Object();
console.log(person);

//object create method
const item = Object.create(student);
console.log(item.name);