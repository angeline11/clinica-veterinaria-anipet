var auth = firebase.auth();

function iniciarSesion() {
  let email = document.getElementById('txtuser');
  let password = document.getElementById('txtcontrasenaa');

  auth.signInWithEmailAndPassword(email.value, password.value).then((user) => {
    alert('Bienvenido, ' + user.user.displayName);
    iniciarSesion,location.href="inicio.html"
  }).catch((err) => {
    let errorCode = err.code;

    if (errorCode == 'auth/invalid-email' || errorCode == 'auth/wrong-password') {
      alert('Las credenciales son incorrectas');
    }
  })

}

document.getElementById('btnIniciarSesion').addEventListener('click', () => {
  iniciarSesion();

})