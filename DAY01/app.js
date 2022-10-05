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


const calc ={
    plus: function(a,b){
        conse.log(a+b)
    },
    subtract: function(a,b){
        console.log(a-b)
    },
    divide: function(a,b){
        console.log(a/b)
    },
    square: function(a,b){
        console.log(a*b)
    }
    
    
}
calc.plus(1,4);
calc.subtract(6,5);
calc.divide(2,6);
calc.square(1,9);