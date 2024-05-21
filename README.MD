# ShopStream Backend

This is the backend service for an online store, built with Express, TypeScript, MongoDB, and Mongoose. The service includes product and order management with validation using Zod.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)

## Features

- Product management
- Order management
- Inventory management

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (either a local instance or a MongoDB Atlas account)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yasin-arafat-389/ShopStream-Backend

```

2. Install the dependencies:

```bash
npm install
```

## Configuration

1. Create a .env file in the root directory and add your MongoDB connection string:

```bash
MONGODB_URI=mongodb://localhost:5000/your-database-name
PORT=5000
```

2. Start the MongoDB server if it is not already running. For a local MongoDB server, you can start it with:

```bash
npm run start:dev
```

## API Endpoints

1. Get all products

```bash
GET /api/products
```

2. Create new product

```bash
POST /api/products
```

3. Retrieve a Specific Product by ID

```bash
GET /api/products/:productId
```

4. Update Product Information

```bash
PUT /api/products/:productId
```

5. Delete a Product

```bash
DELETE /api/products/:productId
```

6. Search a product

```bash
GET /api/products?searchTerm=iphone
```

7. Create a New Order

```bash
POST /api/orders
```

8. Retrieve All Orders

```bash
GET /api/orders
```

9. Retrieve Orders by User Email

```bash
GET /api/orders?email=arafat@gmail.com
```
