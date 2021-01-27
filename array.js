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


