// 23. Write a program to check that the number given by the user is a prime number or not.
//var prime_number= parseInt(prompt("Enter a positive number: "));
prime_number=34
is_prime_number=true
// check if number is equal to 1
if (prime_number === 1) {
    console.log("1 is neither prime nor composite number.");
}

else if (prime_number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < prime_number; i++) {
        if (prime_number % i == 0) {
            console.log(`${prime_number} is not a prime number`)
            is_prime_number=false
            break;
        }
    }
}


if(is_prime_number==true){
    console.log(`${prime_number} is a prime number`);

}