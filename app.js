// const grades = [55, 77, 23, 89, 100, 44, 33, 45];

// let sum = 0;
// for (let i = 0; i < grades.length; i++) {
//     sum += grades[i];
//     console.log(sum);
// }
// console.log("SUM", (sum / grades.length).toFixed(2));

// const grades = [55, 77, 23, 89, 100, 44, 33, 45];
// const lessThan50 = [];
// const equalOrBiggerThan50 = [];

// for (let j = 0; j < grades.length; j++) {
//   if (grades[j] < 50) {
//     lessThan50.push(grades[j]);
//   } else {
//     equalOrBiggerThan50.push(grades[j]);
//   }
// }

// console.log(lessThan50);
// console.log(equalOrBiggerThan50);
// console.log(grades);

// const grades = [55, 77, 23, 89, 100, 44, 33, 45];
// const lessThan50 = [];
// const equalOrBiggerThan50 = [];

// for (let i in grades) {
//   grades[i] < 50
//     ? lessThan50.push(grades[i])
//     : equalOrBiggerThan50.push(grades[i]);
// }

// console.log(lessThan50);
// console.log(equalOrBiggerThan50);
// console.log(grades);

// const students = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"];

// const findStudent = (name) => {
//   let counter = 0;

//   for (let student of students) {
//     student === name.toLowerCase() && counter++;
//   }
//   return counter === 0
//     ? `${name} can not be found`
//     : `${name} found ${counter} times`;
// };

// console.log(findStudent("Ahmet"));
// console.log(findStudent("AHMET"));
// console.log(findStudent("ismet"));
// console.log(findStudent("Alihan"));

const prices = [250, 150, 300, 500];

for (let i = 0; i < prices.length; i++) {
  console.log(prices[i]);
}

console.log("*********");

prices.forEach((p) => console.log(p));
console.log("********");
prices.forEach((p, i) => console.log("DEGER", p, "INDIS:", i));

let sum = 0;
prices.forEach((price) => (sum += price));

console.log("SUM:", sum);
console.log("********");

prices.forEach((price) => console.log(price * 2));

let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayse", "canan"];

const upperName = names.map((name) => name.toLocaleUpperCase());

console.log(upperName);
console.log(names);

names.map((isim, i, arr) => {
  arr[i] = isim.toLocaleUpperCase();
});

console.log(names);

const euro = 21.78;
const dolar = 19.8;
const tlPrices = [100, 150, 100, 50, 80];

const dolarPrices = tlPrices.map((tl) => Number((tl / dolar).toFixed(2)));
const euroPrices = tlPrices.map((tl) => Number((tl / euro).toFixed(2)));

console.log(dolarPrices);
console.log(euroPrices);
console.log(tlPrices);

const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

const biggerThan = salaries.filter((salary) => salary >= 10000);
console.log(biggerThan);
console.log(salaries);

const range = salaries.filter((salary) => salary >= 10000 && salary <= 10000);
console.log(range);

const biggerThan9000 = salaries
  .filter((s) => s < 9000)
  .map((s) => Number((s * 1.1).toFixed(2)));

console.log(biggerThan9000);

salaries
  .filter((s) => s < 9000)
  .map((s) => Number((s * 1.1).toFixed(2)))
  .forEach((s) => console.log(s));
