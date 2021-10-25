// Updating the price based on number of items selected
function changePrice() {
    let qty = document.getElementById("qty-select").value * 4.99;
    document.getElementById("price").innerHTML = "$ " + qty;
}

// Updating the number of items in the cart 
function update_cart() {
    let curQty = document.getElementById("cart-numitems").innerHTML;
    curQty = parseInt(curQty);
    let newQty = document.getElementById("qty-select").value;
    newQty = parseInt(newQty)
    document.getElementById("cart-numitems").innerHTML = curQty + newQty;
    alert("Item Added to Cart!");
}