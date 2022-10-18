// const amifat = true;
// let something;
// console.log(amifat);
// console.log(something);

// const a =["bc","asd"]
// console.log(a);

// a.push("a")

// console.log(a)

// const playerName = "nico";
// const playerPoints= 121212;
// const playerHandsome= flase;
// const plyerFat = "little bit"

// const player = ["nico",1212,false,"little bit"];

// const player = {
//     name:"nico",
//     points:10,
//     fat:true,
// }
// console.log(player);
// console.log(player.name);
// console.log(player["points"]);

// //constant 지만 object 안의 값을 수정할수있다.
// //그러나 constant 자체를 바꿀수없다 
// //ex) constant player=false;
// player.points=20;
// console.log(player.points);


// //object안의 값을 추가할수있다.
// player.lastname="potato"

// console.log(player)

// player.points= player.points + 15;

// console.log(player.points)

//  function sayHello(nameOfPerson, age){
//     console.log("Hello my name is"+nameOfPerson+ " and my old is"+age);
//  }


//  sayHello("nico",20)
//  sayHello("dal",24)
//  sayHello("lynn",44)

//  function plus(first,second){
//     console.log(first+second)
//  }
// b=4
//  plus(1,4)
//  plus(4,b+4)
//  //Nan > Not a Number(숫자가아님)

//  const player = {
//     name:"nico",
//     sayHello:function(otherPersonName){
//         console.log(otherPersonName+" hello"+" nice to meet you");

//     }
//  }
//  player.sayHello("lynn");


// const calc ={
//     plus: function(a,b){
//         conse.log(a+b)
//     },
//     subtract: function(a,b){
//         console.log(a-b)
//     },
//     divide: function(a,b){
//         console.log(a/b)
//     },
//     square: function(a,b){
//         console.log(a*b)
//     }
    
    
// }
// calc.plus(1,4);
// calc.subtract(6,5);
// calc.divide(2,6);
// calc.square(1,9);

// const age =parseInt(prompt("How old are you?"));

// if(isNaN(age)==true||age<0){
//     console.log("Please Write a real positive number");
// }else if(age<18){
//     console.log("you are too young");
// }else if (age>=18 && age<=50){
//     console.log("you can drink")
// }else if (age>=50 && age<=80){
//     console.log("you are too old. please don't drink")
// }else if (age===100){
//     console.log("100살 축하")    
// }else{ 
//     console.log("you cant drink ")
// }
//const title = document.querySelectorAll(".hello h1");
// const title = document.getElementById("hello");

// const title = document.querySelector("div h1");
// title.innerText = "hello"
// console.log(title);

const title = document.querySelector("div.hello:first-child h1");

console.dir(title);


function handleTitleClick(){
    title.style.color = "blue";
}

function hadleMouseEnter(){
    title.innerText="mouse is here!";
}

function handleMouseLeave(){
    title.innerText="mouse is gone!"
}

function handleWindowResize(){
    document.body.style.backgroundColor="tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("sos no wifi")

}

function handleWindowOnline(){
    alert("ok online..")
}

//title.onclick = handleTitleClick;
title.addEventListener("click", handleTitleClick);
//title.onmouseenter = hadleMouseEnter;
 title.addEventListener("mouseenter",hadleMouseEnter);
//title.onmouseleave = handleMouseLeave;
 title.addEventListener("mouseleave",handleMouseLeave);

 window.addEventListener("resize",handleWindowResize);
 window.addEventListener("copy",handleWindowCopy);
 window.addEventListener("offline", handleWindowOffline);
 window.addEventListener("online", handleWindowOnline);