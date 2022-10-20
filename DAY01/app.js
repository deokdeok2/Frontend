//  const loginForm = document.getElementById("login-form");
//  const loginInput = loginForm.querySelector("input");
//  const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting"); 


function onLoginSubmit(event){
   event.preventDefault();
   const HIDDEN_CLASSNAME = "hidden"
   const username = loginInput.value;
   loginForm.classList.add(HIDDEN_CLASSNAME);
   console.log(username);
   // greeting.innerText = "Hello "+username + you well;
   greeting.innerText = `Hello ${username} you well`;
   greeting.classList.remove(HIDDEN_CLASSNAME)
 }


 loginForm.addEventListener("submit",onLoginSubmit);

 
 