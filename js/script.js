"use strict";

    //1 Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість,
    // обсяг паливного бака, середня витрата палива на 100 км., водії),
    // і наступні функції для роботи з цим об'єктом:


let car = {
    manufacturer: 'KIA',
    model: 'Cerato',
    year: 2012,
    averageSpeed: 120,
    volume: 50,
    'average fuel consumption per 100 km': 8,
    driver: ['John', ' Alex', ' Jane'],


     // Висновок на екран з інформацією про автомобіль.
    report() {
        alert(this.manufacturer + ', ' + this.model + ', ' + this.year +
            ' рік випуску, ' + ' середня швидкість ' + this.averageSpeed + ' км/год., ' + ', обсяг баку '
            + this.volume + ' л, ' + 'витрата палива ' + this["average fuel consumption per 100 km"] + ' л/100км, '
            + ' ' + 'Водії: ' + this.driver);
    }
   };
 car.report();
//
//Додавання водія, який має право керувати автомобілем.

function addDriver () {
   // car.driver += ', Ann'; // тут я не впевнена, що так правильно. але працює
   car.driver += ', ' + prompt('Add new driver name'); // так при кожному виклику функції можна додавати водія
                                                                 // але як по-іншому додати кому я не придумала

}
addDriver(); // додали водія
car.report(); // перевірка

addDriver(); //додали ще одного водія
car.report();


//Заправка автомобіля.

function reflueling () {
    car.fluel = prompt('Додайте кількість літрів');
        alert(car.fluel + ' л заправлено');
}
reflueling();


//Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю.
// Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину,
// а також потрібно перевіряти чи має право водій керувати даним автомобілем (ім'я водія функція приймає другим аргументом).
// Також потрібно перевірити чи вистачить палива, для здійснення цієї поїздки, якщо палива не вистачить потрібно вивести
// повідомлення, про це і запропонувати заправити автомобіль.




function countTimeRoute(numberKilometrs, driver) {
    if (driver || car.driver) {
        alert ('У водія ' + driver + ' є дозвіл на керування');
    }
    let time = ((numberKilometrs / car.averageSpeed).toFixed(2))*60;

    function getTimeFromMins() {
        let hours = Math.floor(time/60);
            // if (hours % 4 === 0) {
            //     hours++;
            // } // не вийшло зробити ітерацію кожні 4 години. я не знаю як зробити саме повтор циклу кожні 4 години
           // тому додала ще змінну
        let vacation = ((hours / 4).toFixed(0));

        let minutes = Math.floor(time % 60);

        console.log (hours + +vacation +'ч. ' + minutes + 'м.');
              return hours + +vacation +'г. ' + minutes + 'хв.';
          }

    function countConsumptionFluel(){
        let consumption = (car["average fuel consumption per 100 km"] /100) * numberKilometrs;
        if (consumption > car.fluel) {
            alert('Потрібно заправитись.' + car.fluel + ' літрів не вистачить для ' + numberKilometrs + 'км');
        }
    }
    getTimeFromMins()
    countConsumptionFluel()

}
countTimeRoute(1000, 'John');














