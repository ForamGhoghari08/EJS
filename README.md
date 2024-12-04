
# EJS-Based Node.js Application

## 📋 Project Overview
This project demonstrates the use of **EJS** (Embedded JavaScript Templates) to render dynamic web pages in a Node.js application. It includes a complete setup of routing, controllers, views, and public assets for a simple yet effective web application.

---

## 🏗️ Features
- **Dynamic Views**: Rendered using EJS templates.
- **Routing**: Modularized route definitions for scalability.
- **Controllers**: Encapsulation of business logic.
- **Static Files**: CSS and other public assets served seamlessly.
- **Form Handling**: Basic form structure integrated into the views.

---

## 🗂️ Folder Structure

project-name/

├── Controllers/    # Handles the request logic
│   └── user.controller.js

├── Routes/         # Defines application routes
│   └── User.Route.js

├── Views/          # EJS templates for rendering
│   ├── Index.ejs
│   └── Signup.ejs

├── Public/         # Static assets (CSS, JS, etc.)
│   └── Index.css

├── Index.js        # Main application file

└── package.json    # Project metadata and dependencies


---
   
## 📌 API Endpoints

| **Endpoint**      | **HTTP Method** | **Description**               |
|--------------------|-----------------|--------------------------------|
| `/User`           | GET             | Renders the homepage.         |
| `/User/Signup`    | GET             | Renders the signup page.      |

---

## 🧑‍💻 Code Explanation

### `Index.js`
- Configures the Express app, sets EJS as the view engine, and defines the static folder.
- Mounts the user routes.

### `Routes/User.Route.js`
- Handles route definitions for the application.
- Routes include:
  - `/` → Renders the home page.
  - `/Signup` → Renders the signup page.

### `Controllers/user.controller.js`
- Contains the logic for rendering EJS views.
- Exports:
  - `getIndex`: Renders `Index.ejs`.
  - `getSignupPage`: Renders `Signup.ejs`.

### `Views/`
- `Index.ejs`: Displays a header and a simple form.
- `Signup.ejs`: Displays a signup form.

### `Public/Index.css`
- Contains styles for the application.

---

## 🛠️ Built With
- **Node.js**: Backend runtime.
- **Express.js**: Web framework.
- **EJS**: Template engine for rendering dynamic content.

---

## 📜 License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.

---

### Contact

For any questions, feel free to reach out:

- **Name**: Foram Ghoghari
- **GitHub**: [ForamGhoghari08](https://github.com/ForamGhoghari08)
- **Email**: ghoghariforam8@gmail.com

---
