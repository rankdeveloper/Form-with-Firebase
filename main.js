const firebaseConfig = {
    apiKey: "AIzaSyA6tEUa_fdrcsQL3l7FnCMLpxqD2VVyfzY",
    authDomain: "testform-dc4b0.firebaseapp.com",
    projectId: "testform-dc4b0",
    storageBucket: "testform-dc4b0.appspot.com",
    messagingSenderId: "26753680061",
    appId: "1:26753680061:web:16a5673f2d9f1103792dd4"
};

firebase.initializeApp(firebaseConfig);
var firestore=firebase.firestore()

var messageRef = firestore.collection("testForm");

document.getElementById("form").addEventListener("submit", submitForm)

function submitForm(e) {
    e.preventDefault();

    var email = document.getElementById("email").value
    var psw = document.getElementById("psw").value
    var psw_repeat = document.getElementById("psw_repeat").value


    saveMessage(email, psw, psw_repeat)

    document.querySelector('.alert').style.display = 'block';

    setTimeout( () => {
        document.querySelector('.alert').style.display = 'none';
    }, 3000 )

    document.getElementById("form").reset();

}
function saveMessage(email, psw, psw_repeat) {
    // var newMessageRef = messageRef().push()

   // messageRef.doc().push()
    messageRef.doc().set({
        email: email,
        psw: psw,
        psw_repeat: psw_repeat
    }).then( () => {
        console.log("Data saved");
    })
}


