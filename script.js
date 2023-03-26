const form = document.querySelector('form');
const email = document.getElementById('email');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Email validation using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if(!emailRegex.test(email.value)) {
    email.classList.add('error');
    email.nextElementSibling.textContent = 'Please enter a valid email address.';
  } else {
    email.classList.remove('error');
    email.nextElementSibling.textContent = '';
    form.submit();
  }
});

email.addEventListener('focus', () => {
  email.classList.remove('error');
  email.nextElementSibling.textContent = '';
});
