const clock = document.querySelector("h2#clock")

function getClock(){
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

}

getClock(); //바로 시계를볼수있음 끄면 인터벌만큼 디폴트값을 보게됨
setInterval(getClock, 1000);