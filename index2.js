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

  let posCollection = document.querySelector("#posts-collection");

  const db = firebase.firestore();

  function createPost(title,time,content){                  // creating post on blog page
      let div = document.createElement("div");
      div.setAttribute("class","col-md-4");

      let h2 = document.createElement("h2");
      let p = document.createElement("p");
      let small = document.createElement("small");

      h2.textContent= title;
      small.textContent= time;
      p.textContent= content;

      div.appendChild(h2);
      div.appendChild(small);
      div.appendChild(p);

    posCollection.appendChild(div);
  }

  function getPosts(){                                        // function to print the posts on blog page
      db.collection("posts").get().then(snapshot => {
          snapshot.docs.forEach(docs => {
                createPost(
                    docs.data().postName,
                    docs.data().createdAt,
                    docs.data().postContent
                );
          });
      }).catch(err =>{
          console.log(err);
      }); 
  }
 
  function signOut(){                      // sign out current user
    firebase.auth().signOut();
    window.location = "index.html";
}

  getPosts();