// Fetch product data from the API
fetch('https://67964437bedc5d43a6c4be08.mockapi.io/01/product')
.then(response => response.json())
.then(data => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id'); // Extract the ID from the URL query parameterß

    // Find the product matching the ID
    const product = data.find(p => p.id === productId);
    if (product) {
        // Populate product details
        document.getElementById('detail-title').textContent = product.title;
        document.getElementById('detail-image').src = product.image;
        document.getElementById('detail-price').textContent = `$${product.price}`;
        document.getElementById('detail-description').textContent = product.description;

        // Add to cart functionality
        document.querySelector('.add-to-cart').addEventListener('click', function() {
            fetch('https://67964437bedc5d43a6c4be08.mockapi.io/01/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productId: productId,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                })
            })
            .then(response => response.json())
            .then(data => {
                alert('Product added to cart!');
            })
            .catch(err => console.error('Error adding product to cart:', err));
        });
    } else {
        // Handle product not found
        document.getElementById('detail-title').textContent = "Product not found";
        document.getElementById('detail-description').textContent = "Sorry, this product is not available.";
    }
})
.catch(err => console.error('Error fetching product data:', err));

// Function to go back to the shop
function goBackToShop() {
    window.location.href = "shop.html"; 
}
