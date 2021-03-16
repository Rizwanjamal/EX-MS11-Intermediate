let signup = (e) => {
  console.log('event:', e)
  e.preventDefault()
  const email = document.getElementById('exampleInputEmail1').value
  const password = document.getElementById('exampleInputPassword1').value
  const confirmPassword = document.getElementById('exampleInputPassword2').value
  const username = document.getElementById('username').value
  if (!email || !password || !confirmPassword || !username) {
    return alert('Please enter all the fields')
  }

  const userData = {
    email,
    password,
    username
  }

  let users = localStorage.getItem('AllUsers');

  console.log('users : ', users)
  users = JSON.parse(users)

  users.push(userData)

  console.log('users :', users)

  let stringUsersData = JSON.stringify(users)

  localStorage.setItem('AllUsers', stringUsersData)
}