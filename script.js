// Selecting required DOM elements
const themeBtn=document.getElementById("theme-btn");
const body=document.body;

const navLinks=document.querySelectorAll('.navlinks a');

const scrolltpBtn=document.getElementById("scroll-top-btn");

// Toggle dark mode when theme button is clicked
themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Change button icon based on current theme
  if(body.classList.contains("dark-mode")) {
    themeBtn.textContent="☀️";
  } else {
    themeBtn.textContent="🌙";
  }
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
  link.addEventListener('click',function(e) {
    // Prevent default anchor behavior
    e.preventDefault();
    
    const targetId=this.getAttribute('href').substring(1);

    // Get target section ID from href attribute
    const targetSection=document.getElementById(targetId);

    if(!targetSection) return;

    const offset=60;

    // Scroll smoothly to target section with offset
    window.scrollTo({
      top:targetSection.offsetTop-offset,
      behavior:'smooth'
    });
  });
});

// Show or hide scroll-to-top button based on scroll position
window.addEventListener("scroll",() => {
  if(window.scrollY>200) {
    scrolltpBtn.style.display="block";
  } else {
    scrolltpBtn.style.display="none";
  }
});

// Scroll back to top when button is clicked
scrolltpBtn.addEventListener("click",() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});