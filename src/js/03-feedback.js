
const throttle = require('lodash.throttle');

const form = document.querySelector('form');
const email = document.querySelector('input');
const textarea = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';

updateForm();
form.addEventListener('submit', submitData);
form.addEventListener('input', throttle(saveData, 500));

function saveData() {
  const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
}

function updateForm() {
  const getData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  email.value = getData?.email || '';
  textarea.value = getData?.message || '';
}

function submitData(event) {
  event.preventDefault();

  const getData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  console.log(getData);

  form.reset();
  localStorage.clear();
}