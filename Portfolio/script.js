const themeBtn=document.getElementById("theme-btn");
const body=document.body;

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if(body.classList.contains("dark-mode")) {
    themeBtn.textContent="☀️";
  } else {
    themeBtn.textContent="🌙";
  }
});
