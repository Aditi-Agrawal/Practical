//Selector

const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const day = document.getElementById("day");

//Event  listener
name.addEventListener("keypress",setname);
name.addEventListener("blur",setname);

//Functions

function showtime(){
    //to have current tym, we have to use
    let today = new Date();
    //console.log(today);
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let date = today.toDateString();
     
    //Am Pm Format
    const amPm = hour>=12 ? 'PM' : 'AM';

    //12 hours Format
    hour = hour%12 || 12;           //logical condition 
    time.innerHTML = `${addZero(hour)}:${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`; 
    day.innerHTML = `${date}`;
    setTimeout(showtime,1000);      //call function repeatedly after each second

}

function addZero(n){
    return((parseInt(n,10) < 10 ? '0' : '')+n);
}

function setGreeting(){
    let today = new Date();
    let hour = today.getHours();
    if(hour < 12){
        document.body.style.backgroundImage='url("goodMorning.png")';
        greeting.innerHTML="Good Morning";
    }
    else if(hour < 18){
        document.body.style.backgroundImage='url("goodAfternoon.png")';
        document.body.style.color="white";
        document.body.style.opacity="0.8";
        greeting.innerHTML="Good Afternoon";
    }
    else{
        document.body.style.backgroundImage='url("gn.png")';
        document.body.style.color="white";
        greeting.innerHTML="Good Night";
    }
}

function getName(){
    if(localStorage.getItem('myName')===null){
        name.innerHTML = "[Enter Name]";
    }
    else{
        name.innerHTML = localStorage.getItem('myName');
    }
}

function setname(e){
    if(e.type==="keypress"){
        if(e.keyCode==13){
            localStorage.setItem("myName",e.target.innerHTML);
            name.blur();
        }
    }
    else{
        localStorage.setItem("myName",e.target.innerHTML);
    }
}

//Function Call
showtime();
setGreeting();
getName();