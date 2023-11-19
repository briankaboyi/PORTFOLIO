const mainDiv = document.getElementById("main-div");
navbar = document.getElementById("nav");
const burger = document.getElementById("burger");
sideBar = document.getElementById("side");

// events//
navbar.addEventListener("click", function (e) {
  e.preventDefault();
  hideElements();

  if (e.target.innerHTML === "About") {
    let contentBox = mainDiv.children[0];

    contentBox.childNodes.forEach((childItem, ind) => {
      if (childItem.classList === undefined) {
        return;
      }
      childItem.style.opacity = "0";
      childItem.style.animation = `reveal 1s forwards ${ind * 0.09}s`;
    });
    contentBox.classList.remove("hidden");
  } else if (e.target.innerHTML === "Skills") {
    let contentBox = mainDiv.children[1];
    contentBox.childNodes.forEach((childItem, ind) => {
      if (childItem.classList === undefined) {
        return;
      }
      childItem.style.opacity = "0";
      childItem.style.animation = `reveal 1s forwards ${ind * 0.09}s`;
    });
    contentBox.classList.remove("hidden");
  } else if (e.target.innerHTML === "Contact Me") {
    let contentBox = mainDiv.children[2];
    contentBox.childNodes.forEach((childItem, ind) => {
      if (childItem.classList === undefined) {
        return;
      }
      childItem.style.opacity = "0";
      childItem.style.animation = `reveal 1s forwards ${ind * 0.09}s`;
    });
    contentBox.classList.remove("hidden");
  }
  return;
});

burger.addEventListener("click", (e) => {
  e.preventDefault();
  // sideBar.classList.toggle('closed');
  if (sideBar.classList.contains("closed")) {
    sideBar.classList.remove("closed");
    sideBar.classList.add("open");
  } else if (!sideBar.classList.contains("closed")) {
    sideBar.classList.remove("open");
    sideBar.classList.add("closed");
  }
});
navbar.addEventListener("click", (e) => {
  e.preventDefault();
  // sideBar.classList.toggle('open');
  if (sideBar.classList.contains("closed")) {
    sideBar.classList.remove("closed");
    sideBar.classList.add("open");
  } else if (!sideBar.classList.contains("closed")) {
    sideBar.classList.remove("open");
    sideBar.classList.add("closed");
  }
});

// functions///////

function hideElements() {
  let itemArray = mainDiv.childNodes;
  itemArray.forEach((item) => {
    let child = item.childNodes;

    ///////////////////
    if (item.classList === undefined) {
      return;
    }

    if (item.classList.length !== 2) {
      item.classList.add("hidden");
      ////////////////////
    }
  });
}
// hideElements();
