const ages1 = [20,30,49];
const ages2 = [23,65,35];
const ages3 = [19,40,32];
//const allAges = ages1.concat(ages2).concat([10]).concat(ages3);

const allAges = [...ages1,...ages2,...ages3]; // Power of ES6
console.log(allAges);
const abul = 356;
const babul = 456;
const kabul = 298;
//const maximum = Math.max(abul,babul,kabul);
const taka = [567,654,325,464];
const maximum = Math.max(...taka);            // Power of ES6
console.log(maximum);