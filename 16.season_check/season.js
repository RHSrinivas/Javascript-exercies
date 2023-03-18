// 16. Check if the season is Autumn or Winter or Spring or Summer. If the user input is :
//     - September or October or November  - the season is Autumn.
//     - December or January or February  - the season is Winter.
//     - March or April or May  - the season is Spring
//     - June or July or August  - the season is Summer

const a=prompt('Enter the month to know the season: ')

if( a=='September' || a=='October' || a=='November'){
alert('the season is Autumn.')
}
if( a=='December' || a=='January' || a=='February' ){
alert( 'the season is Winter.')
}
if(a=='March' || a=='April' || a=='May'){
    alert( 'the season is Spring.')

}

if(a=='June' || a=='July' || a=='August'){
    alert( 'the season is Summer.')
 
}