// 09. Boolean value is either true or false.
//     - Write three JavaScript statement example which provide truthy value.
//     - Write three JavaScript statement example which provide falsy value.

// Answers

//In JavaScript one of the primitive types is boolean. A boolean is a value that is either true or false. Additionally,
// every other value in JavaScript is either truthy or falsy. This means that although the value is not true or false explicitly the value can be considered as truthy or falsy.

// Truthy values In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.
//Falsy values In JavaScript, a falsy value is a value that is considered false when encountered in a Boolean context.
//Falsy values
// false

// 0 (zero)

// ‘’ or “” (empty string)

// null

// undefined

// NaN

//Truthy Value


// if (true){
//     console.log(true)
//     }
//     if ({})
//     {
//     console.log(true)
//     }
//     if ([])
//     {
//     console.log(true)
//     }
//     if (42)
//     {
//     console.log(true)
//     }
//     if ("0")
//     {
//     console.log(true)
//     }
//     if ("false")
//     {
//     console.log(true)
//     }
//     if (new Date())
//     {
//     console.log(true)
//     }
//     if (-42)
//     {
//     console.log(true)
//     }
//     if (12n)
//     {
//     console.log(true)
//     }
//     if (3.14)
//     {
//     console.log(true)
//     }
//     if (-3.14)
//     {
//     console.log(true)
//     }
//     if (Infinity)
//     {
//     console.log(true)
//     }
//     if (-Infinity)
//     {
//     console.log(true)
//     }                                              
//Output
// true
// true
// true
// true
// true
// true
// true
// true
// true
// true
// true
// true
// true

if (false) {
    console.log('false')
    }
    
    if (null) {
    console.log('false')
    }
    
    if (undefined) {
    console.log('false')
    }
    
    if (0) {
    console.log('false')
    }
    
    if (-0) {
    console.log('false')
    }
    
    if (0n) {
    console.log('false')
    }
    
    if (NaN) {
    console.log('false')
    }
    
    if ("") {
    console.log('false')
    }

    console.log(10 == 5)
    //false