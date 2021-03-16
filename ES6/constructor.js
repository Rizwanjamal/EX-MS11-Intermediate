// function createStudent (name, classCode, id) {
//   return {
//     name: name,
//     classCode: classCode,
//     id: id
//   }
// }

let createStudent = ({
  name, 
  classCode, 
  id
}) => {
  // const {name, classCode, id} = studentData
  return {
    name: name,
    classCode: classCode,
    id: id,
    getName: function () {return name}
  }
}


const studentData = {
  name: 'Rizwan',
  classCode: 'EX-MS11',
  id: '112'
}
// let student = createStudent(studentData)
// console.log('student :', student)

const studentData2 = {
  name: 'Salman',
  classCode: 'EX-MS11',
  id: '113'
}

const studentData3 = {
  name: 'Majid',
  classCode: 'EX-MS11',
  id: '114'
}

function Student ({
  name, 
  classCode, 
  id
}) {
  this.name = name;
  this.classCode = classCode;
  this.id = id;
}

Student.prototype.getName = function () {
  return this.name;
}

let student1 = new Student(studentData)
let student2 = new Student(studentData2)
let student3 = new Student(studentData3)
console.log('student1 :', student1)
console.log('student2 :', student2)
console.log('student3 :', student3)