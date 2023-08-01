const arrMenuLinks = Array.from(document.querySelectorAll(".menu__link"));
const menuItem = document.querySelectorAll(".menu__link");

for (let i = 0; i < arrMenuLinks.length; i++) {
  const link = arrMenuLinks[i];
  const item = link.closest(".menu__item");
  const subMenu = item.querySelector(".menu__sub");
  link.onclick = function () {
    if (subMenu && subMenu.className.includes("menu__active")) {
      subMenu.className = "menu menu__sub";
      return false;
    }
    if (subMenu) {
      subMenu.className = "menu menu__sub menu_active";
    }
  }
}