"use strict";

//Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:

let time = {
    hours: 0,
    minutes: 0,
    seconds: 0,

    showTime() {
        if ((this.minutes || this.seconds) <= 9) {

                alert('time: ' + this.hours + ':' + '0' + this.minutes + ':' + '0' + this.seconds);

           } else if (this.minutes === 0) {
              alert('time: ' + this.hours + ':' + '0' + this.minutes + ':' + this.seconds);
        } else {
            alert('time: ' + this.hours + ':' + this.minutes + ':' + this.seconds);
        }
    }
}
time.showTime();
                // Для виведення часу на екран.
                //     Зміни часу на передане кількість секунд.
                //     Зміни часу на передане кількість хвилин.
                //     Зміни часу на передане кількість годин.
                //     Врахуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша.
                //     Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:30:75».
                // Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

//Вариант №1

// function addTime() {
//
//     function getHours() {
//         let hour = prompt('add hour');
//             if (hour > 24) {alert ('error. when you add hours - write number from 1 to 24')}
//                 time.hours += +hour;
//             if (time.hours > 24) {time.hours %= 24 }
//     }
//
//     function addMinutes() {
//         let minute = prompt('add minutes');
//         time.minutes += +minute;
//             if (time.minutes >= 60) {
//                 time.minutes = time.minutes - 60;
//                 time.hours++;
//         }
//     }
//     function addSeconds() {
//         let second = prompt('add seconds');
//         time.seconds += +second;
//         if (time.seconds >= 60) {
//             time.seconds = time.seconds - 60;
//             time.minutes++;
//         }
//         if (time.minutes >= 60) {
//             time.minutes = time.minutes - 60;
//             time.hours++;
//         }
//     }
//
//
//     getHours();
//     addMinutes();
//     addSeconds();
//     time.showTime();
// }
// addTime();

//Вариант №2
function getNewTime() {
    let hour = prompt('add hour');
    if (hour > 24) {alert ('error. when you add hours - write number from 1 to 24')}
    time.hours += +hour;
    let minute = prompt('add minutes');
    time.minutes += +minute;
    let second = prompt('add seconds');
    time.seconds += +second;

    // if (hour > 24) {alert ('error. when you add hours - write number from 1 to 24')}
    // time.hours += +hour;
     if (time.hours > 24) {time.hours %= 24 }

    if (time.seconds >= 60) {
        time.seconds = time.seconds - 60;
        time.minutes++;
    }
    if (time.minutes >= 60) {
        time.minutes = time.minutes - 60;
        time.hours++;
    }
}

getNewTime();
time.showTime()