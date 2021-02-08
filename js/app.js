'use strict';

let userName=prompt('what is your name ?');
//console.log('userName')
alert('hello '+userName+' now we will play quessing game  please answer by yes or no')

let Q1=prompt('am i a male?');
console.log('Q1');
switch(Q1.toLowerCase()){
    case 'yes':
    case 'y':
        alert(' wrong answer');
        break;
    case 'no':
        
        alert('correct answer');
        break;

}
let Q2=prompt('does polar bear lives with penguin in the same area ?');
console.log('Q1');
switch(Q1.toLowerCase()){
    case 'yes':
    case 'y':
        alert('wrong answer');
        break;
    case 'no':
    case 'n':
        alert('correct answer');
        break;

}

let Q3=prompt('does snail sleep for 3 years?');
console.log('Q3');
switch(Q3.toLowerCase()){
    case 'yes':
    case 'y':
        alert(' correct answer');
        break;
    case 'no':
    case 'n':
        alert('wrong answer');
        break;

}
let Q4=prompt('does cates can rotate their ears 180 degrees?');
console.log('Q4');
switch(Q4.toLowerCase()){
    case 'yes':
    case 'y':
        alert(' correct answer');
        break;
    case 'no':
    case 'n':
        alert('wrong answer');
        break;

}
let Q5=prompt('does the moon surface actually dark?');
console.log('Q5');
switch(Q5.toLowerCase()){
    case 'yes':
    case 'y':
        alert(' correct answer');
        break;
    case 'no':
    case 'n':
        alert('wrong answer');
        break;

}




