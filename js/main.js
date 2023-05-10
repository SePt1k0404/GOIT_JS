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