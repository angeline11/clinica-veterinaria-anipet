//sign up event//
const signupForm = document.querySelector('#registro');
//const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;

    auth.
        createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            //limpiar formulario
            
            signupForm.reset();
            alert(`¡Se creó la cuenta exitosamente!`);
            }, error => {
                let errorCode = error.code;
                if (errorCode == 'auth/weak-password') {
                    alert('La contraseña es demasiado débil.');
                } else if (errorCode == 'auth/email-already-in-use') {
                    alert('El e-mail ya se encuentra registrado.');
                } else if(errorCode == 'auth/invalid-email') {
                    alert('El e-mail no existe');
                }
        })
})

//sign in event//
const signinForm = document.querySelector('#login');
//const singinForm = document.querySelector('#login-form');
signinForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;
    firebase.auth().
        signInWithEmailAndPassword(email, password)
        .then(userCredential =>  {
            signinForm.reset();
            window.location='entrada.html';
        }).catch(function(error) {
            var errorCode = error.code;

            if (errorCode == 'auth/invalid-email' || errorCode == 'auth/wrong-password') {
                alert('Las credenciales son incorrectas');
            }console.log(error);

            
        });
});
//logout//

//events
//list fot auth state changes

/*
auth.onAuthStateChanged(user=>{
    if (user) {
        window.location='entrada.html';
    } else {
    }
});
//GOOGLE LOGIN
const googleButton=document.querySelector('#googlelogin');
googleButton.addEventListener('click', e =>{
    const provider= new firebase.auth.GoogleAuthProvider();
    e.preventDefault();
    auth.signInWithPopup(provider)
        .then(result =>{
            console.log('google sign in')
            
        })
        .catch(err =>{
            console.log(err)
        })
})
//facebook login
const facebookButton = document.querySelector('#facebooklogin');
facebookButton.addEventListener('click', e => {
    e.preventDefault();
    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider)
        .then(result => {
            console.log('result');
            console.log('facebook sign in')
        })
        .catch(err => {
            console.log(err)
        })
})*/



