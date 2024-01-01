'use strict'
let userAge = prompt('Введіть Вашу дату народження:'); // < --- Запитуємо дату народження користувача
let userCity = prompt('Введіть місто в якому Ви живете:');// < --- Місто де він живе
let userFavSport = prompt('Введіть Ваш улюблений вид спорту:');// < --- Улюблений вид спорту

const currentYear = (new Date).getFullYear();// < --- Змінна для отримання поточного року
let age = currentYear - parseInt(userAge);// < --- Змінна для отримання результатів, якщо клієнт введе свій рік народження
//Зміні для виводу альорту
let resultUserAge;
let champion;
let cityInfo;

//Умова, що буде якщо клієнт скасує ввід даних або введе їх(рік народження)
if(userAge === null){
    resultUserAge = 'Шкода, що Ви не захотіли ввести свою дату народження.';
} else{
    resultUserAge = `Ваш вік: ${age}`;
};

//Умова, що буде якщо клієнт скасує ввід даних або введе їх(місто)
if(userCity === null){
    cityInfo = 'Шкода, що Ви не захотіли ввести своє місто.';
} else if (userCity === 'Київ'){
    cityInfo = 'Ви живете у столиці України.';
} else if (userCity === 'Вашингтон'){
    cityInfo = 'Ви живете у столиці США.';
} else if (userCity === 'Лондон'){
    cityInfo = 'Ви живете у столиці Великої Британії.';
} else{
    cityInfo = `Ви живете у місті: ${userCity}.`;
};

//Умова, що буде якщо клієнт скасує ввід даних або введе їх(улюблений вид спорту)
if(userFavSport === null){
    champion = 'Шкода, що Ви не захотіли ввести свій улюблений вид спорту.';
} else if(userFavSport === 'Шахи'){
    champion = `Ваш улюблений вид спорту: ${userFavSport}. Круто, хочеш стати, як Магнус Карлсен?`;
} else if(userFavSport === 'Гольф'){
    champion = `Ваш улюблений вид спорту: ${userFavSport}. Круто, хочеш стати, як Тайґер Вудс?`;
} else if(userFavSport === 'Тенніс'){
    champion = `Ваш улюблений вид спорту: ${userFavSport}. Круто, хочеш стати, як Новак Джокович?`;
} else{
    champion = `Ваш улюблений вид спорту: ${userFavSport}.`;
};

//Загальний алерт на вивід інформації
alert(`${resultUserAge}
${cityInfo}
${champion}`);