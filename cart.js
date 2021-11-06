const currCart = JSON.parse(localStorage.getItem('savedCart'));
const template = document.getElementById('cart-item-template');
const cartDiv = document.querySelector('.cart-items');

// Only show the empty cart msg when there are no items
function showEmptyCartMsg() {
    let x = document.getElementsByClassName("cart-msg")[0];
    if (currCart.length == 0) {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

// Display each product in cart in the format of templates
function showProductInCart() {
    for (let i = 0; i < currCart.length; i++) {
        product = currCart[i];
        const clone = template.content.cloneNode(true);
        clone.querySelector('.cart-product-name').innerText = product.name;
        clone.querySelector('.cart-product-qty').innerText = product.qty;
        clone.querySelector('.cart-product-glaze').innerText = product.glaze;
        clone.querySelector('.cart-product-price').innerText = product.price;

        // Add event listener to the remove button for removing items from cart
        const removeBtn = clone.querySelector('.remove-btn');
        let removedQty = clone.querySelector('.cart-product-qty').innerText;

        removeBtn.addEventListener('click', function() {
            // Remove the item graphically & logically and updated all cart properties
            let itemContainer = this.parentNode.parentNode;
            let cartQty = parseInt(document.getElementById("cart-numitems").innerHTML);
            cartQty -= parseInt(removedQty);
            currCart.splice(0, 1);
            itemContainer.parentNode.removeChild(itemContainer);
            document.getElementById("cart-numitems").innerHTML = cartQty;
            localStorage.setItem('savedCart', JSON.stringify(currCart));
            showEmptyCartMsg()
            updateTotalPrice()
        });

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
showEmptyCartMsg()