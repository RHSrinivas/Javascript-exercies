// 24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).
var arr_even=[]
var arr_odd=[]


for (i=0;i<=100;i++){
    if(i%2==0){
        arr_even.push(i)
    }
    else{
        arr_odd.push(i)
    }
}


console.log(arr_even)
console.log(arr_odd)