// 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more

// var weight=parseint(prompt("Enter your body weight:"))
// var height=parseint(prompt("Enter your body height:"))

var height=10   
var weight=2500

var bmi=weight/(height*height)
console.log(`your bmi is ${bmi}`)
if(bmi<=18.5){
    console.log("you are Underweight")
}
else if(bmi>18.5 && bmi<=24.9){
    console.log("you are Normalweight")

}
else{
    console.log("you are Obese")

}