'use strict';
let score=0;
let userName=prompt('what is your name ?');
//console.log('userName')
alert('hello '+userName+' now we will play quessing game  please answer by yes or no')
Q1();
Q2();
Q3();
Q4();
Q5();
Q6();
Q7();



function Q1(){
let Q1=prompt('is my name maria?');
console.log('Q1');
switch(Q1.toLowerCase()){
    case 'yes':
    case 'y':
        alert(' wrong answer');
          
        break;
    case 'no':
        
        alert('correct answer');
        score++;
        break;

}
return;
}


function Q2(){

let Q2=prompt('does polar bear lives with penguin in the same area ?');
console.log('Q1');
switch(Q2.toLowerCase()){
    case 'yes':
    case 'y':

        alert('wrong answer');
        break;
    case 'no':
    case 'n':
        alert('correct answer');
        score++;
        
        
        break;

}
return;
}

function Q3(){
let Q3=prompt('does snail sleep for 3 years?');
console.log('Q3');
switch(Q3.toLowerCase()){
    case 'yes':
    case 'y':
        alert(' correct answer');
score++;
        break;
    case 'no':
    case 'n':
        alert('wrong answer');
        break;

}
return;
}

function Q4(){
let Q4=prompt('does cates can rotate their ears 180 degrees?');
console.log('Q4');
switch(Q4.toLowerCase()){
    case 'yes':
    case 'y':
        alert(' correct answer');
score++;
        break;
    case 'no':
    case 'n':
        alert('wrong answer');
        break;

}
return;
}

function Q5(){
let Q5=prompt('does the moon surface actually dark?');
console.log('Q5');
switch(Q5.toLowerCase()){
    case 'yes':
    case 'y':
        alert(' correct answer');
score++;
        break;
    case 'no':
    case 'n':
        alert('wrong answer');
        break;

}
return;
}

function Q6(){

 

    for (let i=0;i<4;i++)
     {
        let Q6=prompt('how old are me?');
        if (Q6==28)
        { 
            alert('correct answer');
            score++;
            break;
        }else if (Q6>28)
            { 
             alert('too old');
             Q6=prompt('please try again?');

            } else
            { 
              alert('too young');
              Q6=prompt('please try again?');
            }
     }
    alert('the correct answer is '+28);
return;
    }



function Q7(){

let counteries=['iraq','palestine','turkey','jeorgia'];

let check=true;
    
        
        for (let ii=0;ii<6;ii++){
            let Q7=prompt('write down one country that i have visited befor?');
            for (let i= 0; i < counteries.length; i++) {
               if(Q7==counteries[i]) {
                alert('correct answer');
                check=false;
                score++;
                break;
               }
            }if(check){

            Q7=prompt('please try again?');
        }
        else{break;}
    }
        
                
            alert('the countries that i have visied :  '+'iraq and palestine and turkey and georgia');
            alert('your score is: '+score);
return;
}

    



    





