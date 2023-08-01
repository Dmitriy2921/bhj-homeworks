const books = document.querySelector(".book");
const fontSizes = Array.from(document.querySelectorAll(".font-size"));
const colors = Array.from(document.querySelectorAll(".book__control_color .color"));
const backgrounds = Array.from(document.querySelectorAll(".book__control_background .color"));

fontSizes.forEach(fontSize => {
  fontSize.onclick = () => {
    fontSizes.forEach(item => item.classList.remove("font-size_active"));
    fontSize.classList.add("font-size_active");
    if (fontSize.classList.contains("font-size_small")) {
      books.classList.remove("font-size_big")
      books.classList.add("font-size_small")
    } else if (fontSize.classList.contains("font-size_big")) {
      books.classList.add("font-size_big")
      books.classList.remove("font-size_small")
    } else {
      books.classList.remove("font-size_big")
      books.classList.remove("font-size_small")
    }
    return false
  }
})

colors.forEach(color => {
  color.onclick = () => {
    colors.forEach(item => item.classList.remove("color_active"));
    color.classList.add("color_active");
    if (color.classList.contains("text_color_gray")) {
      books.classList.remove("book_color-black")
      books.classList.remove("book_color-whitesmoke")
      books.classList.add("book_color-gray")
    } else if (color.classList.contains("text_color_black")) {
      books.classList.add("book_color-black")
      books.classList.remove("book_color-whitesmoke")
      books.classList.remove("book_color-gray")
    } else {
      books.classList.remove("book_color-gray")
      books.classList.remove("book_color-black")
      books.classList.add("book_color-whitesmoke")
    }
    return false
  }
})

backgrounds.forEach(background => {
  background.onclick = () => {
    backgrounds.forEach(item => item.classList.remove("color_active"));
    background.classList.add("color_active");
    if (background.classList.contains("bg_color_gray")) {
      books.classList.remove("book_bg-black")
      books.classList.remove("book_bg-white")
      books.classList.add("book_bg-gray")
    } else if (background.classList.contains("bg_color_black")) {
      books.classList.add("book_bg-black")
      books.classList.remove("book_bg-white")
      books.classList.remove("book_bg-gray")
    } else {
      books.classList.remove("book_bg-gray")
      books.classList.remove("book_bg-black")
      books.classList.add("book_bg-white")
    }
    return false
  }
})