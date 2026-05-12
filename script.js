function subscribeUser() {
  const email = document.getElementById('email').value;
  const popup = document.getElementById('popupMessage');

  if(email.trim() === '') {
    alert('Please enter your email address.');
    return;
  }

  popup.style.display = 'block';

  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000);

  document.getElementById('email').value = '';
}

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 60,
      behavior: 'smooth'
    });
  });
});