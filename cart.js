const currCart = JSON.parse(localStorage.getItem('savedCart'));
const template = document.getElementById('cart-item-template');
const cartDiv = document.querySelector('.cart-items');

function showEmptyCart() {
    let x = document.getElementsByClassName("cart-msg")[0];
    if (currCart.length == 0) {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function showProductInCart() {

    let totalPrice = 0.00;
    for (let i = 0; i < currCart.length; i++) {
        product = currCart[i];
        const clone = template.content.cloneNode(true);
        clone.querySelector('.cart-product-name').innerText = product.name;
        clone.querySelector('.cart-product-qty').innerText = product.qty;
        clone.querySelector('.cart-product-glaze').innerText = product.glaze;
        clone.querySelector('.cart-product-price').innerText = product.price;

        const removeBtn = clone.querySelector('.remove-btn');
        removeBtn.addEventListener('click', function() {
            let itemContainer = this.parentNode.parentNode;
            currCart.splice(0, 1);
            itemContainer.parentNode.removeChild(itemContainer);
            document.getElementById("cart-numitems").innerHTML = currCart.length;
            localStorage.setItem('savedCart', JSON.stringify(currCart));
            showEmptyCart()
            updateTotalPrice()
        });

        // totalPrice += parseFloat(currCart[i].price);
        // document.getElementById("cart-total-price").innerHTML = totalPrice.toFixed(2);
        updateTotalPrice()
        cartDiv.appendChild(clone);
    }
}

// Updating total price
function updateTotalPrice() {
    let total = 0.00;
    let price = document.getElementById("cart-total-price")
    if (currCart.length == 0) {
        price.innerHTML = 0.00;
    }
    for (let i = 0; i < currCart.length; i++) {
        total += parseFloat(currCart[i].price);
        price.innerHTML = total.toFixed(2);
    }
}

showProductInCart()
showEmptyCart()
    // updateTotalPrice()