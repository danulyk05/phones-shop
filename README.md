# React Device Catalog

## Overview

Welcome to the React Device Catalog, a comprehensive e-commerce application designed, with a focus on user experience and modern web practices. This project includes a product catalog, shopping cart, favorites page, and various other features. It supports smooth UI transitions, and advanced features like search and pagination.

## Demo

You can view a live demo of the application [DEMO](https://danulyk05.github.io/phones-shop/).

## Key Features

- **PictureSlider**: Customizable images with automatic transitions.
- **ProductsSlider**: Hot prices block with scroll functionality.
- **Shop by Category**: Links to Phones, Tablets, and Accessories.
- **Brand New Products**: Display of new items sorted by price.
- **Loading and Error Handling**: Select dropdown for sorting and pagination controls, with appropriate error messages.
- **Product Details**: Detailed product information with picture selection and breadcrumbs for navigation.
- **Shopping Cart Management**: Add, remove, and update product quantities with localStorage support, and a checkout button with modal dialog.
- **Favorites Management**: Manage favorite products with localStorage support.
- **Error Handling**: NotFoundPage for unknown URLs and product not found states.

## Challenges

Developing the application involved several challenges, particularly around implementing complex features and ensuring a seamless user experience.

### Key Challenges

- **Feature Integration**: Integrating multiple features such as sliders, sorting, pagination, and product details required careful planning and coordination.
- **Responsive Design**: Ensuring that all components and features work well across various devices and screen sizes demanded extensive testing and adjustments.
- **State Management**: Efficiently managing application state for shopping cart, favorites, and product details, including localStorage interactions, required robust state management strategies.
- **Error Handling**: Handling errors gracefully in various parts of the application, including loading states and API interactions, was crucial for a smooth user experience.
- **User Experience**: Implementing smooth transitions, responsive design, and interactive elements like sliders and modals required attention to detail to ensure a fluid and engaging experience.
- **Performance Optimization**: Ensuring that the application performs well, with efficient data handling and smooth animations, was essential for maintaining a high-quality user experience.
- **Advanced Features**: Implementing advanced features like color theme switching, search functionality, and internationalization required careful planning and integration to enhance the application's usability and accessibility.
- **Testing and Debugging**: Thorough testing across different browsers and devices was necessary to identify and fix issues, ensuring consistent functionality and performance.

These challenges were addressed through careful design, iterative development, and thorough testing to deliver a high-quality, feature-rich application.

## Installation & Setup

To install the project and run it locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/username/react_device-catalog.git
    ```

2. Navigate to the project directory:
    ```bash
    cd react_device-catalog
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the local development server:
    ```bash
    npm start
    ```
5. Build & deploy:
    ```bash
    npm run build
    npm run deploy
    ```

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For type safety and better development experience.
- **Vite**: For fast and optimized build tooling.
- **npm**: For package management.
- **CSS Modules**: For scoped and modular CSS styling.
- **React Context / Redux**: For state management of cart and favorites.
- **Sass**: For advanced CSS styling capabilities.
- **React Router**: For routing and navigation.
- **Husky**: For Git hooks to enforce code quality.
- **ESLint**: For linting JavaScript and TypeScript code.
- **Prettier**: For code formatting.