let cards = document.querySelectorAll(".product");
let products = document.querySelector(".cart__products")
for (let i = 0; i < cards.length; i++) {
    let cardMinus = cards[i].querySelector(".product__quantity-control_dec");
    let cardPlus = cards[i].querySelector(".product__quantity-control_inc");
    let cartAdd = cards[i].querySelector(".product__add");
    let value = Number(cards[i].querySelector(".product__quantity-value").textContent)
    cardMinus.addEventListener('click', () => {
        if (value === 1) {

        } else {
            value -= 1;
            cards[i].querySelector(".product__quantity-value").textContent = value
        }
    })
    cardPlus.addEventListener('click', () => {
        value += 1;
        cards[i].querySelector(".product__quantity-value").textContent = value
    })
    cartAdd.addEventListener('click', () => {
        let flag = false;
        let mas = products.querySelectorAll(".cart__product");
        for (let j = 0; j < mas.length; j++) {
            if (cards[i].getAttribute("data-id") === mas[j].getAttribute("data-id")) {
                flag = true;
                mas[j].querySelector(".cart__product-count").textContent = Number(mas[j].querySelector(".cart__product-count").textContent) + Number(cards[i].querySelector(".product__quantity-value").textContent)
            }
        }
        if (flag === false) {
            products.insertAdjacentHTML("beforeend", '<div class="cart__product" data-id="0"></div>')
            mas = products.querySelectorAll(".cart__product");
            mas[mas.length - 1].setAttribute("data-id", cards[i].getAttribute("data-id"))
            mas[mas.length - 1].insertAdjacentHTML("beforeend", '<img class="cart__product-image" src="image.png">')
            mas[mas.length - 1].querySelector(".cart__product-image").setAttribute("src", cards[i].querySelector(".product__image").getAttribute("src"))
            mas[mas.length - 1].insertAdjacentHTML("beforeend", '<div class="cart__product-count">0</div>')
            mas[mas.length - 1].querySelector(".cart__product-count").textContent = cards[i].querySelector(".product__quantity-value").textContent
        }
    })
}