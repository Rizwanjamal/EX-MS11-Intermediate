var studentNames = ["Sajid Iqbal", "Arsalan Ahmed", "Saqib Ahmed", "Saqib Iqbal","Saqib Ahmed" ];

//Array Index always starts from 0
// Accessing Array
studentNames[0] // "Sajid Iqbal"

// Accessing Array Length
studentNames.length // 5


// --------------------------------------------------------------------

// Filter Prototype Method
// Filter returns the values based on truthy value.


//Example-1
var studentNames = ['Rizwan', 'Salman', 'Abdul Basit']

studentNames.push('Rizwan')

// Now accessting studentNames, you will get
// (4) ["Rizwan", "Salman", "Abdul Basit", "Rizwan"]

function filterCondition (studentName) {
  return studentName == 'Rizwan' // will return true in case of Rizwan, otherwise false
}

var filteredStudents = studentNames.filter(filterCondition)
// filteredStudents will have ["Rizwan", "Rizwan"]

//Example-2
var filteredStudents = studentNames.filter(function (name) {
  // if (name == "Rizwan") {
  //   return true;
  // }

  // we can remove body braces if body content is single liner

  // if (name == 'Rizwan') return true;

  // We can more shorten the statement as well !
  return name == 'Rizwan';
})

console.log('filteredStudents :', filteredStudents)

//-----------------------------------------------------------------------

var hotpot = ['roti1', 'roti2', 'roti3']
hotpot.push('roti4') 
hotpot // ["roti1", "roti2", "roti3", "roti4"]

hotpot.pop() // ["roti4"] Removed Element
// ["roti1", "roti2", "roti3", "roti4"] updated Array

hotpot.shift()
// ["roti2", "roti3", "roti4"] updated Array

hotpot.unshift("roti1")
// ["roti1", "roti2", "roti3", "roti4"] updated Array

// Adding element in between of Array
hotpot.splice(1, 0, "saada roti")

// Remooving Saada roti & storing it into variable
var saadaRoti = hotpot.splice(1, 1)

// Adding that Saada roti at specific position
hotpot.splice(2, 0, saadaRoti.join())

//-----------------------------------------------------------------------

// ForEach 

// Example-1
function withoutForEach() {
  for(var i = studentNames.length-1 ; i >= 0 ; i--) {
    console.log('student Name :', studentNames[i])
  }
}

// Example-2
function usingForEach() {
  studentNames.forEach(function (name) {
    console.log('student Name :', name)
  })
}

// ----------------------------------------
// Find

studentNames.find(function (name) {
  return name == 'Rizwan'
})

// Output will be 'Rizwan'

// ----------------------------------------
// Map

familyTree = ['Dada', 'Abba', 'Beta']

// Example-1
familyTree.map(function (member) {
    if (member !== 'Beta') return member + ' Jee'
    return member
})
// Output will be: [''Dada Jee', 'Abba Jee', undefined]

// Example-2
familyTree.map(function (member) {
    if (member !== 'Beta') return member + ' Jee'
})
// Output will be: [''Dada Jee', 'Abba Jee', Beta]

// Example-3
a = [2,4,6,8]
b = a.map(function (num) {
    return num * 2;
})
// Output will be [4,8,12,16]

// ----------------------------------------
// forEAch

var newNum = [];

a.forEach(function (num) {
    var b = num * 2;
    newNum.push(b)
})

// ----------------------------------------
// isArray

if([].length) {
  console.log('calling')
}

if(Array.isArray([])) {
  console.log('calling')
}

// ---------------------------------------
// concat

a = [1,2,3]
b = [4,5,6]
a.concat(b)
// output will be [1,2,3,4,5,6]

a = ['a','b','c']

a.join('')
// output will be 'abc'

a.join(' / ')
// output will be 'a / b / c'
