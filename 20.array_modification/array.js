// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Masala' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'


const shoppingCart = ['Masala','Milk', 'Coffee', 'Tea', 'Honey']
// - add 'Masala' in the beginning of your shopping cart
const element='Masala'
const element2='Sugar'
if(!shoppingCart[0].includes(element)){
shoppingCart.unshift(element);}
else{
    console.log("\n\nelement already exists \n\n")
}

console.log(shoppingCart)

//     - add Sugar at the end of your shopping cart if it has not been already added
if(!shoppingCart[shoppingCart.length-1].includes(element2)){
    shoppingCart.push(element2);}
    else{
        console.log("\n\nelement already exists \n\n")
    }

    console.log(shoppingCart)
//     - remove 'Honey'

      shoppingCart1 =   shoppingCart.filter(function(item) {
        return item !== 'Honey'
  

    })
    console.log(shoppingCart1)

//     - modify Tea to 'Green Tea'
let index = shoppingCart.indexOf("Tea");
console.log(index)
shoppingCart[index]='Green Tea'
console.log(shoppingCart)