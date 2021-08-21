document.querySelector("#submitBtn").addEventListener("click", function() {
    let postAuthor = document.querySelector("#author").value;
    let postTitle = document.querySelector("#postTitle").value;
    let postContent = document.querySelector("#postContent").value;
    let postDate = document.querySelector("#postDate").value;
  
    if (
      postAuthor === "" ||
      postTitle === "" ||
      postContent === "" ||
      postDate === ""
    ) {
      alert("Fields Empty");                     //if any field is empty while adding blog
    } else {
      db.collection("posts")
        .doc()
        .set({
          author: postAuthor,
          createdAt: postDate,
          postName: postTitle,
          postContent: postContent
        });
        alert("post added");                       // adding blog to database and blog page
    }
  });