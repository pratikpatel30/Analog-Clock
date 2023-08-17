// 12 hours = 360 deg
// 1 hours = 360/12 mens 30deg
// h hours = 30h + m/2s

//60min = 30deg
//1min = 30/60 means 1/2
// m min = (1/2)m

// for minite
// 60min =360deg
// 1 min = 360/60 = 6deg
//m min = 6m

// for second
//60 sec = 360deg
// 1sec = 360/60= 6deg
// s sec = 6s

let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function desplayTime(){
    let date = new Date();

    //Getting hour , min, second form date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    //calculate hour rotation
    let hRotation = 30*hh + mm/sec;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(desplayTime, 1000)