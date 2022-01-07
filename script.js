class Book {
  constructor(id, name, author) {
    this.id = id;
    this.name = name;
    this.author = author;
  }
}

let books = [];
const bookList = document.querySelector('.book-list');
const addBookForm = document.querySelector('#add-book');
const add = document.querySelector('#add');
const { title, author } = addBookForm.elements;
const listSection = document.querySelector('.Books-section');
const addNewSection = document.querySelector('.addBook-section');
const contactSection = document.querySelector('.contact-section');
const listLink = document.querySelector('#list');
const addLink = document.querySelector('#new');
const contactLink = document.querySelector('#contact');

// hide contact and addbook sections
addNewSection.style.display = 'none';
contactSection.style.display = 'none';

listLink.addEventListener('click', (e) => {
  e.preventDefault();
  addNewSection.style.display = 'none';
  contactSection.style.display = 'none';
  listSection.style.display = 'block';
});

addLink.addEventListener('click', (e) => {
  e.preventDefault();
  listSection.style.display = 'none';
  contactSection.style.display = 'none';
  addNewSection.style.display = 'block';
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  listSection.style.display = 'none';
  contactSection.style.display = 'block';
  addNewSection.style.display = 'none';
});

// displaying books in localStorage
if (localStorage.getItem('books')) {
  books = JSON.parse(localStorage.getItem('books'));
}

const date = document.querySelector('.date');
const d = new Date();
date.innerHTML = d;

function removeBook(id) {
  books = books.filter((item) => (
    Number(id) !== item.id
  ));
  localStorage.setItem('books', JSON.stringify(books));
}

function display() {
  bookList.innerHTML = '';
  books.forEach((item) => {
    const book = new Book(item.id, item.name, item.author);
    bookList.innerHTML += `<div><p> "${book.name}" by ${book.author}
    <button class="btn-remove" value="${book.id}"> remove </button>
    </p>
    </div>`;
  });
  const remove = document.querySelectorAll('.btn-remove');
  remove.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      removeBook(item.getAttribute('value'));
      display();
    });
  });
}

display();

function addBook(name, author) {
  const id = Date.now();
  books.push({ name, author, id });
  localStorage.setItem('books', JSON.stringify(books));
  display();
}

add.addEventListener('click', (e) => {
  e.preventDefault();
  addBook(title.value, author.value);
});
