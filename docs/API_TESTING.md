# API Testing Examples

## 1. Health

GET http://localhost:5000/api/health

Expected: HTTP 200

## 2. Register

POST http://localhost:5000/api/auth/register

Content-Type: application/json

```json
{
  "name": "Rajat",
  "email": "rajat@example.com",
  "password": "secret123"
}
```

Expected: HTTP 201 and JWT token.

## 3. Login

POST http://localhost:5000/api/auth/login

Content-Type: application/json

```json
{
  "email": "rajat@example.com",
  "password": "secret123"
}
```

Expected: HTTP 200 and JWT token.

## 4. Protected Endpoint

GET http://localhost:5000/api/user/profile

Authorization:

```text
Bearer YOUR_TOKEN
```

Expected: HTTP 200 with user data.

Without the token:

Expected: HTTP 401.
