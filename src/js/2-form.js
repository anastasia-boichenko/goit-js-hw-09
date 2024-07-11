const formElem = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-state-form';

const formData = {
  email: '',
  message: '',
};

formElem.addEventListener('input', () => {
  formData.email = formElem.elements.email.value.trim();
  formData.message = formElem.elements.message.value.trim();

  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
});

formElem.addEventListener('submit', ev => {
  ev.preventDefault();

  const email = formElem.elements.email.value.trim();
  const message = formElem.elements.message.value.trim();

  if (email === '' || message === '') {
    return alert('Fill in the all fields please!');
  }
  console.log(formData);
  localStorage.removeItem(LOCAL_KEY);
  formElem.reset();
});

document.addEventListener('DOMContentLoaded', () => {
  const loadForm = JSON.parse(localStorage.getItem(LOCAL_KEY));

  formElem.elements.email.value = loadForm?.email ?? '';
  formElem.elements.message.value = loadForm?.message ?? '';
});

//placeholder
const inputElement = document.querySelector('input[type="email"]');
inputElement.placeholder = 'Enter your email';

const textareaElem = document.querySelector('textarea');
textareaElem.placeholder = 'Enter your message';
