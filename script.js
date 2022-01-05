let books = [];

const bookList = document.querySelector('.book-list');
const addBookForm = document.querySelector('#add-book');
const add = document.querySelector('#add');
const { title, author } = addBookForm.elements;

// displaying books in localStorage
if (localStorage.getItem('books')) {
  books = JSON.parse(localStorage.getItem('books'));
} else {

}

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

display();

function addBook(name, author) {
  const id = Math.floor(Math.random() * 1000);
  books.push({ name, author, id });
  localStorage.setItem('books', JSON.stringify(books));
  bookList.innerHTML = ``;

  display();
}

add.addEventListener('click', (e) => {
  e.preventDefault();
  addBook(title.value, author.value);
});

function removeBook(id) {
  books = books.filter(item => Number(id) !== item.id)
  localStorage.setItem('books', JSON.stringify(books));
  bookList.innerHTML = ``;
  display();
}

const remove = document.querySelectorAll('.btn-remove');
remove.forEach((item) => {
  item.addEventListener('click',(e) => {
    e.preventDefault();
    removeBook(item.getAttribute('value'));
  });
});
