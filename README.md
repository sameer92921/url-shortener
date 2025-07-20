# URL Shortener

A full-stack URL shortener application built with React (Vite) for the frontend and Node.js (Express) for the backend, using MongoDB as the database. This application allows users to shorten long URLs, view their shortened URLs, and track clicks.

## Features

-   **URL Shortening**: Convert long, cumbersome URLs into short, shareable links.
-   **User Authentication**: Secure user registration and login.
-   **Dashboard**: View a list of all URLs shortened by the logged-in user.
-   **Click Tracking**: Monitor the number of clicks on each shortened URL.
-   **Copy to Clipboard**: Easily copy the shortened URL to your clipboard.

## Technologies Used

**Frontend:**
-   React (with Vite)
-   Axios for API requests
-   React Router DOM for navigation
-   Tailwind CSS for styling

**Backend:**
-   Node.js
-   Express.js
-   MongoDB (Mongoose for ODM)
-   `nanoid` for generating short codes
-   `jsonwebtoken` for authentication
-   `bcrypt` for password hashing
-   `cors` for handling Cross-Origin Resource Sharing
-   `dotenv` for environment variables

## Setup and Installation

Follow these steps to get the project up and running on your local machine.

### Prerequisites

-   Node.js (LTS version recommended)
-   npm (comes with Node.js)
-   MongoDB (running locally or a cloud instance like MongoDB Atlas)

### 1. Clone the Repository

```bash
git clone <repository_url>
cd url-shortener
```

### 2. Backend Setup

Navigate to the `server` directory:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the `server` directory and add the following environment variables:

```
PORT=8080
MONGO_URI=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_jwt_secret_key
BASE_URL=http://localhost:8080
```

-   `MONGO_URI`: Your MongoDB connection string (e.g., `mongodb://localhost:27017/url-shortener` or your MongoDB Atlas connection string).
-   `ACCESS_TOKEN_SECRET`: A strong, random string for JWT token signing. You can generate one using `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`.
-   `BASE_URL`: The base URL for your shortened links (e.g., `http://localhost:8080`).

Start the backend server:

```bash
npm start
```

The server will run on `http://localhost:8080` (or the port you specified in `.env`).

### 3. Frontend Setup

Open a new terminal and navigate to the `client` directory:

```bash
cd ../client
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the `client` directory and add the following environment variable:

```
VITE_API_BASE_URL=http://localhost:8080
```

-   `VITE_API_BASE_URL`: The base URL of your backend API.

Start the frontend development server:

```bash
npm run dev
```

The frontend application will typically run on `http://localhost:5173` (or another available port).

## Usage

1.  **Register/Login**: Create an account or log in to access the URL shortening features.
2.  **Shorten URL**: Enter a long URL in the input field and click "Shorten".
3.  **Copy Short URL**: Click the "Copy" button next to the shortened URL to copy it to your clipboard.
4.  **Dashboard**: Navigate to the dashboard to view all your shortened URLs, their original links, and click counts.

## License

This project is licensed under the MIT License.
