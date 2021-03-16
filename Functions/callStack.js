function thirdFunction () {
  console.log('Inside third function')
}

function secondFunction () {
  console.log('Inside second function')
  thirdFunction()
  console.log('Inside second function completion')
}

function main () {
  console.log('Inside main function')
  secondFunction()
  console.log('Inside main function completion')
}

// main()