//The for of Statement creates a loop iterating over iterable objects,
//including : built-in-string ,Array, array-like-objects like Nodelist and also map and set


var scores = [60, 90, 80, 75]
//syntax
for (var score of scores)
{
    console.log(score)
}

//method-entries()=>to get indexes of particular values
var colors = ['red', 'green', 'yellow']
for (var [index, color] of colors.entries()) {
    console.log(index+'->'+color)
}

var str = 'Dhanush'

for (var i of str)
{
    console.log(i)
}