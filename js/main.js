//_____________________заняття 1_________________________

// Напишіть інструкцию, яка приймає рядок як аргумент і перетворює регістр першого
// символу рядка з нижнього регістру у верхній.
//const str = "string not starting with capital";

// const str = "string not starting with capital";

// const value = str.replace('s', "S");

// console.log(value);

// Переробіть наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --.
//Кількість рядків коду не повинна змінитися. Код для переробки:
// let num = 1;
// num = num + 12;
// num = num - 14;
// num = num * 5;
// num = num / 7;
// num = num + 1;
// num = num - 1;

// let num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /= 7;
// num += 1;
// num -= 1;


//Шаблонные строки
//Написать фразу с помощью конкатенации и шаблонных строк
//"Hello, my name is [name], I'm [age] years old and I like [hobby]", где в квадратных скобках - переменные вставленные в строку


// const name = 'Dan';
// const age = 35;
// const hobby = 'swimming';

// const name = 'Dan';
// const age = 35;
// const hobby = 'swimming';

// let message = `Hello, my name is ${name}, I'm ${age} years old and I like ${hobby}`;
// console.log(message);


// message = "Hello, my name is " + name + ", I'm " + age + " years old and I like " + hobby;
// console.log(message);


// Підрахуйте суму чисел у діапазоні від 1 до 10 за допомогою циклу
// for, while та do...while.
// Підказка: у результаті має вийти 55.

// let result = 0;

// for (let i = 1; i <= 10; i += 1 ){
//     result += i;
// }

// let i = 1;
// while (i !== 11) {
//     result += i;
//     i += 1;
// }

// let i = 0;
// do {
//     result += i;
//     i += 1;
// }while(i <= 10)

// console.log(result);

//_____________________/заняття 1_________________________

// let link = "https://my-site.com/about";

// link += !link.endsWith("/") && link.includes('my-site') ? '/' : '';

// console.log(link);


// const arr = ['8', '11'];

// console.log(arr);

// console.log((Number(arr[0]) + Number(arr[1])) * 2);


//___________________Модуль 3__________________//

// Example 1 - Базові операції з масивом
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.
// const genres = ;


// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-рол')

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres);

// const first = genres.shift();
// console.log(genres);
// console.log(first);
// genres.unshift('Country', 'Reggae')
// console.log(genres);

//splice
// const genres = ['Jazz', 'Blues'];
// genres.splice(genres.length, 0, 'Рок-н-рол')
// console.log(genres.splice(0, 1)[0]);
// genres.splice(0, 0, 'Country', 'Reggae')
// console.log(genres);




// Example 1 - Базові операції з масивом
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.

// const genres = ['Jazz', 'Blues'];
// console.table(genres);
// genres.push('Рок-н-рол');
// console.table(genres);

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.splice(0, 1));
// console.log(genres);
// genres.unshift('Country', 'Reggae');
// console.log(genres);



// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

// const values = '8 11';
// console.log(values[0]);
// console.log(values[1]);
// // Array -> arr
// const arr = values.split(' ');
// const result = arr[0] * arr[1]
// console.log(result);




// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

// const values = '8 11';
// const arr = values.split(' ');
// console.log(arr);
// const result = arr[0] * arr[1];
// console.log(result);

//Периметр

//Переведення до Number
// const values = '8 11';
// const arr = values.split(' ');
// for (let i = 0; i < arr.length; i += 1){
//     arr[i] = Number(arr[i]);
// }
// const result = (arr[0] + arr[1]) * 2;
// console.log(result);

//Без явного переведення до Number
// const values = '8 11';
// const arr = values.split(' ');
// const result = arr[0] * 2 + arr[1] * 2;
// console.log(result);




// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (let i = 0; i < fruits.length; i+=1){
//     console.log(`номер елемента: ${i + 1} значення елемента ${fruits[i]}`);
// }
// console.log('-------------------------------');
// for (let i = 0, n = 1; i < fruits.length; i += 1, n += 1) {
//     console.log(`номер елемента: ${n} значення елемента ${fruits[i]}`);
// }



// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1){
//     console.log(`Номер елемента ${i + 1}: ${fruits[i]}`);
// }



// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// const names = 'Jacob,William,Solomon,Artem';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const namesToArr = names.split(',');
// const phonesToArr = phones.split(',');
// console.log(namesToArr);
// console.log(phonesToArr);

// for (let i = 0; i < namesToArr.length; i +=1){
//     console.log(`${namesToArr[i]} - ${phonesToArr[i]}`);
// }

// for (let i = 0; i < namesToArr.length && i < phonesToArr.length; i +=1){
//     console.log(`${namesToArr[i]} - ${phonesToArr[i]}`);
// }


// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// const names = 'Jacob,William,Solomon,Artem';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesToArr = names.split(',');
// const phonesToArr = phones.split(',');

// for (let i = 0; i < namesToArr.length && i < phonesToArr.length; i += 1){
//     console.log(namesToArr[i], ": ", phonesToArr[i]);
// }





// Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.

// const string = 'Welcome to the future';
// const arr = string.split(' ');
// const first = arr.shift();
// const last = arr.pop();
// const result = arr.join(' ')
// console.log(result);
// console.log('first', first);
// console.log('last', last);



// Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.

// const string = 'Welcome to the future';
// const arr = string.split(' ');
// arr.pop();
// arr.shift();
// const result = arr.join(' ');
// console.log(result);

// const string = 'Welcome to the future';
// const arr = string.split(' ');
// console.log(arr.splice(0, 1)[0]);
// console.log(arr.splice(arr.length - 1 , 1)[0]);
// console.log(arr.join(' '));

// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить його в консоль.
// const string = 'Welcome to the future';
// const SEPARATOR = '';
// const result = string.split(SEPARATOR).reverse().join(SEPARATOR);
// console.log(result);

// const string = 'Welcome, to the - future';
// const separators = [',', '-'];
// const SEPARATOR = '';
// const result = string.split(SEPARATOR);

// for (let i = 0; i < result.length; i += 1) {
//     if (separators.includes(result[i])) {
//         result.splice(i, 1)
//     }
// }
// const arr = result.join(SEPARATOR).replaceAll('  ', ' ').split(' ');

// for (let i = 0; i < arr.length; i += 1) {
//     const item = arr[i].split(SEPARATOR).reverse().join(SEPARATOR)
//     arr[i] = item
// }
// console.log(arr.join(' '));



// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить його в консоль.

// const string = 'Welcome to the future';
// const result = string.split('');
// const res = [];
// for (let i = result.length - 1; i >= 0; i -= 1){
//     res.push(result[i]);
// }

// console.log(res.join(''));

// const string = 'Welcome to the future';
// const result = string.split('').reverse().join('');
// console.log(result);


// Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// const result = [];

// const exm = [...langs].sort((a, b) => a.localeCompare(b))
// console.log('example', exm);

// for (let i = 0; i < langs.length; i += 1) {
//     let max = langs[i];
//     for (let j = i; j < langs.length; j += 1) {
//         if (max > langs[j] && !result.includes(langs[j])) {
//             max = langs[j];
//         }
//     }
//     result.push(max)
// }
// console.log(result);

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// const result = [];

// console.log(langs);

// const exm = [...langs].sort((a, b) => a.localeCompare(b))
// console.log('example', exm);

// for (let i = 0; i < langs.length; i += 1){
//     let max = langs[i];
//     for (let j = i; j < langs.length; j += 1){
//         if (max > langs[j]) {
//             max = langs[j];
//         }
//     }
//     i = -1;
//     langs.splice(langs.indexOf(max), 1);
//     result.push(max);
// }
// console.log('result:', result);


// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// const result = [];

// console.log('start', langs);

// for (let i = 0; i < langs.length; i += 1){
//     let max = langs[i];
//     for (let j = 0; j < langs.length; j += 1){
//         if (max > langs[j] && !result.includes(langs[j])) {
//             max = langs[j];
//             i = -1;
//         }
//     }
//     if (!result.includes(max)) {
//         result.push(max);
//     }
// }
// console.log('start', langs);
// console.log('result', result);

// Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// for (const number of numbers) {
//     if (min > number) {
//         min = number;
//     }
// }
// console.log(min); // 1


// Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// const numbers = [22, 17, 94, 21, 23, 37];

// let min = numbers[0];

// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] < min) {
//         min = numbers[i];
//     }
// }
// console.log(min);


// const numbers = [22, 17, 94, 21, 23, 37];
// let min = numbers[0], max = numbers[0];

// for (const number of numbers) {
//     if (number < min) {
//         min = number;
//     }
//     if(number > max){
//         max = number;
//     }
// }
// console.log("min: ", min, "max: ", max);
//___________________/Модуль 3__________________//


//___________________Модуль 4__________________//




//!___________________/Модуль 3__________________//


//!___________________Модуль 4__________________//


// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
// Example 9  самостійно + JS Docs

// const a = [1, 2, 3];
// const b = a;

// function foo() {
// console.log(arguments);
// }

// foo(1, 2, 3);
// foo(1, 2, 3, 4, 5);
// foo(1);



// function foo(a) {

// }

// foo(1)



// expression


// const foo = function (a, b, c) {
//     console.log('1', a);
//     console.log('2', b);
//     console.log('3', c);
// }
// console.log(foo(3, 2, 1));


//declaration

// function foo(a, b, c) {
//     console.log('1', a);
//     console.log('2', b);
//     console.log('3', c);
// }

// console.log(foo(3, 2, 1));





/** */

/**  - виклик JS DOCK comment - обов'язково перед функцією (прописужться лише після створення функції)

// /**
//  * Add value
//  * @param {Number} a
//  * @param {Number} b
//  * @param {Number} c
//  * @returns {Number} Summ
//  */
// function add(a, b, c) {
//     const maxValue = 10;
//     const summ = a + b + c;
//     let message;

//     if (summ > maxValue) {
//         message = 'Більше'
//     } else {
//         message = 'Меньше'
//     }

//     return message;
// }

// console.log('3, 2, 1', add(3, 2, 1));
// console.log('32, 1, 5', add(32, 1, 5));

// Патерн повернення
// function add(a, b, c) {
//     const maxValue = 10;
//     const summ = a + b + c;

//     if (summ > maxValue) {
//         return 'Більше'
//     }

//     return 'Меньше';
// }
// console.log(add(3, 2, 1));
// console.log('3, 2, 1', add(3, 2, 1));
// console.log('32, 1, 5', add(32, 1, 5));





// function foo() {
// for (let i = 0; i < arguments.length; i += 1) {
//     console.log(arguments[i]);
// }
// console.log(arguments);
// for(const arg of arguments){
//     console.log(arg);
// }
// console.log(arguments);
// for (let i = 0; i < arguments.length; i += 1) {
//     console.log(arguments[i]);
// }
// const arr = Array.from(arguments);
// console.log(arr);
// const arr = [...arguments]
// console.log(typeof arguments);
// console.log(Array.isArray(arguments));
// console.log(typeof arr);
// console.log(Array.isArray(arr));
// }

// foo(1, 2, 3);
// foo(1, 2, 3, 4, 5);
// foo(false);


// function add(a = 0, b = 0, c = 0) {
//     console.log('c', c);
//     console.log('b', b);
//     console.log('a', a);
//     return a + b + c
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2));
// console.log(add(1));
// console.log(add());


// Перерва до 21.15





// if (true) {
//     var example = 1;
// }
// v


// function foo(){
//     var example = 1;
// }
// foo()
// console.log(example);



// const example = 1;

// let b = 3;
// function foo(a) {
//     console.log('a', a);
//     a = 99;
//     console.log('a', a);
//     // a = 12
//     // const example = 2;
//     // console.log(example);
//     // console.log(a);
// }
// foo(b)
// console.log('b',b);
// console.log(a);
// console.log(example);


// const b = [1, 2, 3];
// function foo(a) {
//     // a = Array.from(a)
//     // a = [...a];
//     console.log('a', a);
//     a.splice(1, 1)
//     //

//     console.log('a', a);
//     console.log(a === b);
// }
// foo(b)
// console.log('b', b);


// function showResult(a, b, c) {
//     const maxValue = 10;


//     if (add(a, b, c) > maxValue) {
//         return 'Більше'
//     }

//     return 'Менше';
// }


// function add(a, b, c) {
//     return a + b + c;
// }


// console.log(showResult(11, 3, 4));





// Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини.Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки.Не цілі числа можуть бути задані у вигляді 24.7 або 24, 7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;


// /**
//  * Розраховує та повертає індекс маси тіла людини
//  * @param {String} weight вага особи
//  * @param {String} height зріст особи
//  * @returns {Number} індекс маси тіла людини
//  */
// function calcBMI(weight, height) {
//     weight = Number(weight.replace(',', '.'))
//     height = Number(height.replace(',', '.'))

//     return Number((weight / height ** 2).toFixed(1));
// }

// const bmi = calcBMI('88,3', '1.75');
// const bmi2 = calcBMI('88.3', '1,75');
// console.log(bmi); // 28.8


// function calcBMI(weight, height) {
//     weight = Number(weight.replace(',', '.'));
//     height = Number(height.replace(',', '.'));
//     return (weight / height ** 2).toFixed(1);
// };

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8
// const bmi2 = calcBMI('88.3', '1,75');
// console.log(bmi2); // 28.8


// Example 2 - Найменше з чисел
// Напиши функцію min(a, b), яка повертає найменше з чисел a та b.

// /**
//  *
//  * @param {Number} a //first argument
//  * @param {Number} b //second argument
//  * @returns {Number} //result of comparison
//  */
// function min(a, b) {
//     return a > b ? b : a;
// };

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// function min(a, b) {
//     let minValue;

//     if (a > b) {
//         minValue = b;
//     } else {
//         minValue = a;
//     }

//     return minValue
// }


// /**
//  * повертає найменше з чисел
//  * @param {Number} a
//  * @param {Number} b
//  * @returns {Number || String} найменше з число || повідомлення про помилку
//  */
// function min(a, b) {
//     if (a > b) {
//         return b;
//     }

//     return a
// }


// function min(a, b) {
//     return a > b ? b : a;
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1




// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка.Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//     const result = dimensions.split(' ');
//     return result[0] * result[1];
// };

// const dimensions = '11 8';
// console.log(getRectArea(dimensions));

// /**
//  * Oбчислення площі прямокутника
//  * @param {String} dimensions
//  * @returns {Number}
//  */
// function getPerimeter(dimensions) {
//     dimensions = dimensions.split(' ')
//     return 2 * (Number(dimensions[0]) + Number(dimensions[1]))
// }
// // console.log(getPerimeter('8 11'));


// /**
//  * Oбчислення площі прямокутника
//  * @param {String} dimensions
//  * @returns {Number}
//  */
// function getRectArea(dimensions) {
//     dimensions = dimensions.split(' ')
//     console.log(dimensions);
//     return Number(dimensions[0]) * Number(dimensions[1]);
// }

// // console.log(getRectArea('8 11'));













// Example 4 - Логування елементів
// Напиши функцію logItems(items), яка отримує масив та використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення у форматі < номер елемента > - <значення елемента>. Нумерація елементів повинна починатися з 1.

//     Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.

// function logItems(items) {
//     for (let i = 0; i < items.length; i += 1){
//         console.log(`Номер елемента: ${i + 1} - Значення елемнта: ${items[i]}`);
//     }
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// /**
//  * виводити в консоль повідомлення
//  * @param {Array} items
//  */
// function logItems(items) {
//     // Якщо двічі та більше компенсуємо значення порядкового номера
//     // for (let i = 0, j = 1; i < items.length; i += 1, j += 1) {
//     //     console.log(`${j} - ${items[i]}`);
//     // }

//     // Якщо 1 раз компенсуємо значення порядкового номера
//     for (let i = 0; i < items.length; i += 1) {
//         console.log(`${i + 1} - ${items[i]}`);
//     }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);


//     Example 6 - Пошук найбільшого елемента
//     Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.

//     function findLargestNumber(numbers) { }

//     console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
//     console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83




// function findLargestNumber(numbers) {
//     let max = numbers[0];
//     for (let i = 1; i < numbers.length; i += 1){
//         if (max < numbers[i]) {
//             max = numbers[i];
//         }
//     }
//     return max;
// };

//     console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
//     console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83


// function findSmallestNumber(numbers) {
//     let min = numbers[0];
//     for (let i = 1; i < numbers.length; i += 1){
//         if (min > numbers[i]) {
//             min = numbers[i];
//         }
//     }
//     return min;
// };

//     console.log(findSmallestNumber([2, 17, 94, 1, 23, 37])); // 1
//     console.log(findSmallestNumber([49, 4, 7, 83, 12])); // 4

//     Example 7 - Середнє значення
//     Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// function calAverage(...arguments) {
//     let total = 0;
//     for (const arg of arguments) {
//         total += arg;
//     }
//     return total / arguments.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// function calAverage() {
//     let total = 0;

//     for (const num of arguments) {
//         total += num;
//     }

//     return total / arguments.length
// }

// function calAverage() {
//     const arr = Array.from(arguments);
//     let total = 0;

//     for (const num of arr) {
//         total += num;
//     }

//     return total / arr.length
// }


// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2











//     Example 8 - Форматування часу
//     Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.


// function formatTime(minutes) {
//     const hours = Math.floor(minutes / 60);
//     const min = minutes % 60
//     return `${hours.toString().padStart(2, '0')}:${min.toString().padStart(2,'0')}`
// };

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// function formatTime(minutes) {
// const hours =  Math.floor(minutes / 60);
// const min = minutes % 60;
// return `${hours.toString().padStart(2,'0')} : ${min.toString().padStart(2,'0')}`
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"













//     Example 9 - Колекція курсів (includes, indexOf, push і т. д.)
//     Напишіть функції для роботи з колекцією навчальних курсів courses:

//     addCourse(name) - додає курс до кінця колекції
//     removeCourse(name) - видаляє курс із колекції
//     updateCourse(oldName, newName) - змінює ім'я на нове

//     addCourse('Express');
//     console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
//     addCourse('CSS'); // 'Ви вже маєте такий курс'

//     removeCourse('React');
//     console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
//     removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'

//     updateCourse('Express', 'NestJS');
//     console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];


// /**
//  * 
//  * @param {String} name 
//  * @returns {String}
//  */
// function addCourse(name) {
//     if (courses.includes(name)) {
//         return console.log('Ви вже маєте такий курс');
//     }
//     return courses.push(name);
// };

// console.log(courses);
// addCourse('Express');
// console.log(courses);
// addCourse('CSS');

// console.log("Case: 2");

// function removeCourse(name) {
//     if (!courses.includes(name)) {
//         return console.log("Курс із таким ім'ям не знайдено");
//     }
//     return courses.splice(courses.indexOf(name), 1);;
// };

// console.log(courses);
// removeCourse('React');
// console.log(courses);
// removeCourse('Vue');
// console.log(courses);

// console.log("Case: 3");

// function updateCourse(oldCourses, newCourses) { 
//      if (!courses.includes(oldCourses)) {
//         return console.log("Курс із таким ім'ям не знайдено");
//     }
//     return courses[courses.indexOf(oldCourses)] = newCourses;
// };

// console.log(courses);
// updateCourse('Express', 'NestJS');
// console.log(courses);


// const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];

// const result = [];

// for (let i = 0; i < langs.length; i += 1) {
//     let max = langs[i];

//     if (result.includes(langs[i])) {
//         continue;
//     }

//     // let max = result.includes(langs[i]) ? 'z' : langs[i];
//     for (let j = 0; j < langs.length; j += 1) {
//         if (max > langs[j] && !result.includes(langs[j])) {
//             max = langs[j];
//             i = -1
//         }
//     }
//     result.push(max)
// }
// console.log('Result: ', result);



// for (let i = 0; i < langs.length; i += 1) {
//     let max = langs[i];
//     for (let j = i; j < langs.length; j += 1) {
//         if (max > langs[j]) {
//             max = langs[j];
//         }
//     }
//     i = -1;
//     langs.splice(langs.indexOf(max), 1);
//     result.push(max);
// }
// console.log('result:', result);

// (із збереженням початкового масиву langs):

// const result = [];

// console.log('start', langs);
// let total = 0
// for (let i = 0; i < langs.length; i += 1) {
//     let max = langs[i];
//     for (let j = 0; j < langs.length; j += 1) {
//         if (max > langs[j] && !result.includes(langs[j])) {
//             max = langs[j];
//             i = -1;
//         }
//         total += 1
//     }
//     if (!result.includes(max)) {
//         result.push(max);
//     }
// }
// console.log('start', langs);
// console.log('result', result);
// console.log(total);

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// let total = 0;
// for (let i = 0; i < langs.length - 1; i += 1) {
//     for (let j = i + 1; j < langs.length; j += 1) {
//         if (langs[i] > langs[j]) {
//             let temp = langs[i];
//             langs[i] = langs[j];
//             langs[j] = temp;
//         }
//         total += 1
//     }
// }
// console.log(total);
// console.log(langs);
// const result = []
// let total = 0
// for (let i = 0; i < langs.length; i++) {
//     let addResult = false;

//     for (let j = 0; j < result.length; j++) {
//         if (langs[i] < result[j]) {
//             result.splice(j, 0, langs[i]);
//             addResult = true;
//             total += 1
//             break;
//         }
//         total += 1
//     }
//     if (!addResult) {
//         result.push(langs[i]);
//     }
// }
// console.log(result);
// console.log(total);

// for (let i = 0; i < langs.length; i += 1) {
//     let max = langs[i];
//     let indexToDelete = i;
//     for (let j = i; j < langs.length; j += 1) {
//         if (langs[j] > max) {
//             max = langs[j];
//             indexToDelete = j;
//         }
//         total += 1;
//     }
//     langs.splice(indexToDelete, 1);
//     langs.unshift(max);
// }


// function indexOf(arr, ele) {
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[i] === ele) {
//             return i
//         }
//     }
//     return -1
// }


//!___________________/Модуль 4__________________//

