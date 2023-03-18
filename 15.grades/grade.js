// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-79, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

const word="Your grader is:"
var a =prompt("enter the percentage to know your grade:")
if(a>80 ){
    alert(`${word}:'A'`)
}
if(a>=70 && a<80 ){
    alert(`${word}:'B'`)
 
}
if(a>=60 && a<70  ){
    alert(`${word}:'C'`)
 
}

if(a>=50 && a<60 ){
    alert(`${word}:'D'`)
 
}

if(a>=0 && a<49 ){
    alert(`${word}:'F'`)
 
}