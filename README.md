# Vidly Movie API Backend

## Overview
Welcome to the "Vidly" movie rental application backend built using Node.js, Express.js, and MongoDB. This project provides a complete backend solution for managing movie rentals, customers, and more. Inspired by Mosh Hamedani's course on "Programming with Mosh," this backend implements a wide range of features to handle various aspects of the movie rental process.

## Features
1. **User Authentication and Authorization**: Implement secure user registration and login functionality using JSON Web Tokens (JWT) for authorization.

2. **Movie Management**:
   - **Create Movies**: Add new movies to the collection with details like title, genre, and stock count.
   - **Read Movies**: Retrieve a list of all movies or get details of a specific movie.
   - **Update Movies**: Modify existing movie information.
   - **Delete Movies**: Remove movies from the collection.

3. **Customer Management**:
   - **Create Customers**: Add new customers to the database with personal information and contact details.
   - **Read Customers**: Access customer information including names and contact details.
   - **Update Customers**: Modify customer details.
   - **Delete Customers**: Remove customers from the database.

4. **Rental Tracking**:
   - **Create Rentals**: Record movie rentals, associating customers and movies along with rental dates.
   - **Read Rentals**: View rental history, including rental dates and return status.
   - **Update Rentals**: Update rental information for returns and extensions.
   - **Delete Rentals**: Delete rental records when no longer needed.

5. **Movie Genre Classification**: Categorize movies into genres for better organization and efficient searching.

6. **Validation and Error Handling**: Implement robust validation and error handling mechanisms for API requests to ensure data integrity.

7. **Middleware Implementation**: Utilize middleware for handling authentication and request validation, enhancing security and reliability.

8. **Database Interaction**:
   - **MongoDB**: Store data in a MongoDB database using Mongoose for schema modeling.
   - **Database Connection Pooling**: Optimize database performance through connection pooling.

9. **Pagination and Sorting**: Implement pagination and sorting options for listing movies, customers, and rentals.

10. **API Documentation**:
    - Generate comprehensive API documentation using tools like Swagger to assist developers in understanding endpoints and payloads.

11. **Logging and Monitoring**:
    - Implement logging to record application events and errors for debugging and analysis.
    - Set up monitoring to track server health and performance.

12. **Error Reporting**: Implement a mechanism to notify administrators or developers about critical errors.

13. **Unit and Integration Testing**: Develop and run tests to ensure the reliability and correctness of endpoints.

14. **Deployment and Scalability**:
    - Prepare the application for deployment on cloud platforms.
    - Implement strategies for horizontal scaling to handle increased traffic.

15. **Dockerization**: Containerize the application using Docker for simplified deployment and management.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- Swagger (for API documentation)
- Docker (for containerization)
- ...

## Installation
1. Clone the repository:
git clone <repository-url>
cd vidly-backend
