# Full Stack JavaScript Application

This project is a full-stack JavaScript application using Node.js, Express, MongoDB for the backend, and React for the frontend. It demonstrates professional coding practices, a clear folder structure, and essential configurations.

---

## Features

- **Backend**: 
  - Node.js with Express.js for routing
  - sqllite for the database
  - Environment variables using dotenv
- **Frontend**: 
  - React with functional components
  - Axios for API calls
  - React Router for routing
- **Best Practices**:
  - Organized folder structure
  - Environment-based configurations
  - Linting and formatting with ESLint and Prettier

---

## Project Structure

```plaintext
project/
├── backend/
│   ├── src/
│   │   ├── config/       # Config files like database connection
│   │   ├── controllers/  # API request handlers
│   │   ├── models/       # Database schemas
│   │   ├── routes/       # API routes
│   │   ├── app.js        # Express app initialization
│   │   └── server.js     # Entry point for the backend
├── frontend/
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page-level components
│   │   ├── services/     # API calls to the backend
│   │   └── App.js        # Main app component
```



## Setup Instructions
#### Prerequisites
``` 
Node.js (v16+)
npm or yarn
MongoDB (local or cloud) / sqllite3
```
#### Backend Setup
Navigate to the backend folder:
``` bash
cd backend
```
Install dependencies:
```bash
npm install
```
Create a .env file:

``` plaintext
PORT=5000
MONGO_URI=mongodb://localhost:27017/your_database
FRONTEND_URL=http://localhost:3000
```
Start the backend:
``` bash
npm run dev
```
Frontend Setup
Navigate to the frontend folder:
```bash
cd frontend
 ```
Install dependencies:
```bash
npm install
```
Create a .env file:
``` plaintext
REACT_APP_API_URL=http://localhost:5000/api
```
Start the frontend:
``` bash
npm start
```
Usage
``` Access the application at http://localhost:3000.
Backend API is hosted at http://localhost:5000/api.
```

Scripts
Backend
``` 
npm run dev // Starts the server in development mode with live reload.
```
Frontend
``` 
npm start // Starts the React development server.
```

Contributions
Feel free to fork this repository and contribute by submitting pull requests.

License
This project is open-source and available under the MIT License.