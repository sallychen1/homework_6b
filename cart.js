const currCart = JSON.parse(localStorage.getItem('savedCart'));
const template = document.getElementById('cart-item-template');
const cartDiv = document.querySelector('.cart-items');

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

            // let totalPrice = 0.00;

            // updateTotalPrice()

            localStorage.setItem('savedCart', JSON.stringify(currCart));

        });

        // totalPrice += parseFloat(currCart[i].price);
        // document.getElementById("cart-total-price").innerHTML = totalPrice.toFixed(2);

        cartDiv.appendChild(clone);
    }
}


// Updating total price
function updateTotalPrice() {
    var totalPrice = 0.00;
    for (let i = 0; i < currCart.length; i++) {
        totalPrice += parseFloat(currCart[i].price);
        document.getElementById("cart-total-price").innerHTML = totalPrice.toFixed(2);
    }
}

showProductInCart()
    // updateTotalPrice()


// console.log(itemContainer);
// let id = null;
// for (let i = 0; i < currCart.length; i++) {
//     let curItem = currCart[i]
//         // console.log(itemContainer.querySelector('.cart-product-name'));
//         // let sameName = curItem.name === itemContainer.querySelector('.cart-product-name').innerText;
//     let sameQty = curItem.qty === itemContainer.querySelector('.cart-product-qty').innerText;
//     let sameGlaze = curItem.glaze === itemContainer.querySelector('.cart-product-glaze').innerText;
//     let samePrice = curItem.price === itemContainer.querySelector('.cart-product-price').innerText;
//     console.log("sameQty", sameQty);
//     console.log("curItem.qty", curItem.qty)
//     if (sameQty && sameGlaze && samePrice) {
//         id = i;
//         break
//     }
// }
// console.log("id", id)

// const index = currCart.findIndex(function(item) {
//     if (item.name == 'Original') {
//         return true;
//     }
// })