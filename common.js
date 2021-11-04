// Updating number on the cart icon
const cartIcon = JSON.parse(localStorage.getItem('savedCart'));

var totalQty = 0;
for (let i = 0; i < cartIcon.length; i++) {
    var prod = cartIcon[i]
    totalQty += parseInt(prod.qty);
    document.getElementById("cart-numitems").innerHTML = totalQty;
}

// console.log("cartIcon", cartIcon)