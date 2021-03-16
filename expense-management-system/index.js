let redirect = (screen) => {
  if (screen == 'login') {
    window.location = './auth-screens/login/login.html'
  }
  if (screen == 'signup') {
    window.location = '../signup/signup.html'
  }
}