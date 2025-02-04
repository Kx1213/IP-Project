// Function to remove item from cart
function removeItemFromCart(itemId) {
    fetch(`https://67964437bedc5d43a6c4be08.mockapi.io/01/cart/${itemId}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(() => {
        console.log(`Item with ID ${itemId} removed`);
        loadCartData();  
    })
    .catch(err => console.error('Error removing item:', err));
}

// Function to load cart data from API
function loadCartData() {
    fetch('https://67964437bedc5d43a6c4be08.mockapi.io/01/cart')  
        .then(response => response.json())
        .then(data => {
            const cartContainer = document.getElementById('cart-items');
            if (data.length === 0) {
                cartContainer.innerHTML = '<p>Your cart is empty.</p>';
            } else {
                cartContainer.innerHTML = data.map(item => {
                    return `
                        <div class="cart-item" data-id="${item.id}">
                            <img src="${item.image}" alt="${item.title}">
                            <div class="item-details">
                                <h3>${item.title}</h3>
                                <p>Price: $${item.price}</p>
                                <p>Quantity: ${item.quantity}</p>
                                <div class="item-actions">
                                    <button class="remove-item" data-id="${item.id}">Remove</button>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');
            }

            const total = data.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0);
            document.getElementById('cart-total').textContent = total.toFixed(2);

            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', (e) => {
                    const itemId = e.target.getAttribute('data-id');
                    removeItemFromCart(itemId);
                });
            });
        })
        .catch(err => console.error('Error fetching cart data:', err));
}

loadCartData();
