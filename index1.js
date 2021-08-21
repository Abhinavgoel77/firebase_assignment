// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAAfEcZF5IzH3kyegbjExemfpO70KdykW4",
    authDomain: "blogapp-825f4.firebaseapp.com",
    projectId: "blogapp-825f4",
    storageBucket: "blogapp-825f4.appspot.com",
    messagingSenderId: "16815251642",
    appId: "1:16815251642:web:badad30190a071e9cae283"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   
  let provider = new firebase.auth.GoogleAuthProvider();     // auth for google sign in

  const auth = firebase.auth();

  function signIn(){
    var email=document.getElementById("email");                          // fetching email from html page
    var password=document.getElementById("password");                       // fetching email from html page

    auth.signInWithEmailAndPassword(email.value, password.value)               // authenticating with firebase
    .then((userCredential) => {
        window.location = "index2.html"
      })
      .catch(e=> alert(e.message ))
}

  function signInWithGoogle(){            // sign in with google
    console.log('btn call')
    firebase.auth().signInWithPopup(provider).then(res =>{
        window.location = "index2.html";
    }).catch(e=>{
        console.log(e);
    })
}

