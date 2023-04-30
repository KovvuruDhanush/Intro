// In JavaScript the for-in loop allows you to loop through the properties of an object
// The statement of code found within the loop bosy will be executed once for each property of objects
var colors = {

    primary: 'blue',
    secondary: 'Red',
    teritarty:'white'
}

//Syntax
// here this color variable specifiy each and every key
for (var color in colors) {

    console.log(colors[color])
}
console.log("()()()()()()()()()()()()")
//for-in loop with arrays
var colorsArray=['Blue',"green","Array"]
for (var i in colorsArray)
{
    console.log(colorsArray[i])
}
