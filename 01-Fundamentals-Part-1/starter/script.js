//let js = "amazing";
//if (js == "amazing") alert("javaScript is FUN");
//console.log(40 + 20 - 50);
//console.log(js);
//console.log("jonas");
//console.log(23);

//let firstName = "jonas";

//console.log(firstName);
//console.log(firstName);
//console.log(firstName);

//let jonas_matilda = "JM";
//let fucation = 27;
//let name = "jonas";

//let myFirstJob = "Coder";
//let myCurrentJob = "Teacher";

//console.log(myFirstJob);

// 7 data type

// 1 Numner : Floating point number  Used decimal and integers
// let age = 23;

// 2 Sting : Sequence of characters  used for text
// let firstName = "Sanjay";

// 3 Boolean : Logical type ony can be true or false used for taking decisions
// let fullAge = true;

// 4 Undefined :
// let children;

// 5 Null : Also mean 'empty valu'

// 6 Symbol : Value that is unique and cannot be changed

// 7 Bgint : larger integer then number type can hold

// typeof for data type check
/*
let javascriptisFun = true;
console.log(javascriptisFun);
console.log(typeof true); // boolean
console.log(typeof 23); // number
console.log(typeof 'sanjay'); // string

javascriptisFun = 'YES';
console.log(typeof javascriptisFun);

let year;
console.log(year);
console.log(typeof year); // undefined

year = 1989;
console.log(typeof year); // number

console.log(typeof null); // this javasctipt bug


let age = 38;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programer';
job = 'teacher';


// Math operators
const now = 2037;
const ageJons = now - 1991;
const ageSarah = now - 2018;
console.log(ageJons, ageSarah);

console.log(ageJons * 2, ageJons / 10, 2 ** 3);
// 2 ** 3 means 2 to power of 3 * 2 * 2 *

const firstName = 'Sanjay';
const lastName = 'kumbhar';
console.log(firstName + ' ' + lastName);

// asssigment operators
let x = 10 + 5;
x += 10; //  x = x + 10;
x *= 4; // x = x * 4 = 100
x++;
x--;
x--;
console.log(x);

// comparison operators > < >= <=
console.log(ageJons > ageSarah);
console.log(ageSarah >= 18);

const inFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJons = now - 1991;
const ageSarah = now - 2018;
console.log(ageJons, ageSarah);
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 32 - 20 - 5;
console.log(x, y);

const averageAge = (ageJons + ageSarah) / 2;
console.log(ageJons, ageSarah, averageAge);


// codding challange

// const johanMass = 78;
// const johanHeight = 1.69;
// const markMass = 92;
// const markHeight = 1.95;

const johanMass = 95;
const johanHeight = 1.76;
const markMass = 85;
const markHeight = 1.76;

const BMImak = markMass / markHeight ** 2;
const BMIJohn = johanMass / johanHeight ** 2;
const markHeightBMI = BMImak > BMIJohn;

console.log(BMImak, BMIJohn, markHeightBMI);


const firstName = 'Sanjay';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const sanjay = "i'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(sanjay);

const sanjayNew = `i'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(sanjayNew);

console.log(`just a regular string...`);

console.log('string with\n\multiple\n\lines');

console.log(`String
multiple
line`);


const age = 15;
const isOldEnough = age >= 19;
if (isOldEnough) {
    console.log('sarah can start driving license');
} else {
    const yearsLeft = 19 - age;
    console.log(`sarah is too young. wait amother ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// codding chlangges 2

const markMass = 95;
const markHeight = 1.88;
const johanMass = 85;
const johanHeight = 1.76;

const BMImak = markMass / markHeight ** 2;
const BMIJohn = johanMass / johanHeight ** 2;

if (BMImak > BMIJohn) {
    console.log(`Mark BMI ${BMImak}  is higher then johan's ${BMIJohn}`);
} else {
    console.log(`johan BMI ${BMIJohn} is higher then Mark's ${BMImak}`);
}

// type cornversion
const inputYear = '1991';
console.log(Number(inputYear));
const inputNumber = Number(inputYear);
console.log(inputNumber + 18);
console.log(Number(inputYear) + 18);

console.log(String(23), 23);

// type corercion

console.log(`I am ` + `23` + ` year old`);
console.log(`I am ` + String(23) + ` year old`);
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);



// % falsy values : 0, '', undefined, null, Nan

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Sanjay'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log('dont spne it all :)');
} else {
    console.log('you should get a job');
}

let height = 0;

if (height) {
    console.log('YAY! height is defined');
} else {
    console.log('height is undefined');
}


const age = '18';
if (age === 18) console.log('you jut becam an adult');
if (age == 18) console.log('you jut becam an adult (losse)');


const favorite = Number(prompt("what's your favorite number ?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log('cool! 23 is an amzaing number!')
} else if (favorite === 7) {
    console.log('7 is also cooll number')
} else if (favorite === 9) {
    console.log('9 is also cooll number')
} else {
    console.log('number is not 23 or 7')
}

if (favorite !== 23) console.log('why not 23?');


const hasDriversLicence = true;  // A
const hasGoodVision = true; // B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasGoodVision);
console.log(!hasDriversLicence);

// if (hasDriversLicence && hasGoodVision) {
//     console.log('Sarah is able to driver!')
// } else {
//     console.log('Someone else should drive');
// }

const isTires = true // c
console.log(hasDriversLicence || hasGoodVision || isTires);

if (hasDriversLicence && hasGoodVision && !isTires) {
    console.log('Sarah is able to driver!')
} else {
    console.log('Someone else should drive');
}



const scoreDolphins = (188 + 191 + 110) / 3;
const scoreKoalas = (188 + 191 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win th trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('koalas win th trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win th trophys');
} else {
    console.log('no one win');
}


const day = 'thusday';

switch (day) {
    case 'monday':
        console.log('plan cource structure');
        console.log('go to codding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wedneday':
    case 'thusday':
        console.log('Write code exmple');
    case 'firday':
        console.log('recorder video');
        break;
    case 'saturday':
    case 'Sunday':
        console.log('enjoy your weeked');
        break;
    default:
        console.log('no a valid day');
}


3 + 4
19191
true && false && !false

const age = 23;
age >= 18 ?
    console.log('I like to drink wine') :
    console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;

if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}

console.log(drink2);

console.log(`I like drink ${age >= 18 ? 'wine' : 'water'}`);



const bill = 270;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`This bill was ${bill}, the tip was ${tip}  the total ${bill + tip}`);

*/

//  Part - 2
'use strict';

/*
let hasDriversLicence = true;
const passTest = true;
if (passTest === hasDriversLicence) {
    console.log('i can driver:D');
}

// const interface = 'Audio';
// const privet = 345;
// const if = 23;



//// function 
function logger() {
    console.log('I am sanjay')
}

// calling / running / invoking funcation 

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} Oranges.`
    return juice;
}
const applesJuice = fruitProcessor(5, 0);
console.log(applesJuice);
console.log(fruitProcessor(5, 0));


const applesOrangeJuice = fruitProcessor(2, 4);
console.log(applesOrangeJuice);
const num = Number('23');


// Fucation Declaration 
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

// Fucation expression 
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2);
console.log(age1, age2);

// arrow fucation 

const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntileRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 60 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} yesrs`
}
console.log(yearsUntileRetirement(1989, 'Sanjay'));
console.log(yearsUntileRetirement(1991, 'Vaishu'));


function cutFruitPieces(fruit) {
    return fruit + 4;
}

function fruitProcessor(apples, oranges) {
    const applesPieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applesPieces} apples and ${orangePieces} Oranges.`
    return juice;
}
console.log(fruitProcessor(4, 6));

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntileRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    //return retirement;
    //return `${firstName} retires in ${retirement} years`
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has alredy retires`);
        return -1;
    }
}

console.log(yearsUntileRetirement(1991, 'Sanjay'));
console.log(yearsUntileRetirement(1950, 'Vaishu'));


const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// test 1 

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphine win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('NO team wins...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);
// test 2 
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'peter';

const friends = ['Michael', 'Steven', 'Peter']
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 3]);
friends[2] = 'jay';
console.log(friends);

//const years = new Array(1991, 1994, 2008, 2020);
//console.log(years);
const firstName = 'Sanjay'
const sanjay = ['Sanjay', 'Kumbhar', 2073 - 1991, 'Devloper', friends]
console.log(sanjay)
console.log(sanjay.length);
// Exercise

const calcAge = function (birthYear) {
    return 2031 - birthYear;
}
const years = [1991, 1994, 2008, 2018, 2020];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
console.log(ages);


const friends = ['Michael', 'Steven', 'Peter']
const newLenght = friends.push('Jay', 'Sanjay');
console.log(friends);
console.log(newLenght);

friends.unshift('Vaishu');
console.log(friends)

friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends)

friends.shift();
console.log(friends);

friends.push(23);
console.log(friends.indexOf('Steven'));
console.log(friends.includes('Steven'));
console.log(friends.includes('23'));

if (friends.includes('Steven')) {
    console.log('Yes you have firend');
}


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[1], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);


const johanArry = [
    'Sanjay', 'Kumbhar', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven']
]
console.log(johanArry);

const jonas = {
    firstName: 'Sanjay',
    LastName: 'Kumbhar',
    age: 2022 - 1989,
    friends: ['Michael', 'Peter', 'Steven']
}

console.log(jonas);
console.log(jonas.firstName);
console.log(jonas.friends);
console.log(jonas['firstName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['Last' + nameKey]);

const interestedIn = prompt('What do you wamt first name last name age job and friends');
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('wrong');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@sanjaykumbhar'
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} and besr friend is called ${jonas.friends[1]}`)



const jonas = {
    firstName: 'Sanjay',
    LastName: 'Kumbhar',
    age: 2022 - 1989,
    friends: ['Michael', 'Peter', 'Steven']
}

console.log(jonas);

console.log(jonas.firstName + ' ' + jonas.LastName);
console.log(jonas.LastName);
console.log(jonas['firstName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['Last' + nameKey]);
console.log(jonas['age']);

//const interestedIn = prompt('firstName, age, LastName')
//console.log(jonas[interestedIn]);

//if (jonas[interestedIn]) {
//console.log(jonas[interestedIn]);
//} else {
// console.log('wrong');
//}

jonas.location = 'Patan';
jonas['twitter'] = '@sanjay';
console.log(jonas);

console.log(`jons ${jonas.friends.length} and bests friend is ${jonas.friends[3]}`)


const jonas = {
    firstName: 'Sanjay',
    LastName: 'Kumbhar',
    birthYeahr: 1989,
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,

    // calcAge: function (birthYeahr) {
    //     return 2022 - birthYeahr;
    // }
    // calcAge: function () {
    //     console.log(this);
    //     return 2022 - this.birthYeahr;
    // }
    calcAge: function () {
        this.age = 2022 - this.birthYeahr;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} old devloper he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`;
    }
}

console.log(jonas.calcAge(1989));
console.log(jonas['calcAge'](1989));
console.log(jonas.age);
console.log(jonas.getSummary());


const sanjay = {
    fullName: 'Sanjay Kumbhar',
    mass: 78,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const vaishu = {
    fullName: 'Vaishali Prajapati',
    mass: 85,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

sanjay.calcBMI();
vaishu.calcBMI();
console.log(sanjay.bmi, vaishu.bmi);

if (sanjay.bmi > vaishu.bmi) {
    console.log(`${sanjay.fullName}'s BMI ${sanjay.bmi}
    is higher than ${vaishu.fullName}'s BMI ${vaishu.bmi}  `)
} else if (vaishu.bmi > sanjay.bmi) {
    console.log(`${vaishu.fullName}'s BMI ${vaishu.bmi}
    is higher than ${sanjay.fullName}'s BMI ${sanjay.bmi}  `)
}


// console.log('Lifting weight repetition 1');
// console.log('Lifting weight repetition 2');
// console.log('Lifting weight repetition 3');
// console.log('Lifting weight repetition 4');
// console.log('Lifting weight repetition 5');
// console.log('Lifting weight repetition 6');
// console.log('Lifting weight repetition 7');
// console.log('Lifting weight repetition 8');
// console.log('Lifting weight repetition 9');
// console.log('Lifting weight repetition 10');

// for loop keep running while condtition is TRUE

for (let x = 1; x <= 100; x++) {
    console.log(`Lifting weight repetition ${x}`);
}


const Sanjay = [
    'Sanjay', 'Kumbhar', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven'],
    true
];

const types = []

for (let i = 0; i < 5; i++) {
    // readding from Sanajy array
    console.log(Sanjay[i]);

    // filling types array 
    // types[i] = typeof Sanjay[i];

    types.push(typeof Sanjay[i]);
}

console.log(types);

const years = [1989, 1995, 2000, 2007, 2010];
const age = [];

for (let i = 0; i < years.length; i++) {
    age.push(2022 - years[i]);
}

console.log(age);

// continue and break

console.log('-- only string --')
for (let i = 0; i < Sanjay.length; i++) {
    if (typeof Sanjay[i] !== 'string') continue;
    console.log(Sanjay[i], typeof Sanjay[i]);
}

console.log('-- only number --')
for (let i = 0; i < Sanjay.length; i++) {
    if (typeof Sanjay[i] !== 'number') continue;
    console.log(Sanjay[i], typeof Sanjay[i]);
}



const Sanjay = [
    'Sanjay', 'Kumbhar', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven'],
    true
];

// 0 1 .... 5
// 4 ---- 0
for (let i = Sanjay.length - 1; i >= 0; i--) {
    console.log(i, Sanjay[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----- Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`exercise ${exercise}: lifting weirght repetition ${rep}`);
    }
}


console.log('for');
for (let x = 1; x <= 10; x++) {
    console.log(`Lifting weight repetition ${x}`);
}

console.log('while');
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weight repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`Lifting weight repetition ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice == 6) console.log('loop is about is end..')
}
*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i])
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals)

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        //sum = sum + arr[i];
        sum += arr[i];
    }
    console.log(sum);
    return sum / arr.length;
}

calcAverage(calcAverage([2, 3, 7]));
calcAverage(totals);
calcAverage(tips);
