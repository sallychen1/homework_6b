// Create new product object
function Product(productName, productGlaze, productQty, productPrice) {
    this.name = productName;
    this.glaze = productGlaze;
    this.qty = productQty;
    this.price = productPrice;
}

const storedValue = JSON.parse(localStorage.getItem('savedCart'));
const cart = storedValue ? storedValue : [];

// Add item to cart, used in the event listner
function addToCart(productName, productGlaze, productQty, productPrice) {
    const product = new Product(productName, productGlaze, productQty, productPrice);
    cart.push(product);
    localStorage.setItem('savedCart', JSON.stringify(cart));
}

// Updating the price based on number of items selected, used in the dropdown event listener
function changePrice() {
    let newPrice = document.getElementById("qty-select").value * 4.99;
    document.getElementById("product-price").innerHTML = newPrice;
}

// Add event listener to button to properly add items to cart
document.getElementById("cartButton").addEventListener('click', function() {
    // Updating number shown on cart
    let curQty = parseInt(document.getElementById("cart-numitems").innerHTML);
    let newQty = parseInt(document.getElementById("qty-select").value);
    document.getElementById("cart-numitems").innerHTML = curQty + newQty;

    // Adding item to cart
    glaze = document.getElementById("glaze-select").value;
    qty = parseInt(document.getElementById("qty-select").value);
    price = parseFloat(document.getElementById("product-price").innerHTML);
    addToCart('Original', glaze, qty, price);
    alert("Box Added to Cart!");
})