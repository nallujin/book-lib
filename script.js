function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
const myLibrary = [
    new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet"),
    new Book("The Subtle Art of Not Giving a F*ck", "Mark Manson", 272, "read"),
    new Book("The Hunger Games", "Suzanne Collins", 374, "not read yet"),
    new Book("Harry Potter and the Philosopher’s Stone", "Suzanne Collins", 374, "not read yet"),
    new Book("Twilight", "Stephanie Meyer", 498, "not read yet"),
    new Book("To Kill a Mockingbird", "Harper Lee", 281, "not read yet"),
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, "not read yet")

]

function addBookToLibrary() {
    // do stuff here
}

function createCard(){
    const mainContainer = document.querySelector("div.card-container");
    const numOfCurrentChildren = mainContainer.childElementCount;

    // Creating the card
    const newCard = document.createElement("div");
    newCard.className = "card";

    // Creating the delete button
    const delBtn = document.createElement("button");
    delBtn.className = "del-btn";
    delBtn.textContent = "DEL";

    // Creating the 'read' button
    const readBtn = document.createElement("button");
    readBtn.className = "read-btn";
    readBtn.textContent = "READ";

    // The p tags are for putting information on the card
    const bookTitle = document.createElement("p");
    const authorName = document.createElement("p");
    const pageCount = document.createElement("p");

    // Putting (or appending) the information to the p tag
    bookTitle.textContent = "Title X";
    authorName.textContent = "Person 1";
    pageCount.textContent = "202";

    // Saving the information in an array, ordered as the intended design
    const infoAndBtn = [delBtn, bookTitle, authorName, pageCount, readBtn];

    // Appending the buttons and the information that created before
    infoAndBtn.forEach(element => {
       newCard.appendChild(element);
    });
    mainContainer.appendChild(newCard);
}

function handleDeleteClick(event){
    const button = event.target;
    const card = button.closest(".card");
    card.remove();
}

document.querySelectorAll("button.del-btn").forEach(button=>{
    button.addEventListener("click", handleDeleteClick);
});