// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm
const date = new Date();
const hours=date.getHours()  
//minutes now
const minutes=date.getMinutes()
//Seconds now
const seconds=date.getSeconds()
//numbers of seconds elapsed from January 1, 1970 to now.
//hours now



//year today
let year = date.getFullYear();

//month today as a number
let month = date.getMonth() + 1;

//day today as a number
let day = date.getDate();

//date today
let currentDate_format_1 = `${year}-${month}-${day}  ${hours}:${minutes}`;
let currentDate_format_2 = `${day}-${month}-${year}  ${hours}:${minutes}`;
let currentDate_format_3 = `${day}/${month}/${year}  ${hours}:${minutes}`;

console.log(currentDate_format_1)
console.log(currentDate_format_2)
console.log(currentDate_format_3)
//Output
// 2023-3-5  12:16
// 5-3-2023  12:16
// 5/3/2023  12:16
