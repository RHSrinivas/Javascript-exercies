// 17. Write a program which tells the number of days in a month.
const getDays = (year, month) => {
    console.log('HI')
    return console.log(new Date(year, month, 0).getDate());
};

getDays(2023,2)