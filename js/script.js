let foot = footer.innerHTML;
console.log(foot);
function choice() {
    let leng = document.querySelector('#choice_leng');
    let user = document.querySelector('#choice_user');
    let init = 0;

    leng.addEventListener('click', function () {
        if (init == 0) {
            id_leng.style.display = "flex";
            init = 1;
        } else {
            id_leng.style.display = "none";
            init = 0;
        }
    });

    user.addEventListener('click', function () {
        if (init == 0) {
            id_user.style.display = "flex";
            
            init = 1;
        } else {
            id_user.style.display = "none";
            init = 0;
        }
    });
}
choice();



function caruselOne() {
    let btn_prev = document.querySelector('#prev');
    let btn_next = document.querySelector('#next');
    let images = document.querySelectorAll('#gallery .photos img');
    let circle = document.querySelectorAll('#gallery .buttons .circles i');
    let i = 0;

    btn_next.onclick = function () {
        images[i].style.display = 'none';
        if (images[i].style.display == 'none') {
            circle[i].style.color = "#ce7dfd";
        }
        i++;
        if (i >= images.length) {
            i = 0;
        }
        images[i].style.display = 'block';
        if (images[i].style.display == 'block') {
            circle[i].style.color = "#fff";
        }
    };

    btn_prev.onclick = function () {
        images[i].style.display = 'none';
        if (images[i].style.display == 'none') {
            circle[i].style.color = "#ce7dfd";
        }
        i--;
        if (i < 0) {
            i = images.length - 1;
        }
        images[i].style.display = 'block';
        if (images[i].style.display == 'block') {
            circle[i].style.color = "#fff";
        }
    };
    circle1.onclick = function () {
        images[1].style.display = 'none';
        images[2].style.display = 'none';
        images[0].style.display = 'block';
        circle[1].style.color = "#ce7dfd";
        circle[2].style.color = "#ce7dfd";
        circle[0].style.color = "#fff";
    };
    circle2.onclick = function () {
        images[0].style.display = 'none';
        images[2].style.display = 'none';
        images[1].style.display = 'block';
        circle[1].style.color = "#fff";
        circle[2].style.color = "#ce7dfd";
        circle[0].style.color = "#ce7dfd";
    };
    circle3.onclick = function () {
        images[0].style.display = 'none';
        images[1].style.display = 'none';
        images[2].style.display = 'block';
        circle[1].style.color = "#ce7dfd";
        circle[2].style.color = "#fff";
        circle[0].style.color = "#ce7dfd";
    };
}
caruselOne();


function caruselTwo() {
    let currentPos = 0;
    const colorWidth = 400;
    let content = document.getElementById("block_stock");
    let next = document.getElementById("right");
    let prev = document.getElementById("left");

    function slide(event) {
        if (event.target.className == "fas fa-chevron-right") {
            if (currentPos === -3 * colorWidth) {
                currentPos = 0;
            } else {
                currentPos = currentPos - colorWidth;
            }
        } else {
            if (currentPos === 0) {
                currentPos = -3 * colorWidth;
            } else {
                currentPos = currentPos + colorWidth;
            }
        }
        content.style.left = currentPos + "px";
    }

    prev.addEventListener("click", slide);
    next.addEventListener("click", slide);
}
caruselTwo();




function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function CreateClock(id) {
    let clock = document.getElementById(id);

    let daysSpan = document.createElement('span');
    daysSpan.className = 'days';
    let dayText = document.createElement('div');
    dayText.innerHTML = 'Дни';

    let hoursSpan = document.createElement('span');
    hoursSpan.className = "hours";
    let hoursText = document.createElement('div');
    hoursText.innerHTML = 'Часы';

    let minutesSpan = document.createElement('span');
    minutesSpan.className = "minutes";
    let minutesText = document.createElement('div');
    minutesText.innerHTML = 'Минуты';

    let secondsSpan = document.createElement('span');
    secondsSpan.className = "seconds";
    let secondsText = document.createElement('div');
    secondsText.innerHTML = 'Секунды';


    clock.appendChild(dayText);
    dayText.appendChild(daysSpan);
    clock.appendChild(hoursText);
    hoursText.appendChild(hoursSpan);
    clock.appendChild(minutesText);
    minutesText.appendChild(minutesSpan);
    clock.appendChild(secondsText);
    secondsText.appendChild(secondsSpan);
}


function initializeClock(id, endtime) {
    let clock = document.getElementById(id);
    let daysSpan = clock.querySelector('.days');
    let hoursSpan = clock.querySelector('.hours');
    let minutesSpan = clock.querySelector('.minutes');
    let secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        let t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    let timeinterval = setInterval(updateClock, 1000);
}

let deadline = new Date(Date.parse(new Date()) + 7 * 19 * 60 * 60 * 1000);
let deadline2 = new Date(Date.parse(new Date()) + 8 * 24 * 60 * 60 * 1000);
let deadline3 = new Date(Date.parse(new Date()) + 10 * 24 * 60 * 60 * 1000);
let deadline4 = new Date(Date.parse(new Date()) + 11 * 24 * 60 * 60 * 1000);
let deadline5 = new Date(Date.parse(new Date()) + 1 * 24 * 60 * 60 * 1000);
let deadline6 = new Date(Date.parse(new Date()) + 3 * 24 * 60 * 60 * 1000);
CreateClock('countdown');
initializeClock('countdown', deadline);
CreateClock('countdown_2');
initializeClock('countdown_2', deadline2);
CreateClock('countdown_3');
initializeClock('countdown_3', deadline3);
CreateClock('countdown_4');
initializeClock('countdown_4', deadline4);
CreateClock('countdown_5');
initializeClock('countdown_5', deadline5);
CreateClock('countdown_6');
initializeClock('countdown_6', deadline6);