# AVIP 2026 - Task 1: Secure User Authentication

A complete basic authentication project for the AVIP 2026 Full Stack Development Task 1.

## Features

- User registration
- User login
- Password hashing with bcrypt
- JWT authentication
- Protected `/api/user/profile` endpoint
- Server-side validation
- Proper HTTP status codes
- MongoDB persistence
- Responsive frontend demo
- No secrets committed to GitHub

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- JSON Web Token (JWT)
- HTML/CSS/JavaScript

## Requirements

- Node.js installed
- MongoDB running locally OR a MongoDB Atlas connection string

## Setup

1. Open this project in VS Code.
2. Run:

```bash
npm install
```

3. Copy `.env.example` to `.env`.
4. Set your MongoDB connection string and JWT secret in `.env`.

Example:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/avip_auth
JWT_SECRET=use_a_long_random_secret_here
JWT_EXPIRES_IN=1d
```

5. Start:

```bash
npm start
```

For development:

```bash
npm run dev
```

6. Open:

http://localhost:5000

## API Endpoints

### Register

`POST /api/auth/register`

Body:

```json
{
  "name": "Rajat",
  "email": "rajat@example.com",
  "password": "secret123"
}
```

### Login

`POST /api/auth/login`

Body:

```json
{
  "email": "rajat@example.com",
  "password": "secret123"
}
```

The response contains a JWT token.

### Protected Profile

`GET /api/user/profile`

Header:

```text
Authorization: Bearer YOUR_JWT_TOKEN
```

Without a valid token, the endpoint returns HTTP 401.

## AVIP Task 1 Requirement Mapping

- Registration endpoint: implemented
- Login endpoint: implemented
- Hashed passwords: implemented with bcrypt
- No plain-text password in repository: `.env` and secrets are ignored
- Token mechanism: JWT
- Protected endpoint: `/api/user/profile`
- Input validation: implemented
- HTTP status codes: implemented
- README: included
- Example authenticated request: included
- Demo UI: included

## GitHub Repository Naming

Follow the naming convention from your AVIP offer/task instructions. The PDF example uses:

`WD_2_PersonalPortfolio_BYTE`

Use the correct domain shorthand and task number for your assigned track.

## Important

Never commit `.env` to GitHub.
