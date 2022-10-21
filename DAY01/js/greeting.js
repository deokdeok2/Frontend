//  const loginForm = document.getElementById("login-form");
//  const loginInput = loginForm.querySelector("input");
//  const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting"); 

const HIDDEN_CLASSNAME = "hidden"; //css hidden클래스 변수지정
const USERNAME_KEY = "username";
const username = loginInput.value;

function onLoginSubmit(event){
   event.preventDefault(); //새로고침을 막는다
   loginForm.classList.add(HIDDEN_CLASSNAME); //폼에 히든
   localStorage.setItem(USERNAME_KEY,loginInput.value) 
   // greeting.innerText = "Hello "+username + you well;
   paintGreetings(loginInput.value);
 }

 function paintGreetings(username){
  
  greeting.innerText = `Hello ${username} you well`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
 }


 

 const savedUsername = localStorage.getItem(USERNAME_KEY);
 console.log(savedUsername);

 if(savedUsername==null){
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);

 }else{
  paintGreetings(savedUsername);
 
 }