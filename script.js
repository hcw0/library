let library = [];
library.push(new Book("Harry Potter and the Sorcerer's Stone", "J. K. Rowling", "309", true))

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.index = library.length;
}

function addBook() {
    const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, statusInput.checked);
    library.push(newBook);
    clearInput(titleInput);
    clearInput(authorInput);
    clearInput(pagesInput);
    statusInput.checked = false;
    updateDisplay(newBook);
}

function clearInput(input) {
    input.value = "";
}

function bookIsValid() {
    if (titleInput.value == "" || authorInput == "" || pagesInput == ""){
        return false;
    } else{
        return true;
    }
}

function updateDisplay(book){
    const newBookContainerNode = bookContainerTemplateNode.cloneNode(true);
    newBookContainerNode.children[0].children[0].textContent = book.title;
    newBookContainerNode.children[1].children[0].textContent = book.author;
    newBookContainerNode.children[2].children[0].textContent = book.pages;
    if (book.status){
        newBookContainerNode.children[3].children[0].textContent = "Read";
    } else{
        newBookContainerNode.children[3].children[0].textContent = "Not read";
    }
    newBookContainerNode.children[4].children[0].addEventListener("click", () => {
        removeBook(book.index);
        newBookContainerNode.remove();
    });
    document.querySelector(".books-display").appendChild(newBookContainerNode);
}

function removeBook(index){
    library.slice(index, 1);

}

const addBookButton = document.querySelector(".addBookButton");

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const statusInput = document.querySelector("#status");


const firstBookContainer = document.querySelector(".book-container");
const bookContainerTemplateNode = firstBookContainer.cloneNode(true);
firstBookContainer.getElementsByTagName("button")[0].addEventListener("click", () => {
    removeBook(0);
    firstBookContainer.remove();
});


addBookButton.addEventListener("click", () => {
    if (bookIsValid()){
        addBook();
    } else{
        alert("Please fill out all inputs");
    }
});