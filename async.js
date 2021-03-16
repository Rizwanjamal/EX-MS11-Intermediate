function runAsyncFunction () {
  console.log('before setTimeout')
  
  setTimeout(function () {
    console.log('Inside setTimeout 1')
  }, 5000)

  setTimeout(function () {
    console.log('Inside setTimeout 2')
  }, 0)
  
  console.log('after setTimeout')
}

function digitalClock () {
  setInterval(function () {
    var hours = new Date().getHours()
    var minutes = new Date().getMinutes()
    var seconds = new Date().getSeconds()
    document.getElementById('clock').innerHTML = hours + ' : ' + minutes + " : " + seconds
  }, 1000)
}