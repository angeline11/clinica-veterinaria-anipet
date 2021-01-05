var auth = firebase.auth();
let btnSignOut = document.getElementById('logout');

function comprobarSesion() {
  auth.onAuthStateChanged(user => {
    if (user) {
      alert('hola')
    } else {
      alert('Inicia sesiòn')
    }
  })
}

btnSignOut.addEventListener('click', () => {
  auth.signOut().then(() => {
    alert('Se cerró sesión correctamente');
            
  }).catch(err => {
    console.log(err);
  })
});

comprobarSesion();