//Menu 
const hamburger = document.querySelector(".hamburger");
const backdrop = document.querySelector(".backdrop2");
const sidebar = document.querySelector(".sidebar2");

hamburger.addEventListener("click", () => {
  toggleSlidebar();
});
backdrop.addEventListener("click", () => {
  toggleSlidebar();
});

const toggleSlidebar = () => {
  backdrop.classList.toggle("backdrop2--active");
  sidebar.classList.toggle("sidebar2--active");
}
