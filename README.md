
>>> Full Stack E-commerce Products  Web Application <<<

A full-stack **E-commerce application** using **Spring Boot** (Java) for the backend and **ReactJS with Vite** for the frontend. This application demonstrates the integration of RESTful APIs with a modern frontend stack, ideal for learning and demonstration purposes.

---

> Project Structure

```
SpringBoot-Reactjs-Ecommerce-main/
├── Ecommerce Product -Backend/       # Spring Boot REST API and  Data JPA backend
├── Ecommerce Product -Frontend/      # React + Vite frontend application
```

---

> Backend - Spring Boot

> Technologies Used

* Java 
* Spring Boot
* Spring Data JPA
* MySQL 
* Maven

> Backend Directory Structure

```
Ecommerce-Backend/
├── controller/      # REST endpoints
├── model/           # JPA entity classes
├── repo/            # Spring Data JPA interfaces
├── service/         # Business logic
├── resources/
│   ├── application.properties{Databases Details}
│   └── data1.sql
└── pom.xml          # Maven build configuration
```

> Setup Instructions

1. **Database Setup:**

   * Create a MySQL database, e.g., `ecommercedb`.
   * Update `application.properties`:

     ```properties
     spring.application.name=ecom-proj

server.port=8080

spring.datasource.url=jdbc:mysql://localhost:3306/E-commercedb?createDatabaseIfNotExist=true
spring.datasource.username=root
spring.datasource.password=jaga

spring.jpa.hibernate.ddl-auto=update
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

2. Run the App:**

   ```bash
   cd Ecommerce-Backend
   mvn spring-boot:run as Springboot Application
   ```

3. Data Initialization:**

   On first run, `data1.sql` inserts seed product data into your DB.

> REST API Endpoints

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| GET    | `/products`      | Fetch all products |
| GET    | `/products/{id}` | Get product by ID  |
| POST   | `/products`      | Add new product    |
| PUT    | `/products/{id}` | Update product     |
| DELETE | `/products/{id}` | Delete product     |

---

> Frontend - React + Vite

> Technologies Used

* ReactJS
* Vite (bundler)
* Axios (API calls)
* Bootstrap (UI)
* JavaScript (ES6+)

>  Frontend Directory Structure

```
Ecommerce-Frontend/
├── public/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/           # Page-level components
│   ├── App.jsx          # App layout
│   └── main.jsx         # Entry point
├── package.json
└── vite.config.js
```

> Getting Started

1.Install dependencies:**

   
   cd Ecommerce-Frontend
   npm install
   

2. Run the app:**

   
   npm run dev


   This will launch the frontend deafault at `http://localhost:5173`.

3. **Connect to Backend:**

   Update the backend URL in API service files (usually inside `src/` or `src/services/`) if needed:

   ```js
   axios.get('http://localhost:8080/products')
   ```

> Features

* Product List (from Spring Boot backend)
* Dynamic rendering using React components
* Fully responsive UI
* Easy integration with further features (cart, checkout, login)......

