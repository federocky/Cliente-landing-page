const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

//options
const showAmPm = true;


//show time
function showTime(){
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    //set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12hr format
    hour = hour % 12 || 12;

    //output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);

}

//agregando ceros
function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//set Background and greeting
function setBackgroundGreet(){
    let today = new Date();
    let hour = today.getHours();

    if(hour < 12){
        //morning
        document.body.style.backgroundImage = "url('../img/manana.jpg')";
        greeting.textContent = 'Good Morning';
    } else if(hour < 19) {
        ///afternoon
        document.body.style.backgroundImage = "url('../img/tarde.jpg')";
        greeting.textContent = 'Good Afternoon';
        document.body.style.color = '#fff';
    } else {
        //night
        document.body.style.backgroundImage = "url('../img/noche.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = '#fff';
    }

}

function getName() {
    if(localStorage.getItem('name') === null) {
        
        name.textContent = '[Enter Name]';

    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function setName(e) {
    if(e.type === 'keypress'){
        //make sure enter is pressed, comprobamos dos posibilidades por distintos navegadores
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur(); ///para que no baje de linea
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}


function getFocus() {
    if(localStorage.getItem('focus') === null) {
        
        focus.textContent = '[Enter focus]';

    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

function setFocus(e) {
    if(e.type === 'keypress'){
        //make sure enter is pressed, comprobamos dos posibilidades por distintos navegadores
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur(); ///para que no baje de linea
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}



name.addEventListener('keypress', setName);
name.addEventListener('blur', setName); //blur es lo opuesto de focus

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus); //blur es lo opuesto de focus

//run
showTime();
setBackgroundGreet();
getName();
getFocus();
