// 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback 
//stating to wait for the number of years he needs to turn 18.
var index=document.querySelector('h1')
const a=prompt('pelase enter your age:')
if(a>=18){
    alert('You are old enough to drive')
    index.innerHTML="Your now offically qualified to drive the car"
}
else{ alert('wait for the number of years he needs to turn 18.')}
index.innerHTML="Your not  offically qualified to drive the car"
