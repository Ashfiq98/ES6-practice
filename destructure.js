const person = {name:'Jack watson', age : 21, job : 'freelancer' , gfName : 'Emma watson', phone : 01878123243 };
//const gfName = person.gfName;
// const job = person.job;
// const {phone,gfName} = person;
// console.log(gfName);
// console.log(job);
// console.log(phone);
const friends = ['Abul khan','Babul Khan','Jabul Khan','Lavlu Khan','Hablu Khan'];
const [first,second,...rest] = friends;
console.log(rest);

const complexObject = {
    name : 'Ashfiq Topu',
    info : {
        address : 'kochu khet',
        leader : 'Gunda Vai'
    }
}
const {leader} = complexObject.info;
console.log(leader);