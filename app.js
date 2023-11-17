const mainDiv = document.getElementById("main-div");
navbar = document.getElementById("nav");
console.log(mainDiv,navbar)

// events//
navbar.addEventListener("click", function (e) {
  e.preventDefault();
  hideElements();
 console.log(e.target)

  if (e.target.innerHTML === "About") {
    let contentBox = mainDiv.children[0];
      contentBox.classList.remove("hidden");
    
  } else if (e.target.innerHTML === "Skills") {
    let contentBox = mainDiv.children[1];
    contentBox.classList.remove("hidden");
    
  } else if (e.target.innerHTML === "Contact Me") {
    let contentBox = mainDiv.children[2];
    contentBox.classList.remove("hidden");
  }
});


// functions///////

function hideElements() {
  let itemArray = mainDiv.childNodes;
  console.log(itemArray)
  itemArray.forEach((item) => {
    if (item.classList === undefined) {
      return;
    }
  
    if (item.classList.length !== 2) {
      item.classList.add("hidden");
    }
  });
}
hideElements()