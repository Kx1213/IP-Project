// Fetch product data from the API
fetch('https://67964437bedc5d43a6c4be08.mockapi.io/01/product')
    .then(response => response.json())
    .then(data => {
        console.log('API Response:', data);

        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        console.log('Product ID from URL:', productId);
        const product = data.find(p => p.id === productId);
        fetch('https://67964437bedc5d43a6c4be08.mockapi.io/01/product')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Fetched Products:', data);
    })
    .catch(error => {
        console.error('Error fetching product data:', error);
    });


        

        
        
         
        for (let i = 0; i < data.length; i++){
            if (data[i].id == productId){
                document.getElementById('detail-title').textContent = data[i].title
                document.getElementById('detail-description').textContent = data[i].description
                document.getElementById('detail-price').textContent = data[i].price
                document.getElementById('detail-image').src = data[i].image
            }}

        document.querySelector('.add-to-cart').addEventListener('click', function () {
              
                fetch('https://67964437bedc5d43a6c4be08.mockapi.io/01/cart', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        productId: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image,
                        quantity: 1,
                    }),
                })
                .then(response => response.json())
                .then(data => {
                    alert('Product added to cart!');
                    console.log('Product added:', data);
                    })
                    
            });
        
    })
  

// Function to go back to the shop
function goBackToShop() {
    window.location.href = "shop.html";
}
