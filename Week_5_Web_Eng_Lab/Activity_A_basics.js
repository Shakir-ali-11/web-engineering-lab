const course = "Web Eng";

// This throws a TypeError if uncommented:
// course = "Other";

let count = 0;

count++;
count++;

console.log("Course:", course);
console.log("Count:", count);

console.log(0 == false);
// true: loose equality converts both values to comparable types.

console.log(0 === false);
// false: 0 is a number, while false is a boolean.

console.log([] == false);
// true: loose equality performs type coercion.