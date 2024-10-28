// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {

  // Smooth scrolling for any anchor links (if present on the page)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Orc greeting hover effect (Orc waves when hovered)
  const orcImage = document.querySelector('.orc-greeting img');


  // Show greeting message when Orc image comes into view
  const observerOptions = {
    root: null,
    threshold: 0.5 // Trigger when 50% of the image is in view
  };

  const orcObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        greetingMessage.textContent = 'Waaaagh! Welcome, warrior!'; // Orc greeting
        greetingMessage.style.opacity = 1; // Make greeting visible
        greetingMessage.style.transition = 'opacity 0.5s ease-in-out'; // Smooth fade-in
        orcImage.style.transform = 'scale(1.1)'; // Enlarge the Orc image slightly
        observer.unobserve(entry.target); // Stop observing once it has appeared
      }
    });
  }, observerOptions);

  // Add messages array
  // Same JavaScript for handling message update
  const messages = [
    "Waaaagh! Welcome, warrior!",
    "Press 'Buy Now' and join the Horde!",
    "Unleash the power of ORC Meme Coin!",
    "Become a part of the Waaaagh!"
  ];

  let currentMessageIndex = 0;
  const messageArrow = document.querySelector('.next-message-arrow');
  const greetingMessage = document.querySelector('.greeting-message');

  function updateMessage() {
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    greetingMessage.textContent = messages[currentMessageIndex];
  }

  messageArrow.addEventListener('click', updateMessage);



  orcObserver.observe(orcImage); // Start observing the Orc image



});


let lastScrollPosition = 0;
const navbar = document.querySelector('.medieval-navbar');

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > lastScrollPosition) {
    // User is scrolling down
    navbar.style.top = '-100px'; // Hide navbar by moving it out of view
  } else {
    // User is scrolling up
    navbar.style.top = '0'; // Show navbar by setting it back to the top
  }

  lastScrollPosition = currentScrollPosition;
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // Toggle visibility of menu
  hamburger.classList.toggle('active'); // Toggle hamburger animation
});

