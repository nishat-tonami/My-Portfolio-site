const themeBtn=document.getElementById("theme-btn");
const body=document.body;

const navLinks=document.querySelectorAll('.navlinks a');

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if(body.classList.contains("dark-mode")) {
    themeBtn.textContent="☀️";
  } else {
    themeBtn.textContent="🌙";
  }
});

navLinks.forEach(link => {
  link.addEventListener('click',function(e) {
    e.preventDefault();
    
    const targetId=this.getAttribute('href').substring(1);
    const targetSection=document.getElementById(targetId);

    window.scrollTo({
      top:targetSection.offsetTop-45,
      behavior:'smooth'
    });
  });
});
