let notesContainer = document.querySelector(".notes-container");
let createButton = document.querySelector(".create-notes");
let notes = document.querySelectorAll(".input-box");

function getNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
getNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}
createButton.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.classList.add("input-box");
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});
