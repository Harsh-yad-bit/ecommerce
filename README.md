# E-Commerce Watch Store

A modern full-stack e-commerce web application built with **React, Vite, Node.js, Express, MongoDB, and Vercel**.

The project focuses on creating a premium product-shopping experience with a modern UI, product catalog, authentication, and pre-order functionality.

## Features

* Modern responsive e-commerce interface
* Product catalog
* Product pagination
* Product details and pricing
* Google authentication
* JWT-based authentication
* Cookie-based authentication
* Pre-order functionality
* REST API integration
* MongoDB Atlas database
* Responsive React UI
* Separate frontend and backend architecture
* Production deployment

## Tech Stack

### Frontend

* React
* Vite
* React Router
* Axios
* CSS
* Lucide React
* Inter Font

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Passport.js
* Google OAuth
* JWT
* Cookie Parser
* CORS

### Deployment

* Vercel
* MongoDB Atlas
* GitHub

## Project Architecture

The project is divided into two separate repositories:

```text
E-Commerce Watch Store
│
├── Frontend
│   ├── React
│   ├── Vite
│   ├── React Router
│   ├── Axios
│   └── CSS
│
└── Backend
    ├── Node.js
    ├── Express
    ├── MongoDB
    ├── Mongoose
    ├── Authentication
    └── REST API
```

The frontend communicates with the backend through HTTP requests.

```text
React Frontend
      │
      │ Axios
      ▼
Express REST API
      │
      │ Mongoose
      ▼
MongoDB Atlas
```

## API

The frontend communicates with the Express backend through REST API endpoints.

### Get Products

```http
GET /list
```

### Create Pre-order

```http
POST /preorder
```

The API handles product retrieval and stores pre-order information in MongoDB.

## Authentication

The backend uses:

* Google OAuth
* Passport.js
* JWT
* HTTP cookies

Authentication is handled by the backend while the React frontend communicates with the authentication endpoints.

## Database

MongoDB Atlas is used as the production database.

Product information includes:

```text
name
category
price
rating
reviewsCount
tag
image
description
```

## Running Locally

### Frontend

```bash
npm install
npm run dev
```

The frontend runs on the Vite development server.

### Backend

```bash
npm install
npm start
```

The backend requires environment variables such as:

```env
MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:5173
```

Do not commit `.env` files or database credentials to GitHub.

## Deployment

The frontend and backend are maintained as separate repositories and can be deployed independently.

```text
Frontend Repository
        │
        ▼
      Vercel
        │
        ▼
 React Application


Backend Repository
        │
        ▼
      Vercel
        │
        ▼
 Express REST API
        │
        ▼
 MongoDB Atlas
```

## Project Goals

This project was built to practice and demonstrate:

* Full-stack MERN development
* REST API development
* MongoDB integration
* Authentication
* Frontend-backend communication
* React application architecture
* API deployment
* Cloud database integration
* Production deployment

## Future Improvements

* Shopping cart
* Payment integration
* Order management
* Admin dashboard
* Product search and filtering
* Prod
