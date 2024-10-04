# G-Jenge Makers Ltd Mobile Application

## Overview

The **G-Jenge Makers Ltd Mobile Application** is developed to enhance the interaction between the company and its customers. G-Jenge Makers Ltd specializes in producing eco-friendly construction materials by recycling plastic waste. The mobile application aims to streamline the process of ordering products and services, tracking deliveries, and maintaining customer records, while providing a more efficient and user-friendly platform.

### Key Features

- User account creation for customers.
- Viewing available products and services.
- Ordering and payment module for transactions.
- After-sale services and feedback provision.
- Modules for various roles: Administrator, Stock Manager, Finance Manager, Dispatch Manager, and more.

This project is built using [Vite](https://vitejs.dev/), a fast frontend build tool.

## Project Structure

- **Frontend**: Vite, React, or Vue (depending on your choice) for building a fast and responsive UI.
- **Backend**: Connected to a database for managing orders, payments, and user data.
- **Modules**:
    - Customer module for placing orders and making inquiries.
    - Administrator module for managing users and data.
    - Finance module for tracking transactions.
    - Dispatch module for managing product delivery.

## Installation Instructions

### Prerequisites

- **Node.js** (version 14 or higher) must be installed.
- A package manager such as **npm** or **yarn**.

### Steps to Install

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-repo/g-jenge-makers-app.git
    cd g-jenge-makers-app
    ```

2. **Install dependencies**:

    Using npm:

    ```bash
    npm install
    ```

    Or using yarn:

    ```bash
    yarn install
    ```

3. **Start the development server**:

    Using npm:

    ```bash
    npm run dev
    ```

    Or using yarn:

    ```bash
    yarn dev
    ```

    This will start a Vite development server. Open your browser and navigate to `http://localhost:3000`.

4. **Build for production**:

    To build the project for production, run:

    ```bash
    npm run build
    ```

    Or using yarn:

    ```bash
    yarn build
    ```

    The build output will be available in the `dist` folder.

### Additional Commands

- **Preview Production Build**:

    ```bash
    npm run serve
    ```

- **Linting**:

    Ensure your code adheres to coding standards using ESLint:

    ```bash
    npm run lint
    ```

## Technologies Used

- **Frontend**: Vite, React/Vue (framework of choice)
- **Backend**: Node.js, Express.js (if applicable)
- **Database**: MySQL (for handling user, orders, and payments data)
- **Styling**: Tailwind CSS (for fast and responsive UI)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

Special thanks to the team at **G-Jenge Makers Ltd** for their support and collaboration in building this mobile application.
