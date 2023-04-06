// your code here
const form = document.querySelector('#myForm');
const url = document.querySelector('#url');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const nameInput = document.querySelector('#name');
  const yearInput = document.querySelector('#year');
  
  const nameValue = nameInput.value;
  const yearValue = yearInput.value;
  
  const queryString = `?name=${nameValue}&year=${yearValue}`;
  
  url.textContent = `https://localhost:8080/${queryString}`;
});
