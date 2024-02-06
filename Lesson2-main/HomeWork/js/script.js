// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.
// let zmienna = 1; 

// if (zmienna > 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// let zmienna = 0; 

// if (zmienna > 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// let zmienna = -3; 

// if (zmienna > 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true
// let str = "test";
// str === "test" ? console.log(true) : console.log(false);
// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.
// let num = Number(13);
// if (num > 10) {
//     console.log(num - 5);
// } else if (num < 10) {
//     console.log(num + 5);
// } else if (num === 10) {
//     console.log(num * num);
// } else {
//     console.log("Num is NaN");
// }
//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
//  let number = prompt("Введіть число від 1 до 12");
// number = Number(parseInt(number));

// switch (number) {
//     case 1:
//         alert(`${number}-й місяць - Січень`);
//         break;
//     case 2:
//         alert(`${number}-й місяць - Лютий`);
//         break;
//     case 3:
//         alert(`${number}-й місяць - Березень`);
//         break;
//     case 4:
//         alert(`${number}-й місяць - Квітень`);
//         break;
//     case 5:
//         alert(`${number}-й місяць - Травень`);
//         break;
//     case 6:
//         alert(`${number}-й місяць - Червень`);
//         break;
//     case 7:
//         alert(`${number}-й місяць - Липень`);
//         break;
//     case 8:
//         alert(`${number}-й місяць - Серпень`);
//         break;
//     case 9:
//         alert(`${number}-й місяць - Вересень`);
//         break;
//     case 10:
//         alert(`${number}-й місяць - Жовтень`);
//         break;
//     case 11:
//         alert(`${number}-й місяць - Листопад`);
//         break;
//     case 12:
//         alert(`${number}-й місяць - Грудень`);
//         break;

//     default:
//         alert("Помилка введення числа, спробуйте ще");
// }
//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
//  const number = prompt("Введіть тризначне число");
// let sum = null;

// if (number !== false) {
//     alert("Помилка введення числа, спробуйте ще");
// } else if (number.length === 3) {
//     for (let i = 0; i < number.length; i++) {
//         sum = sum + Number(number[i]);
//     }
//     alert(`Сума чисел числа ${number} дорівнює: ${sum}`);
// } else {
//     alert("Помилка введення числа, спробуйте ще");
// }