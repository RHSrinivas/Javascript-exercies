// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// min and max age
console.log(ages.sort((a,b)=>a-b))


const length_ages=ages.length
const middle1=ages[length_ages/2]
const middle2=ages[length_ages/2+1]
//Median
console.log(middle1/2)
var s=0
//average
for( let i in ages){
   s+=ages[i]
}
//avearage
const average=Math.round(s/9)
console.log(Math.round(s/9))

//Find the range of the ages(max minus min)
const range=(Math.round(Math.max(...ages)-Math.min(...ages)))
console.log(range)

//     - Compare the value of (min - average) and (max - average), use abs() method
const min_avg=Math.min(...ages)-average
console.log(Math.abs(min_avg))

const max_avg=Math.max(...ages)-average
console.log(max_avg)