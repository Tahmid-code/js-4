function clockFunc (){
   
let date = new Date();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let viewHour = document.querySelector('.hour');
let viewMin = document.querySelector('.min');
let viewSec = document.querySelector('.sec');
let viewampm = document.querySelector('.ampm')

function dualNum(dual){
    return dual < 10 ? '0' + dual : dual;
}

let getTime = hour >= 12 ? 'PM' : 'AM';

hour % 12 == 0 ? 12 : hour;  


viewHour.innerHTML = dualNum(hour > 12 ? hour - 12 : hour);
viewMin.innerHTML = dualNum(min);
viewSec.innerHTML = dualNum(sec);
viewampm.innerHTML = getTime;

}


setInterval(()=> {
    clockFunc()
},1000);
