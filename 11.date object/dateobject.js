
// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.


var seconds = new Date().getTime() / 1000

const date = new Date();

//year today
let year = date.getFullYear();
console.log(year);

//month today as a number
let month = date.getMonth() + 1;
console.log(month);

//day today as a number
let day = date.getDate();
console.log(day);

//date today
let currentDate = `${day}-${month}-${year}`;
console.log(currentDate)

//hours now
console.log(date.getHours()  )
//minutes now
console.log(date.getMinutes())
//Seconds now
console.log(date.getSeconds())
//numbers of seconds elapsed from January 1, 1970 to now.
console.log(seconds)
