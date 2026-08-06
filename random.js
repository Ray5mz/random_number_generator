const mybutton=document.getElementById("myButton");
const lable1=document.getElementById("label1");
const lable2=document.getElementById("label2");
const lable3=document.getElementById("label3");
const min =1;
const max=6;
let randomnum1;
let randomnum2;
let randomnum3;

mybutton.onclick=function(){
    randomnum1=Math.floor(Math.random()*max)+min;
    randomnum2=Math.floor(Math.random()*max)+min;
    randomnum3=Math.floor(Math.random()*max)+min;
    mylable.textContent=randomnum;
}