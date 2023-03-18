// 18. Write a program which tells the number of days in a month, now consider leap year.
const getDays = (year, month) => {
    return console.log(new Date(year, month, 0).getDate());
};

getDays(2023,2)