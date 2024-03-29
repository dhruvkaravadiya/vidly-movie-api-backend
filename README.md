# Vidly Movie API Backend

## Overview
Welcome to the "Vidly" movie rental application backend, powered by Node.js, Express.js, and MongoDB. This project offers a comprehensive backend solution designed to manage movie rentals, customer interactions, and other essential aspects of a modern movie rental service.

Built with a focus on robustness and scalability, this backend provides a range of features that enable efficient management of movies, customers, rentals, and more. Whether you're building a new movie rental platform or looking to enhance an existing one, our backend offers the tools you need to create a seamless and user-friendly experience.

With technologies like Node.js and Express.js, along with powerful database tools such as MongoDB and Mongoose, this backend ensures efficient data storage and retrieval. User authentication and authorization are implemented using JSON Web Tokens (JWT), ensuring secure access to your application.

To streamline your development process, comprehensive API documentation is generated using Swagger, aiding both developers and potential users in understanding endpoints and payloads. And for deployment simplicity, the project can be containerized using Docker.


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
- Docker (for containerization)
- ...


## Installation
1. Clone the repository: 
   ```
   git clone <repository-url>
   cd vidly-backend
   ```
2. Install dependencies: 
   ```
   npm install
   ```
3. Set up environment variables in the .env file in the project root:
   ```
   PORT=<port-number>
   DATABASE_URL=<mongodb-connection-url>
   SECRET_KEY=<your-secret-key>
   ```

## Usage
1. Start the server
   ```
   npm start
   ```
2. Access the API at: 'http://localhost:<port>/api'


## API Endpoints
Movies

| Request Type | Endpoint          | Description                         |
|--------------|-------------------|-------------------------------------|
| GET          | /api/movies       | Get a list of all movies.          |
| GET          | /api/movies/:id   | Get details of a specific movie.   |
| POST         | /api/movies       | Add a new movie.                   |
| PUT          | /api/movies/:id   | Update details of a movie.        |
| DELETE       | /api/movies/:id   | Delete a movie.                    |


Customers

| Request Type | Endpoint          | Description                             |
|--------------|-------------------|-----------------------------------------|
| GET          | /api/customers    | Get a list of all customers.           |
| GET          | /api/customers/:id| Get details of a specific customer.    |
| POST         | /api/customers    | Add a new customer.                   |
| PUT          | /api/customers/:id| Update details of a customer.         |
| DELETE       | /api/customers/:id| Delete a customer.                    |


Rentals

| Request Type | Endpoint          | Description                         |
|--------------|-------------------|-------------------------------------|
| GET          | /api/rentals      | Get a list of all rentals.          |
| GET          | /api/rentals/:id  | Get details of a specific rental.   |
| POST         | /api/rentals      | Add a new rental.                   |
| PUT          | /api/rentals/:id  | Update details of a rental.        |
| DELETE       | /api/rentals/:id  | Delete a rental.                    |


### Authentication

For authentication, the application uses JSON Web Tokens (JWT) to ensure secure user access to various endpoints.

### Contributing

Contributions to this project are greatly appreciated. If you would like to contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m "Add your message here"`
4. Push your changes to your fork: `git push origin feature-name`
5. Create a pull request to the original repository.

### License

This project is licensed under the MIT License. For more details, refer to the [LICENSE](LICENSE) file.

### Contact

For questions or inquiries, feel free to contact [your-name] at [your-email]. We appreciate your interest and look forward to your feedback.

---

Remember to replace `[your-name]` and `[your-email]` with your actual name and email address. This will complete the sections you provided and offer users more information about authentication, contributing, licensing, and how to get in touch with you.
