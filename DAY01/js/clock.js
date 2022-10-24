const clock = document.querySelector("h2#clock")

function getClock(){
    const date = new Date();
    const hours =String(date.getHours()).padStart(2,"0");
    const minute =String(date.getMinutes()).padStart(2,"0");
    const seconds =String(date.getSeconds()).padStart(2,"0");
    //밀리세컨즈
    //const miliseconds = String(date.getMilliseconds()).padStart(3,"0");
    //clock.innerText = hours.padStart(2,0)+":"+minute.padStart(2,0)+":"+seconds.padStart(2,0);
    clock.innerText = `${hours}:${minute}:${seconds}`;
}

getClock(); //바로 시계를볼수있음 끄면 인터벌만큼 디폴트값을 보게됨
setInterval(getClock, 1000);