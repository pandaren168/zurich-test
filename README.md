# Zurich-test

## Getting Started

Before you begin, ensure you have following installed:

-   You have `git`, `npm`, `node`, `postgres` installed.

## Frontend

### Installation

To install, follow these steps:

1. Clone the repository:
2. Navigate to the frontend directory:

    ```sh
    cd frontend
    ```

3. Install dependencies:
    ```sh
    npm install
    ```
4. In the frontend's folder root level, create `.env.local`,
   `sh
 NEXT_PUBLIC_GOOGLE_CLIENT_ID=
 `
   In this case, use this temporary ID, `NEXT_PUBLIC_GOOGLE_CLIENT_ID=105305416647-ceprv6bg3ljv7n1sbsd110rbmg6tmpog.apps.googleusercontent.com`
   This was used for google oauth library.

### Usage

1. Start the frontend:
   `sh
 npm run dev
 `
   This will start the Next.js development server on http://localhost:3000/login

### Accessing the Frontend

Open your web browser.

```sh
http://localhost:3000/login
```

You shall see a customer portal login page
![image](https://github.com/user-attachments/assets/7dcda7c8-3989-4184-9773-b52ac5adcdef)

### Interacting with the google login

Sign in using google authentication.

### Interacting with dashboard

Upon login, user can see mocked users info, user can interact with loadmore and show masked details
![image](https://github.com/user-attachments/assets/c526cbb3-52cd-42f7-9fba-377f0e493121)

### App Requirements

-   React
-   Next.js
-   Redux
-   Axios
-   Google OAuth2

---

## Backend

_prerequisite_: Setup require data, using postgres database via psql terminal.

1. `motor_insurance_website` database
   `   CREATE DATABASE motor_insurance_website;`
   Note: Default input will force as lowercase unless using quote

2. `product` table
    ```
    CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    productCode INT NOT NULL,
    location VARCHAR(50) NOT NULL,
    price INT NOT NULL,
    description VARCHAR(255);
    );
    ```
3. Insert data:
    ```
    INSERT INTO product (productCode, location, price, description) VALUES
    (1000, 'West Malaysia', 300, 'Sedan'),
    (1000, 'East Malaysia', 450, 'Sedan'),
    (2000, 'West Malaysia', 500, 'SUV'),
    (2000, 'East Malaysia', 650, 'SUV');
    ```

### Installation

To install, follow these steps:

1. Navigate to the frontend directory:

    ```sh
    cd backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```
3. In the backend's folder root level, create `.env`,
   `sh
 DATABASE_URL=postgres://{username}:{password}@localhost:5432/motor_insurance_website
 `
   In this case, `DATABASE_URL=postgres://postgres:123456@localhost:5432/motor_insurance_website`

### Usage

1. Start the backend:
   `sh
 npm run start:dev
 `
   This will start the Nest.js development server on http://localhost:3001/

### Accessing the swagger api

Open your web browser.

```sh
http://localhost:3001/api
```

You shall see swagger UI

### Interacting with the swagger UI

While GET is accessible by all users,
POST, PUT and DELETE will need authorization setup.

![image](https://github.com/user-attachments/assets/120a4472-381e-446a-b259-91a2d4dadd37)

1. Click on Authorize icon on top right side and input Jwt Token

```sh
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MzMwMzA3NjcsImV4cCI6MTYzMzAzNDE2N30.P2d3yWpWoAkOCtMO02-pRm9bWs7zkN61pttH5pXWv2g
```

![image](https://github.com/user-attachments/assets/b7ffb2a4-9404-4701-8ba2-6fdb1a0af359)

### Test with Create product, Update product, Delete product

Upon successfully authorized, user can create, update and delete product via mocked Jwt Token which has admin role.
Edit the request body and click `execute`

Curl payload if using other tools such as postman, rest-client

```sh
curl -X 'GET' \
'http://localhost:3001/product?productCode=1000&location=West%20Malaysia' \
-H 'accept: */*'
```

### App Requirements

-   NestJS
-   TypeORM (interacting with the database)
-   PostgreSQL
-   JWT
-   Swagger
