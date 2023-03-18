//27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

let count=0
let i,j 
let arr=[]
for(j=2;j<=100;j++)
{
for( i=1;i<=j;i++)
{
  if(j%i==0)
  count++
  
}

if(count==2)
arr.push(j)

count=0


  
}
console.log(arr)