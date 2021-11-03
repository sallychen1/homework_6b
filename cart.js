const storedValue = JSON.parse(localStorage.getItem('savedCart'));
const newCart = storedValue ? storedValue : [];

function showProductInCart(product) {
    const template = document.getElementById('cart-item-template');
    const clone = template.content.cloneNode(true);

    clone.querySelector('.cart-product-name').innerText = product.name;
    clone.querySelector('.cart-product-qty').innerText = product.qty;
    clone.querySelector('.cart-product-glaze').innerText = product.glaze;
    clone.querySelector('.cart-product-price').innerText = product.price;

    const removeBtn = clone.querySelector('.remove-btn');
    removeBtn.addEventListener('click', function() {
        // find and remove object from cart
    });

    const cartDiv = document.querySelector('.cart-items');
    cartDiv.append(clone);
}

var totalQty = 0;
for (let i = 0; i < newCart.length; i++) {
    var prod = newCart[i]
    totalQty = totalQty + parseInt(prod.qty)
    document.getElementById("cart-numitems").innerHTML = totalQty;

    showProductInCart(prod);
}


// function removeFromCart() {
//     let removedItem = document.getElementsByClassName("remove-btn");
//     console.log(removedItem)
//         // for (let i = 0; i < removedItem.length; i++) {
//         //     let r = removedItem[i]
//         //     r.addEventListener('click', function() {
//         //         console.log("clicked")
//         //     })
//         // }
// }