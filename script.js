let books = [];

let bookList = document.querySelector(".book-list");
let addBookForm = document.querySelector("#add-book");
let add = document.querySelector("#add");
const {title, author} = addBookForm.elements;

// displaying books in localStorage
if(localStorage.getItem('books')) {
  console.log(JSON.parse(localStorage.getItem('books')));
  books = JSON.parse(localStorage.getItem('books'));
}else {
  console.log("failed");
}
display();

function display() {
  books.forEach((item) => {
    bookList.innerHTML += `<div>
    <h3> ${item.name} </h3>
    <p> ${item.author} </p>
    <button class="btn-remove" value="${item.id}"> remove </button>
    <hr>
    </div>`;
    });
}

function addBook(name, author) {
  id =  Math.floor(Math.random()*1000);
  books.push({name, author, id});
  localStorage.setItem("books", JSON.stringify(books));
  bookList.innerHTML = ``;
  display();
}

add.addEventListener("click", (e)=>{
  e.preventDefault();
  addBook(title.value, author.value);
  console.log(books);
});

function removeBook(id) {
  books = books.filter((item) => {
    return item.id !== id;
  });
  localStorage.setItem("books", JSON.stringify(books));
  location.reload();
}


let remove = document.querySelectorAll(".btn-remove");
remove.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    removeBook(item.getAttribute('value'));
    console.log(books);
  });
});
