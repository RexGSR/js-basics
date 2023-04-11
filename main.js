let  hours = document.querySelector('.hours');
let  minutes = document.querySelector('.minutes');
let  seconds = document.querySelector('.seconds');
let  format = document.querySelector('.format');


let time = {
    '13':'01',
    '14':'02',
    '15':'03',
    '16':'04',
    '17':'05',
    '18':'06',
    '19':'07',
    '20':'08',
    '21':'09',
    '22':'10',
    '23':'11',
    '0':'12',
}


function showTime() {
    let currentHours = new Date().getHours();
    let currentMinutes = new Date().getMinutes();
    let currentSeconds = new Date().getSeconds();

    hours.textContent = (currentHours >= 13 || currentHours == 0 ) ? time[`${currentHours.toString()}`] : (currentHours == 10 || currentHours == 11 || currentHours == 12) ? currentHours : '0' + currentHours;
    
    minutes.textContent = (currentMinutes < 10 ) ? '0' + currentMinutes : currentMinutes;
    seconds.textContent = (currentSeconds < 10 ) ? '0' + currentSeconds : currentSeconds;
    
    format.textContent = (currentHours >= 12) ? 'PM' : 'AM'
}

setInterval(showTime, 1000);

// window.location.reload(); //rejected