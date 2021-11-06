// Updating number on the cart icon for all pages
const cartIcon = JSON.parse(localStorage.getItem('savedCart'));

let totalQty = 0;
for (let i = 0; i < cartIcon.length; i++) {
    totalQty += parseInt(cartIcon[i].qty);
    document.getElementById("cart-numitems").innerHTML = totalQty;
}