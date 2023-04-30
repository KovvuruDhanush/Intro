var cap = {
    firstName: 'Steve',
    lastName: 'rogers',
    age: 102,
    friends: ['Bucky barnes', 'Bruce Banner', ' Tony Stark'],
    //object inside object,
    isAvenger:true,
    address: {
        state: 'New york',
        city: {
            name: 'Brooklyn',
            pincode:1234
        }      
    }
}
console.log(cap.friends)
//using indexes how to access the elements
console.log(cap.friends[2])

console.log("object insisde object inside object value is  here=>",cap.address.city.name)


// you can updatea array values

cap.isAvenger = false
console.log(cap.isAvenger)
//Adding new Properties
cap.movies = ['abc', 'xyz', 'pqr']
//deleting property


// here we have to use delete keyword

delete cap.age
console.log(cap)

