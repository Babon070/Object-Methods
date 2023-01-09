'use strict';

// const array = [1,2,3,4,5];

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
// const langth = ['Javascript', 'php', 'c++', '.NET'];

// console.log(langth.slice(1,));
// console.log(langth.slice(1, 3));
// console.log(langth.slice(1, 6));
// console.log(langth.slice(-2));
// console.log(langth.slice(0));


// const arrar = [1,2,3,4,5];

// for (let i = 0; i < array.length; i++) {
   
// }

// let num = 15;
//  let text = num.toString();
//  console.log(text);


// const stocks = [
//     {
//         "ticker": "TESLA",
//         "name": "Tesla Inc",
//     },

//     {
//         "ticker": "APPL",
//         "name": "Apple Inc",
//     },    
// ];

// const stockIters = stocks.entries();

// for(const [el, ind] of stockIters){
//     console.log(el, ind['name']);
// }


// for(let idx=0; idx < num; idx++){
//     console.log(idx, number[idx]);
// }

// const number = [1,2,3,4,5,6,7,8,9];
// const num = number.length;

// for(const idx in number){
//     console.log(idx, number[idx]);
// }
// let idx = 0;
// for ( const num of number){
//     console.log(idx, num)
//     ++idx;
// }

// const object = {a: 1, b:2, c:3}

// for (const property in object){
//     console.log(`${property}: ${object[property]}`);
// }



// console.log(Object.assign({}, user, date))

// const propName = "firstName";

// const user ={
//     [propName]: "vasya"
// };

// console.log(user.fi);


// const user = {
//     firstName: 'Coder',
// };
// const user2 = {
//     lastName: 'Coder2'
// }

// const result = Object.assign(user, user2)

// console.log(result);

// output

// firstName: Coder;
// lastName: Coder2;


// const user = {
//     name: "Coder",
//     age: 25,
//     locations: "Tashkent",
//     login: function(){
//         console.log('kirish');
//     },
//     logout: function(){
//         console.log('chiqish');
//     },
//     movies: [
//         {name: "Avatar", likes: 474},
//         {name: "Titanik", likes: 564},
//         {name: "Harri Poter", likes: 378},
//         {name: "Afsungar", likes: 598},
//     ],

//     moviesWatch: function(){
//         user.movies.forEach(movis => {
//             console.log(movis);
//         });
//     },
// };
// user.moviesWatch()



// const btn = document.querySelectorAll('.buttons-item');

// btn.forEach(button => {
//     button.addEventListener('click', event =>{
//         console.log(event.target.innerText);
//     })
// })


// const user = [
//     {
//         name: 'Php',
//         age: 30,
//     },
//     {
//         ism: "Coder",
//         yosh: 25,
//     }
// ]

// const result = Object.assign(user);
// console.log(result);

const userTable = document.getElementById("user-table");

const users = [
    {
        id: 1,
        name: 'Ronaldo',
        age: 39,
        country: 'Portugal',
        number: 7,
    },
    {
        id:2,
        name: 'Messi',
        age: 35,
        country: 'Argentine',
        number: 10
    },
    {
        id: 3,
        name: 'Mbappe',
        age: 30,
        country: 'France',
        number: 7,
    }
];

const playerKeys = Object.keys(users[0]);

const headTr = document.createElement('tr');
playerKeys.map(key => {
    const th = document.createElement('th');
    th.innerHTML = key;
    headTr.appendChild(th);
});

userTable.appendChild(headTr);

users.map(player => {
    const bodyTr = document.createElement('tr');
    const playerValues = Object.values(player);
    playerValues.map(value => {
        const td = document.createElement('td');
        td.innerHTML = value;
        bodyTr.appendChild(td);
    });
    userTable.appendChild(bodyTr);
});
