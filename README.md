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
`Endpoint: /api/v1/auth/register`
`Method: POST`
`Description: Allows a new user to register by providing necessary details.`



![alt text](image-1.png)

`Login`
`Endpoint: /api/v1/auth/login`
`Method: POST`
`Description: Authenticates a user and provides an access token.`


![alt text](image.png)

`Logout`
`Endpoint: /api/v1/auth/logout`
`Method: POST`
`Description: Logs out the user by clearing the authentication token stored in cookies.`


![alt text](image-2.png)


`Token Verification`
`Endpoint: /api/v1/auth/token-verify`
`Method: POST`
`Description: Verifies the validity of an access token.`


![alt text](image-3.png)


`Role-Based Access`
`Endpoint: /api/v1/roles/manager`
`Method: GET`
`Description: Grants access to specific resources based on user roles.`


![alt text](image-4.png)


`User Profile`
`Endpoint: /api/v1/roles/user`
`Method: GET`
`Description: Displays the profile of the logged-in user.`


![alt text](image-5.png)

`Admin - View All Users`
`Endpoint: /api/v1/roles/admin`
`Method: GET`
`Description: Allows the admin to view details of all users, including managers and other admins.`


![alt text](image-6.png)


`Admin - Create User`
`Endpoint: /api/v1/admin/add-user`D
`Method: POST`
`Description: Allows the admin to create new users or managers.`


![alt text](image-7.png)


`Admin - Update User`
`Endpoint: /api/v1/roles/admin/update-user/:id`
`Method: PUT`
`Description: Allows the admin to update user details.`


![alt text](image-8.png)


`Admin - Delete User`
`Endpoint: /api/v1/roles/admin/delete-user/:id`
`Method: DELETE`
`Description: Allows the admin to delete a user.`


![alt text](image-9.png)