// alert('hello, world');

// console.log(1);
// console.log(2);

// let age = 25;
// let year = 2019;
// log things to console
// console.log(age, year);

// age = 30
// console.log(age);

// const points = 100;
// console.log(points);

// var score = 75;
// console.log(score);


// strings
// console.log('hello, world');

// let email = 'email@example.com';
// console.log(email);

// string concatenation
// let firstName = 'Harmanpreet';
// let lastName = 'Singh';

// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// getting characters
// console.log(fullName[0]);

// string length
// console.log(fullName.length);

// string methods
// console.log(fullName.toUpperCase());

// let result = fullName.toLowerCase();
// console.log (result, fullName);

// let index = email.indexOf('@');
// console.log(index);

// common string methods
// let email1 = 'email@example.com';
// let result = email.lastIndexOf('e');
// let result = email.slice(4, 10); # start from 4 and end at 10
// let result = email.substr(4, 10); # start from 4 and outputs 10 characters in total
// let result = email.replace('e', 'h'); // #Only replaces the first e not all e's

// console.log(result);

// Numbers
// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);
// math operators +, -, *, /, **, %

// console.log(10 / 2);

// let result = radius % 3;
// let result = pi * radius**2;

// order of operation - B I D M A S

// let result = 5 * (10-3)**2;

// console.log(result);

// let likes = 10;
// likes = likes + 1;
// likes++;
// likes--;
// likes += 10;
// likes -= 5;
// likes *= 2;
// likes /= 2;

// console.log(likes);

// NaN - not a number
// console.log(5 / 'hello');
// console.log(5 * 'hello');

// let result = 'the blog has ' + likes + ' likes';
// console.log(result);

// template strings
// const title = 'Best roads of 2024';
// const author = 'Harman';
// const likes = 30;

// concatenation way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes ';
// console.log(result);

// template string way
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// creating html templates
// let html = `
//   <h2>${title}</h2>
//   <p>${author}</p>
//   <span>This blog has ${likes} likes</span>
// `;

// console.log(html);

// let ninjas = ['harman', 'shaun', 'ryu'];

// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20,25,30,35];
// console.log(ages[2]);

// console.log(ninjas.length);

// array methods
// let result = ninjas.join(',');
// let result = ninjas.indexOf('ryu');
// let result = ninjas.concat(['ken', 'crystal']);
// let result = ninjas.push('ken'); // #alters original value also
// result = ninjas.pop();

// console.log(result);

// undefined/ null
// let age = null;

// console.log(age, age + 3, `the age is ${age}`);


// booleans and comparisons
// console.log(true, false, "true", "false");

// methods can return booleans
// let names = ['hrmn', 'preet'];

// let result = email.includes('@');
// let result = names.includes('@');

// console.log(result);

// comparison operators
// let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25);

// let name = 'hrmn';

// console.log(name == 'hrmn');
// console.log(name == 'Hrmn');
// console.log(name > 'Hrmn');

// console.log(name > 'crystal');
// console.log(name > 'Crystal');
// console.log(name < 'crystal');
// console.log(name < 'Crystal');

// let age = 25;

// loose comparison (different types can still be equal)
// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

// strict comparison (different types cannot be equal)
// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');

// type conversion
// let score = '100';

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = String('50');

// let result = Boolean(0);
// let result = Boolean('');
// console.log(result, typeof result);

// for loops

// for(let i = 0; i < 5; i++){
//     console.log(`in loop:`, i);
// }

// console.log('loop finished');

// const names = ['shaun', 'mario', 'luigi'];

// for(let i = 0; i < names.length; i++){
    // console.log(names[i]);
    // let html = `<div>${names[i]}</div>`;
    // console.log(html);
// }

// while loops 

// const names = ['shaun', 'mario', 'luigi'];

// let i = 0;

// while(i < 5){
//     console.log(`in loop: `, i);
//     i++;
// }

// let i = 0;

// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

// do while loops 

// let i = 3;
// do{
//     console.log('val of i is:', i);
//     i++;
// } while(i < 5);

// if statements
// const age = 25;

// if(age > 20){
//     console.log('you are over 20 years old');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// if(ninjas.length > 3){
//     console.log("that's a lot of ninjas");
// }

// const password = 'password';

// if(password.length >= 8){
//     console.log('that password is long enough!');
// }

// if else statments
// const password = 'p@ss';

// if(password.length >= 12){
//     console.log('that password is might be strong');
// } else if(password.length >= 8){
//     console.log('that password if long enough!');
// } else{
//     console.log('password is not long enough!');
// }

// logical operators - OR || ; AND &&
// const password = 'p@ss';

// if(password.length >= 12 && password.includes('@')){
//     console.log('password is mighty strong');
// } else if(password.length >= 8 || password.includes('@') && password.length >= 5){
//     console.log('password is strong enough!');
// } else{
//     console.log('password is not long enough!');
// }

// logical NOT (!)

// let user = false;

// if(!user){
//     console.log('you must be logged in to continue');
// }

// console.log(!true);
// console.log(!false);

// break and continue 

// const scores = [50, 25, 0, 30, 100, 30, 10];

// for(let i = 0; i < scores.length; i++){

//     if(scores[i] === 0){
//         continue;
//     }

//     console.log('your score:', scores[i]);

//     if(scores[i] === 100){
//         console.log('congrats you got the top score');
//         break;
//     } 

// }

// switch statements
// const grade = '50';

// switch(grade){
//     case '50':
//         console.log('you got an A!');
//         break;
//     case 'B':
//         console.log('you got a B!');
//         break;
//     case 'C':
//         console.log('you got a C!');
//         break;
//     case 'D':
//         console.log('you got a D!');
//         break;
//     case 'E':
//         console.log('you got an E!');
//         break;
//     default:
//         console.log('not a valid grade');
// }

// variables & block scope 
// const age = 30;

// if(true){
//     const age = 40;
//     const name = 'hrmn'
//     console.log('inside 1st code block:', age, name);

//     if(true){
//         const age = 50;
//         console.log('inside 2nd code block:', age);
//     }
// }

// console.log('outside code block:', age, name);


// // function declaration
// function greet(){
//     console.log('hello there');
// }

// // function expression

// const speak = function(){
//     console.log('good day!');
// };

// greet();

// speak();

// // arguments and parameters

// const speak = function(name = 'hrmn', time = 'night'){
//     console.log(`good ${time} ${name}`);
// };

// speak();
// speak('preet');

// // returning values 
// const calcArea = function(radius){
//     return 3.14 * radius**2;
// }

// const area = calcArea(5);
// console.log(area);

// // regular function 
// // const calcArea = function(radius){
// //     return 3.14 * radius**2;
// // }

// // arrow function 
// const calcArea = (radius) => 3.14 * radius**2;

// const area = calcArea(5);
// console.log('area is:', area);

// practice arrow functions 

// const greet = function(){
//     return 'hello, world';
// };

// const greet = () => 'hello, world';
// const result = greet ();
// console.log(result);

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// console.log(bill([10,15,30], 0.2));

// const name = 'hrmn';

// // function 

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// // methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// callback & foreach

// const myFunc = (callbackFunc) => {
//     // do something
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc (value => {
//     // do something
//     console.log(value);
// });

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// };

// people.forEach(logPerson);

// get a reference to the 'ul'
// const ul = document.querySelector('.people');

// const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// let html = ``;

// people.forEach(person => {
//     //create html template
//     html += `<li style="color: red">${person}</li>`;
// });

// console.log(html);
// ul.innerHTML = html;

// object literals

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'hrmn@hotmail.com',
//     location: 'winnipeg',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite']
// };

// console.log(user);
// console.log(user.name);

// user.age = 35;
// console.log(user.age);

// console.log(user['location']);
// user['name'] = 'hrmn';
// console.log(user['name']);

// console.log(typeof user);

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'hrmn@hotmail.com',
//     location: 'winnipeg',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite'],
//     login: function(){
//         console.log('the user logged in');
//     },
//     logout: function(){
//         console.log('the user logged out');
//     }
// };

// user.login();
// user.logout();

// const blogs = [
//     { title: 'why mac and cheese rules', likes: 30},
//     { title: '10 things to make with marmite', likes: 50}
// ];

// // console.log(blogs);

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'hrmn@hotmail.com',
//     location: 'winnipeg',
//     blogs: [
//         { title: 'why mac and cheese rules', likes: 30},
//         { title: '10 things to make with marmite', likes: 50}
//     ],
//     login(){
//         console.log('the user logged in');
//     },
//     logout(){
//         console.log('the user logged out');
//     },
//     logBlogs(){
//         // console.log(this.blogs);
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach(blog =>{
//             console.log(blog.title, blog.likes);
//         })
//     }
// };

// user.logBlogs();
// console.log(this);

// math object

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.8;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// // random numbers

// const random = Math.random();

// console.log(random);
// console.log(Math.round(random * 100));

// primitive values 

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values 

// const userOne = {name: 'ryu', age: 30};
// const userTwo = userOne;

// console.log(userOne, userTwo);

// userOne.name = 'hrmn';
// console.log(userOne, userTwo);

// const para = document.querySelector('div.error');

// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// console.log(paras[2]);
// console.log(errors);

// // get an element by ID 
// const title = document.getElementById('page-title');
// console.log(title);

// // get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// get elements by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = "ninjas are awesome";

const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML += '<h2>this is a new h2</h2>';

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});
