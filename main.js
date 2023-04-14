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


// let plus = document.getElementById('plus')
// let minus = document.getElementById('minus')
// let counterdisplay = document.getElementById('counter')
// let AlarmBtn = document.getElementById('setAlarm')
// AlarmBtn.addEventListener('click',setAlarm)


// plus.addEventListener('click',handleplusbtn)
// minus.addEventListener('click',handlminusbtn)


// function handleplusbtn()
// {
//     if(Number(counterdisplay.innerText)===10){
//         alert('Number can not be show if its bigger than 10')
//         return
//     }
//     count
// function setAlarm(e){
//      e.PreventDefault();
//      let today = new Date();
//      let hours = today.getHours();
//      let minutes = today.getMinutes();
//      let seconds = today.getSeconds();
//      time = today.toLocaleTimeString();
//      counter.textcontent.

// }


let selectedHour = document.querySelector('#hourSelect');
let partSelected = document.querySelector('#dayPart');
let selectBtn = document.querySelector('#select');

selectBtn.addEventListener('click', setAlarm);

function setAlarm() {
    //get hour
    let hour = selectedHour.value;
    
    //get part
    let part = partSelected.value;
    

    let currentHour = new Date().getHours();

    if(part == 'AM') {
        // get current hour difference
        let differenece = hour - currentHour;
        console.log("differenece", differenece);

        if ((differenece >= 0) && (differenece <= (24 - currentHour)) ) {
            //for today and current hour
            // alarm for today
            console.log("alarm for today");
        } else {
            // alarm for tommorow
            console.log("alarm for tommorow");
        }
        
    } else {
        let pmtime = {
            '1':'13',
            '2':'14',
            '3':'15',
            '4':'16',
            '5':'17',
            '6':'18',
            '7':'19',
            '8':'20',
            '9':'21',
            '10':'22',
            '11':'23',
            '12':'24',
        }
        // get current hour difference
        let differenece = parseInt(pmtime[hour]) - currentHour;
        console.log("differenece", differenece);

        if ((differenece > 0) && (differenece <= (24 - currentHour)) ) {
            //for today and current hour
            // alarm for today
            console.log("alarm for today");
        } else {
            // alarm for tommorow
            console.log("alarm for tommorow");
        }
        debugger
    }

}