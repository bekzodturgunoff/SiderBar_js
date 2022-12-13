const sideBarCloseBtn = document.querySelector(".close-btn");
const sideBarToggleBtn = document.querySelector(".sidebar-toggle");

const sidebar = document.querySelector(".sidebar");

sideBarCloseBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

sideBarToggleBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
