(function(){
  // Initialize Firebase
var config = {
  apiKey: "AIzaSyC7NrtdPohekV1vXT9GpBGrwj-TFWG-ZsU",
  authDomain: "dummydemo-cd346.firebaseapp.com",
  databaseURL: "https://dummydemo-cd346.firebaseio.com",
  projectId: "dummydemo-cd346",
  storageBucket: "",
  messagingSenderId: "539257410404"
};
firebase.initializeApp(config);

// Variables
const txtName = document.getElementById('btxtName');
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('btxtPassword');
const btnLogIn = document.getElementById('btnLogIn');
const btnLogIn = document.getElementById('btnLogIn');

//add events
btnLogIn.addEventListener('click', e=>{
  //gets email and pass
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  //signs in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));

});
}());

