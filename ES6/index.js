

var getName = (firstname, lastname) => {
  return `My name is ${firstname} ${lastname}`
}

var studentData = {
  name : 'Rizwan',
  classCode: 'EX-MS11'
}


var {classCode, name} = studentData

// studentData.name
// studentData.classCode

console.log('name :', name)
console.log('name :', classCode)


var studentNames = ['Rizwan', 'Salman', 'Allama Sahab']

var  [name1, name2, name3, name4] = studentNames


console.log('name 1 :', name1)
console.log('name 2 :', name2)
console.log('name 3 :', name3)
console.log('name 4 :', name4)
// studentNames[0]
// studentNames[1]

var studentRecords = [{
  name : 'Rizwan',
  classCode: 'EX-MS11'
}, ]
var studentRecords = [
  {
    name : 'Rizwan',
    classCode: 'EX-MS11'
  }, 
  {
    name : 'Salman',
    classCode: 'EX-MS11'
  }, 
  {
    name : 'Amjad',
    classCode: 'EX-MS11'
  }, 
  {
    name : 'Sajid',
    classCode: 'EX-MS11'
  }
]

var [student1, student2, student3] = studentRecords;

console.log('student1 :', student1)


function sum (num1, num2) {
  return num1 + num2;
}

var sum = (num1 = 1, num2 = 2) => num1 + num2;

console.log(sum(1))


var studentData = {
  firstname: 'Rizwan',
  lastname: 'Jamal',
  geoLocation: {
    long: '112.32',
    lat: '113.12'
  }
}

var {
      firstname : firstName, 
      geoLocation : { lat }
    } = studentData

// studentData.firstname = 'Rizwan'
// studentData.geoLocation.lat = '113.12'

console.log('firstName :', firstName)
console.log('lat :', lat)


var studentNames = ['Rizwan', 'Salman'];

// studentNames = Memory address/reference

var a = studentNames; 

// a = Memory address/reference





a.push('Ghufran')


console.log('studentNames :', studentNames)
console.log('a :', a)

studentNames.pop()

console.log('studentNames :', studentNames)
console.log('a :', a)

var laysPrice = 5
var potatoStics = laysPrice;

laysPrice += 5

console.log('laysPrice :', laysPrice)
console.log('potatoStics :', potatoStics)


b = Object.assign({}, a)

b = { ...a }