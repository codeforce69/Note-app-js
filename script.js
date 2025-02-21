const btn = document.querySelector("button");
const container = document.querySelector(".notes-container");
const del = document.querySelectorAll(".input-box");

function showNotes() {
  container.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", container.innerHTML);
}

btn.addEventListener("click", () => {
  const para = document.createElement("p");
  para.innerHTML = `
   <p contenteditable="true" class="input-box">
          <img src="/images/delete.png" alt="" />
        </p>
  `;
  container.appendChild(para);
});

container.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") e.target.parentElement.remove();
  updateStorage();
  if (e.target.tagName === "IMG") {
    note = document.querySelector(".input-box");
    note.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.execCommand("insertLineBreak");
    e.preventDefault();
  }
});
