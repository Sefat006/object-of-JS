const student = {
    name: 'kodom ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        return this.name + ' is participating in an exam';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`;
    },
    treatDay: function(amount){
        this.money = this.money - amount;
        return this.money;
    }
}

const output=student.exam();
console.log(output);
const reExam = student.improveExam('algebra');
console.log(reExam);
const remaining = student.treatDay(900);
console.log(remaining);
const dolaRemaining = student.treatDay(500);
console.log(dolaRemaining);