# RentifyApplication
Rentify is a web application designed to streamline the real estate rental process. This platform serves both property owners (sellers) and potential tenants (buyers), helping owners find the correct tenants and assisting tenants in locating the ideal property based on their specific requirements.

Key Features:
User Registration and Authentication: Separate user accounts for buyers and sellers. Users can register, log in, and manage their session within the application.
Property Management for Sellers: Sellers can add, update(pending). Each listing includes details such as the number of bedrooms, bathrooms, location, price, type of house, and additional amenities.
Property Browsing for Buyers: Buyers can view all listed properties, with options to express interest directly through the platform. Detailed property attributes are displayed to aid in decision-making.
Express Interest: Buyers can express interest in properties, which triggers automatic email notifications to both the buyer (with seller contact details) and the seller (with buyer contact details).
Responsive Design: Suitable for use across various devices and screen sizes, ensuring a user-friendly experience.

Technology Stack
Frontend: React - Used for building the user interface.
Backend: Node.js with Express - Manages the server-side logic and database interactions.
Database: MongoDB - Stores user and property data.
Email Service: Nodemailer with Gmail - Handles sending emails when a buyer expresses interest in a property.

Local Development
Prerequisites:
Node.js
npm (Node Package Manager)
MongoDB

Additional Notes
Initial Loading Time: If the application is hosted on a free service like Render, the initial connection might be slow. For details on handling these scenarios, please refer to this discussion on Render Community.
News: https://community.render.com/t/extremely-slow-responses-from-base-urls/3715 For free service it will take time
Project Links: https://rentifyapplicationbackend.onrender.com
Live Application: Rentify Live - Note that the initial load time might be longer due to the limitations of the free hosting service. 
