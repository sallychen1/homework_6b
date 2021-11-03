// Updating the price based on number of items selected
function changePrice() {
    let newPrice = document.getElementById("qty-select").value * 4.99;
    document.getElementById("product-price").innerHTML = newPrice;
}

// New Product Object
function Product(productName, productGlaze, productQty, productPrice) {
    this.name = productName;
    this.glaze = productGlaze;
    this.qty = productQty;
    this.price = productPrice;
}

const cart = [];

function addToCart(productName, productGlaze, productQty, productPrice) {
    const product = new Product(productName, productGlaze, productQty, productPrice);
    cart.push(product);
    console.log("cart:", cart)
    localStorage.setItem('savedCart', JSON.stringify(cart));
}

document.getElementById("cartButton").addEventListener('click', function() {
    // Updating number shown on cart
    let curQty = parseInt(document.getElementById("cart-numitems").innerHTML);
    let newQty = parseInt(document.getElementById("qty-select").value);
    document.getElementById("cart-numitems").innerHTML = curQty + newQty;

    // Adding item to cart
    glaze = document.getElementById("glaze-select").value;
    qty = parseInt(document.getElementById("qty-select").value)
    price = parseInt(document.getElementById("product-price").innerHTML)

    addToCart("Original", glaze, qty, price);

    alert("Item Added to Cart!");
})