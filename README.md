# Bistro Delight

A fully responsive restaurant management application with a focus on managing menus, and customer orders. This application interacts with the Symfony backend application, working seamlessly together.

---

## Features

### Frontend

- Displays restaurant menus with categories.
- Add items to the cart, modify quantities, and view the total cost.
- Responsive design using TailwindCSS and DaisyUI.
- React Router for smooth navigation.

### Backend

- CRUD operations for dishes and categories.
- RESTful API integration for frontend communication.
- Dockerized setup for seamless development and production.
- MariaDB database integration.

---

## Tech Stack

### Frontend

- **Framework**: React
- **Styling**: TailwindCSS, DaisyUI
- **Icons**: React Icons
- **Routing**: React Router Dom

---

## Prerequisites

Make sure you have the following installed on your system:

### for containerization with docker:

- [Docker](https://www.docker.com/)
- [Setup backend application first](https://github.com/Engarif3/restaurant-management)

### If running locally instead of Docker:

- [Node.js](https://nodejs.org/)
- [PHP](https://www.php.net/)
- [Symfony](https://symfony.com/)
- [Composer](https://getcomposer.org/)

---

## Installation and Setup

### 1. Clone the Repository

```bash
    git clone <repository-link>
    cd bistro-delight
```

### 2. Install Frontend Dependencies

```bash
    npm install
```

### 3. Start the Development Server

**_Make sure, you are running the backend application before running this command_**

```bash
 npm run dev
```

### 4. Build and start container

```bash
    git clone <repository-link>
    cd bistro-delight
    docker compose up
```

### 5. Access the Application

```bash
    http://localhost:5173
```

## 📞 Contact

For any inquiries or issues, feel free to reach out:

- **Name:** Md. Arifur Rahman
- **Email:** [arif.aust.eng@gmail.com](mailto:arif.aust.eng@gmail.com)
- **LinkedIn:** [Md. Arifur Rahman](https://www.linkedin.com/in/engarif3/)
