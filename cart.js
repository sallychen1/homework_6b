const storedValue = JSON.parse(localStorage.getItem('savedCart'));
const newCart = storedValue ? storedValue : [];
console.log(storedValue);

function showProductInCart(product) {
    const template = document.getElementById('cart-item-template');
    console.log(template);
    const cartDiv = document.getElementsByClassName('cart-items');
    const clone = template.content.cloneNode(true);

    clone.querySelector('cart-product-name').innerText = product.name;
    clone.querySelector('cart-product-glaze').innerText = product.glaze;
    clone.querySelector('cart-product-glaze').innerText = product.qty;
    clone.querySelector('cart-product-price').innerText = product.price;

    const removeBtn = clone.querySelector('.remove-btn');
    removeBtn.addEventListener('click', function() {
        // find and remove object from cart
    });

    cartDiv.appendChild(clone);
}

showProductInCart(product);

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


// function addToCart(name, price, qty) {
//     let cartRow = document.createElement('div');
//     cartRow.innerText = name
//     let cartItems = document.getElementsByClassName('cart-items')[0];
//     // let cartRowContents = '<div>...${name}'
//     // cartRow.innerHTML = '<div>...'
//     cartItems.append(cartRow);
// }