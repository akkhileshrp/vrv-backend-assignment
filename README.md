API Documentation

This document provides an overview of the API endpoints available for the application, including registration, login, logout, token verification, role-based access, and admin CRUD operations.

To get started, clone the repository using:
   ` git clone https://github.com/akkhileshrp/vrv-backend-assignment`
Navigate to the project folder with:
   ` cd your-repo-name`
Then run:
    `npm install`
to install the necessary dependencies. Afterward, you can start the application with:
    `npm run dev.`

API Endpoints:
`Register`
Endpoint: /api/v1/auth/register
Method: POST
Description: Allows a new user to register by providing necessary details.
Request Body:
{
  "username": "akkhileshrp",
  "password": "123456",
  "email": "akkhileshrp@gmail.com",
  "role": "admin"
}
Response:
{
  "message": "User registered successfully",
  "newUser": {
    "username": "akkhileshrp",
    "email": "akkhileshrp@gmail.com",
    "password": "$2a$10$y7wX9tw1yNzsZLHHP0j7KOIJj68ucm17Uh0Wpo7Cucd9XiiIxLVR2",
    "role": "admin",
    "_id": "6747ea1d92bfcd1a778f5fca",
    "createdAt": "2024-11-28T03:57:17.086Z",
    "updatedAt": "2024-11-28T03:57:17.086Z",
    "__v": 0
  }
}
`Login`
Endpoint: /api/v1/auth/login
Method: POST
Description: Authenticates a user and provides an access token.
Request Body:
{
  "username": "akkhileshrp",
  "password": "123456"
}
Response:
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
`Logout`
Endpoint: /api/v1/auth/logout
Method: POST
Description: Logs out the user by clearing the authentication token stored in cookies.
Response:
{
  "message": "Logged out successfully"
}
`Token Verification`
Endpoint: /api/v1/auth/token-verify
Method: POST
Description: Verifies the validity of an access token.
Request Body:
{
  "token": "string"
}
Response:
{
  "isValid": true
}
`Role-Based Access`
Endpoint: /api/v1/roles/manager
Method: GET
Description: Grants access to specific resources based on user roles.
Response:
{
  "message": "Access granted",
  "data": { ... }
}
`User Profile`
Endpoint: /api/v1/roles/user
Method: GET
Description: Displays the profile of the logged-in user.
Response:
{
  "username": "bhuvaneshp",
  "email": "bhuvaneshp@gmail.com",
  "role": "user",
  "_id": "6747ea1d92bfcd1a778f5fca"
}
`Admin - View All Users`
Endpoint: /api/v1/roles/admin
Method: GET
Description: Allows the admin to view details of all users, including managers and other admins.
Response:
{
  "users": [
    {
      "username": "manager1",
      "email": "manager1@gmail.com",
      "role": "manager"
    },
    {
      "username": "user1",
      "email": "user1@gmail.com",
      "role": "user"
    }
  ]
}
`Admin - Create User`
Endpoint: /api/v1/admin/add-user
Method: POST
Description: Allows the admin to create new users or managers.
Request Body:
{
  "username": "newuser",
  "email": "newuser@gmail.com",
  "password": "password123",
  "role": "user"
}
Response:
{
  "message": "User created successfully",
  "user": {
    "username": "newuser",
    "email": "newuser@gmail.com",
    "role": "user"
  }
}
`Admin - Update User`
Endpoint: /api/v1/roles/admin/update-user/:id
Method: PUT
Description: Allows the admin to update user details.
Request Body:
{
  "username": "updateduser",
  "email": "updateduser@gmail.com",
  "role": "manager"
}
Response:
{
  "message": "User updated successfully",
  "user": {
    "username": "updateduser",
    "email": "updateduser@gmail.com",
    "role": "manager"
  }
}
`Admin - Delete User`
Endpoint: /api/v1/roles/admin/delete-user/:id
Method: DELETE
Description: Allows the admin to delete a user.
Response:
{
  "message": "User deleted successfully"
}
