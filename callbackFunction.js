
// Callback function
// 1. A function that's passed to another function as an argument
// 2. It can be passed as anonymous function or named function
// 3. It will be called by some other function after some task execution.

function getName (fName, lName) {
  return fName + ' ' + lName
}

function printName (fName, lName) {
  console.log('fullname is : ', fName + ' ' + lName)
}

function showName (callback) {
  var firstName = 'Rizwan'
  var lastName = 'Jamal'
  return callback(firstName, lastName)
}

showName(getName) // passing getName as callback
showName(printName) // passing getName as callback