function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function readOrNo(index) {
    myLibrary[index].read = !myLibrary[index].read;
    render();
}

function render() {
    const libraryBook = document.querySelector(".card-container");

    // Emptying container before render, without it, the card will be duplicated
    while (libraryBook.children.length > 1){
        libraryBook.removeChild(libraryBook.children[1]);
    }

    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        // Creating the card
        const newCard = document.createElement("div");
        newCard.className = "card";

        // Creating the delete button
        const delBtn = document.createElement("button");
        delBtn.className = "del-btn";
        delBtn.textContent = "DEL";

        // Creating the 'read' button
        const checkBtn = document.querySelector("dialog #read");
        const readBtn = document.createElement("button");
        readBtn.classList.add("read-btn");
        readBtn.textContent = myLibrary[i].read ? "Read" : "Not Read Yet";
        // readBtn.classList.add(myLibrary[i].read ? "read-true" : "read-false");
        handleReadColor(myLibrary[i].read, readBtn);

        // The p tags are for putting information on the card
        const bookTitle = document.createElement("p");
        const authorName = document.createElement("p");
        const pageCount = document.createElement("p");

        // Putting (or appending) the information to the p tag
        bookTitle.textContent = book.title;
        authorName.textContent = `by ${book.author}`;
        pageCount.textContent = book.pages.toString();

        // Saving the information in an array, ordered as the intended design
        const infoAndBtn = [delBtn, bookTitle, authorName, pageCount, readBtn];

        // Appending the buttons and the information that created before
        infoAndBtn.forEach(element => {
            newCard.appendChild(element);
        });

        // Function for remove card button
        delBtn.addEventListener("click", ()=>{
            handleDeleteClick(myLibrary, i);
        })

        readBtn.addEventListener("click", ()=>{
            readOrNo(i);
        });
    libraryBook.appendChild(newCard);
    }
}

function addBookToLibrary() {
    // do stuff here
    const title = document.querySelector("#book-name").value;
    const author = document.querySelector("#book-author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
    render();
}
// This function declaration is not used, but I don't want to remove this block since I've put my mind
// here pretty intense
// function createCard(){
//     const mainContainer = document.querySelector("div.card-container");
//     const numOfCurrentChildren = mainContainer.childElementCount;
//
//     // Creating the card
//     const newCard = document.createElement("div");
//     newCard.className = "card";
//
//     // Creating the delete button
//     const delBtn = document.createElement("button");
//     delBtn.className = "del-btn";
//     delBtn.textContent = "DEL";
//
//     // Creating the 'read' button
//     const readBtn = document.createElement("button");
//     readBtn.className = "read-btn";
//     readBtn.textContent = "READ";
//
//     // The p tags are for putting information on the card
//     const bookTitle = document.createElement("p");
//     const authorName = document.createElement("p");
//     const pageCount = document.createElement("p");
//
//     // Putting (or appending) the information to the p tag
//     bookTitle.textContent = "Title X";
//     authorName.textContent = "Person 1";
//     pageCount.textContent = "202";
//
//     // Saving the information in an array, ordered as the intended design
//     const infoAndBtn = [delBtn, bookTitle, authorName, pageCount, readBtn];
//
//     // Appending the buttons and the information that created before
//     infoAndBtn.forEach(element => {
//        newCard.appendChild(element);
//     });
//     mainContainer.appendChild(newCard);
// }

function handleDeleteClick(arr, index){
    arr.splice(index, 1);
    render();
}

function handleReadColor(check, ele) {
    if (check === true) {
        ele.classList.toggle("read-true");
    } else if (check === false) {
        ele.classList.toggle("read-false");
    }
}

// document.querySelectorAll("button.del-btn").forEach(button=>{
//     button.addEventListener("click", handleDeleteClick);
// });

////////////////////////////////////////////////////////////////////////////////////////////////////

const myLibrary = [];

const openModalBtn = document.querySelector("#open-modal");
const closeModalBtn = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const bookField = document.querySelector("#book-name");
const theAuthor = document.querySelector("#book-author");
const pages = document.querySelector("#pages");

// Open the modal
openModalBtn.addEventListener("click", () => {
    modal.showModal();
    document.querySelector("#book-name").focus();
});

// Close the modal
closeModalBtn.addEventListener("click", () => {
    modal.close();
});

// Close the modal when clicking outside of it
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.close();
    }
});

// Clear the text fields when submitting
document.querySelector("form").addEventListener("submit", (e)=> {
    e.preventDefault();
    addBookToLibrary();
    const textFields = [bookField, theAuthor, pages];
    textFields.forEach((tField)=>{
        tField.value = "";
    });
    document.querySelector("#read").checked = false;
    modal.close();
});

