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

const grades = [55, 77, 23, 89, 100, 44, 33, 45];
const lessThan50 = [];
const equalOrBiggerThan50 = [];

for (let i in grades) {
  grades[i] < 50
    ? lessThan50.push(grades[i])
    : equalOrBiggerThan50.push(grades[i]);
}

console.log(lessThan50);
console.log(equalOrBiggerThan50);
console.log(grades);
