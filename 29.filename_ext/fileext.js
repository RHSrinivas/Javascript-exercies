// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

const file_name='randomfile.txt'

split=file_name.split('.')
console.log(`given file name is ${split[0]} and its  extension is ${split[1]}`)