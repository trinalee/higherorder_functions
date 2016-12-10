'use strict'

class higherOrderFunctions {

 implementingMap(array,callback){
   let newArray = []
   for (var i=0; i<array.length; i++){
     newArray[i] = callback(array[i])
   }
   return newArray
 }

 implementingAll(array, callback)
 {
   var result = true
   for (var i= 0; i< array.length; i++)
   {
     if (callback(array[i]) != true)
       return false
   }
   return result
 }

 implementingAny(array, callback)
 {
   var result = false
   for (var i= 0; i< array.length; i++)
   {
     if (callback(array[i]) == true)
       return true
   }
   return result
 }

implementingforEach (array, callback)
{
 for(var i=0; i< array.length ; i++)
 {
   callback(array[i])
 }
}

implementingUniqueArray(inputArray)
{
 let outputArray = []
 inputArray.forEach(function (x)
 {
   if(outputArray.indexOf(x) == -1)
   {
   outputArray.push(x)
   }
   else
   {
     outputArray.push('Jay')
   }
})
 return outputArray
}

getAveragelength (inputArray)
{
 return inputArray.filter(function(x){return x.length > 10}).map(function(x){return x.length}).reduce(function(total, slength, index,array){if(index == array.length -1) {return (total+=slength)/array.length} else {return total+=slength}}, 0)
}


}

module.exports = higherOrderFunctions
