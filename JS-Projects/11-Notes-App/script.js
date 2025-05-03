const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Function to show saved notes
function showNotes() {
    let savedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    notesContainer.innerHTML = ""; // Clear container before loading

    savedNotes.forEach((noteText) => {
        createNote(noteText);
    });
}

// Function to update localStorage
function updateStorage() {
    let notes = [];
    document.querySelectorAll(".input-box").forEach((note) => {
        if (note.textContent.trim() !== "") {
            notes.push(note.textContent);
        }
    });
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Function to create a new note
function createNote(content = "") {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.textContent = content; // Set saved content
    img.src = "delete.png";
    img.className = "img-delete";

    // Append delete button
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);

    // Delete note on click
    img.addEventListener("click", () => {
        inputBox.remove();
        updateStorage();
    });

    // Save notes when typing
    inputBox.addEventListener("keyup", updateStorage);
}

createBtn.addEventListener("click", () => createNote());

showNotes();
