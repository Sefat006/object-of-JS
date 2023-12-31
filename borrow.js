const kodomAli = {
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
    treatDay: function(amount, tip){
        this.money = this.money - amount - tip;
        return this.money;
    }
}


const result = kodomAli.exam();
const badamAli = {
    name: 'kacha badam',
    money: 8000
}
const result2 = kodomAli.exam.call(badamAli);
//console.log(result2);
const badamMoney = kodomAli.treatDay.call(badamAli, 400, 40);
//console.log(badamMoney);
const badamMoney2 = kodomAli.treatDay.apply(badamAli, [1000, 100]);
console.log(badamMoney2);

const badamAliTreat = kodomAli.treatDay.bind(badamAli);
const remaining = badamAliTreat(1000, 100);
console.log(remaining);
