function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
const sArtOfNGAF = new Book("The Subtle Art of Not Giving a F*ck", "Mark Manson", 272,
    "read");
const hungerGames = new Book("The Hunger Games", "Suzanne Collins", 374, "not read yet");
const hPandThePS = new Book("Harry Potter and the Philosopher’s Stone", "Suzanne Collins", 374,
    "not read yet");
const twilight = new Book("Twilight", "Stephanie Meyer", 498, "not read yet");
const toKillAMockingbird = new Book("To Kill a Mockingbird", "Harper Lee", 281,
    "not read yet");
const theGreatGatsby = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, "not read yet");

const myLibrary = [theHobbit, sArtOfNGAF, hungerGames, hPandThePS, twilight, toKillAMockingbird, theGreatGatsby];
function addBookToLibrary() {
    // do stuff here
}