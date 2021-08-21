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

  const auth = firebase.auth();

  function signUp(){
      var email=document.getElementById("email"); 
      var password=document.getElementById("password");

      auth.createUserWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        alert("signed up , Kindly sign in now");
        window.location = ("index.html")
      })
      .catch(e=> alert(e.message ))
  }