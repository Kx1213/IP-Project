# IP-Project
Gunpla Store Project

Overview

The Gunpla Store is an online platform designed for users to browse and purchase Gunpla model kits. It allows customers to view detailed product descriptions, add items to their shopping cart, and manage their user accounts. This project aims to provide a seamless, responsive shopping experience, making it easier for users to discover products, manage their cart, and adjust their settings. The application uses mock APIs to fetch product data and handle cart management, making it a fully interactive web application.

The store also provides a personalized user experience by allowing customers to update their account information, including their username, email, and password. Whether you're a Gunpla enthusiast looking to expand your collection or a new customer exploring the hobby, this platform provides everything you need for a smooth shopping experience.

Design Process

Target Audience

The Gunpla Store is designed for hobbyists and collectors interested in purchasing Gunpla model kits. This includes both newcomers to the hobby and experienced model builders who wish to purchase new kits or manage their existing collection. The website’s goal is to make browsing, purchasing, and account management as straightforward and enjoyable as possible.

User Stories

As a customer, I want to view detailed product descriptions, so that I can make informed purchasing decisions.
As a shopper, I want to add products to my cart, so that I can purchase multiple items in a single transaction.
As a user, I want to be able to view my cart and remove unwanted items, so that I can manage my purchases before checking out.
As a user, I want to update my account settings (e.g., username, email, password), so that I can keep my profile up to date.
As a new user, I want to create an account and save my settings, so that I don’t have to re-enter my information for future visits.
Wireframes and Mockups
Wireframes and design mockups for the project were created using Adobe XD. These include rough designs for the product pages, shopping cart, and user settings interface. Below is the link to the Adobe XD wireframe (or you can include the PDF here).

Features



Technologies Used

Frontend

HTML5: Used for structuring the content of the website.
CSS3: Used to style the pages and create a responsive layout.
JavaScript: Powers the interactions on the website, including adding products to the cart, managing user settings, and fetching data from APIs.
Fetch API: Handles communication with the mock API to retrieve product and cart data.
Backend (API Integration)
MockAPI: The product catalog and shopping cart data are fetched from MockAPI, providing easy-to-use RESTful APIs.
RestDB: The user settings data is fetched from RestDB.io, a database for storing user information.
Assistive AI
ChatGPT: ChatGPT was used to help with generating and refining JavaScript code for interacting with the mock APIs and handling dynamic content like the shopping cart and user settings. Several coding snippets, especially for handling fetch requests and managing the cart, were improved with AI assistance.
Testing

Manual Testing Scenarios

Product Catalog
Navigate to the homepage and verify that all products are displayed correctly with their images and prices.
Click on a product and verify that the product details (title, description, price) are displayed properly.
Test the "Add to Cart" button and ensure that the product is added to the cart.

Shopping Cart
Add multiple products to the cart and verify that the cart displays the correct number of items.
Click on the "Remove" button next to an item and confirm that it is removed from the cart.
Ensure the cart total updates correctly after removing an item.

User Settings
Update the username, email, and password, and verify that the changes are saved successfully.
Try submitting the settings form with missing required fields and ensure that an error message is displayed.

Browser and Device Testing
Tested on Chrome, Firefox, and Safari to ensure compatibility across different browsers.
Verified responsiveness on various devices, including desktop, tablet, and mobile devices.

Bugs and Issues
Some minor styling issues on mobile devices that caused elements to misalign slightly. These were addressed by adjusting media queries for smaller screen sizes.
A rare bug where products would not appear in the cart if the user had previously left the page without refreshing. This issue was resolved by reloading cart data on page load.

Credits

Content
The text for the product descriptions was written by the project team.
Media
Product images were sourced from Unsplash and Pixabay, with appropriate attribution.
Acknowledgements
Special thanks to ChatGPT for assisting in the JavaScript code development, especially with the handling of APIs and event listeners.
This format covers all the essential sections for your project documentation, including an overview, design process, features, technologies used, testing process, and credits. Let me know if you need any additional details!




# IP-Project
GUNPLA
Overview
The Gunpla Project is an interactive web platform designed for Gundam model kit enthusiasts. It serves as an online shop where users can explore and purchase Gunpla kits, earn virtual currency through engagement, and redeem vouchers for discounts. The goal is to create an immersive and gamified shopping experience that enhances customer engagement and rewards loyalty.

Design Process
Target Audience:
Gundam enthusiasts who collect and build Gunpla models.
Casual hobbyists looking for beginner-friendly kits.
Competitive builders who participate in Gunpla tournaments.
User Stories:
As a visitor, I want to browse Gunpla kits, so that I can find models that interest me.
As an admin, I want to manage the product inventory, so that I can keep the store updated with the latest kits.
As a visitor i want a clean UI so that it is easy for me to learn to use this website.

Features
Existing Features:
Gunpla Storefront: Allows users to browse available Gunpla kits with descriptions, prices, and images.
Product Details Page: Displays high-quality images, kit specifications, and purchase options.
Shopping Cart System: Users can add/remove items from their cart and proceed to checkout.
User Settings Management - Registered users can update their account settings (username, email, password) and save their changes.
Responsive Design - The website is optimized for various screen sizes, providing a seamless experience on both desktop and mobile devices.

Features Left to Implement:
Leaderboard System: Users compete to earn the most virtual currency.
Community Forum: A space for users to share builds and discuss Gunpla customization.
AR Model Viewer: Allows users to preview Gunpla in augmented reality before purchase.
Virtual Currency System: Users can earn in-game currency by engaging with the site, such as answering daily trivia.
Voucher Redemption: Users can exchange virtual currency for discount vouchers on purchases.
User Authentication: Users can create accounts and track their purchase history.
Checkout function: Users can choose to use the voucher and change the payment method.

Technologies Used
HTML, CSS, JavaScript – Core technologies for building the front-end UI.
Lottie.js – For loading screen animations and interactive elements.
MockAPI-For product and cart function.
ResdDB-For user account registration and login.


Assistive AI
1.Home page Gif layout: help to maintain the height as the same, text aligned with gif.
![alt text](image.png)
2.Rremove function: help to add remove api.
![alt text](image-1.png)
3.Total price: help to add caculate total price function.
![alt text](image-2.png)
4.Product card border: help to display the product correctly in both moblie view and desktop view.
![alt text](image-3.png)
![alt text](image-4.png)
5.




User Registration & Login
Update the username, email, and password, and verify that the changes are saved successfully.
Try submitting the settings form with missing required fields and ensure that an error message is displayed.



Product Browsing & Details
Product Display: Navigate to the Gunpla product listing page → All products should be visible with correct images, names, and prices.
View Product Details: Click on a product → The correct name, price, description, and image should be displayed.
Shopping Cart Functionality
Add to Cart: Click "Add to Cart" on a product → The item should appear in the cart with the correct quantity and price.
Remove from Cart: Click "Remove" next to an item → The item should disappear from the cart.
Responsive & Browser Compatibility
Test the site on Chrome and Edge.(Does not display correctly in mobile view on Microsoft Edge.)
Test on mobile (iOS & Android) and desktop to confirm elements scale properly and remain interactive.
API Data Fetching & Performance
Ensure product data loads correctly from the API, displaying accurate details.
Test API response time to ensure product listings load within a reasonable timeframe.
Bug Reports & Known Issues
Does not display correctly in mobile view on Microsoft Edge.
Product detail page is not displaying $ sign.
Footer section is not always at the bottom.


Credits

Media
The photos used in this site were obtained from https://www.pinterest.com/
Acknowledgements
Inspiration for this project from https://www.pinterest.com/pin/281543724428598/ (color combinations)
Inspiration for this project from https://themeskingdom.com/(home page design)


https://github.com/Kx1213/IP-Project.git