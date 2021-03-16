var a = 'Rizwan'

// function abc () {
//   console.log(a)
//   var b = 'Salman'
//   console.log(b)
// }

// if (true) {
//   var a = "Salman"
//   console.log(a)
// }

// console.log(a)
// abc()



// let a = "Rizwan"

if (true) {
  // let a;
  // console.log(a)
  let a = "Salman"
  console.log(a)
}

console.log(a)

// =================================

for(let i = 0 ; i <= 10; i++) {
  console.log('using var -> i :', i)
  setTimeout(() => {
    console.log('using var inside setTimeout-> i', i)
  }, 1000);
} 

// ==================================

const PI = 3.142

console.log(PI)