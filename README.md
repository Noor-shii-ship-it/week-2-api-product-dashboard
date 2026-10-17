# AUREX Internship — Week 2 API Product Dashboard

**Student Name:** Noor Fatima  
**Internship:** AUREX Full-Stack Web Development Internship  
**Week:** Month 2 — Week 2  
**Project:** API Product Dashboard

## Project Overview

This project is developed as part of the AUREX Full-Stack Web Development Internship — Month 2, Week 2.

The API Product Dashboard is a React application that fetches product data from an external REST API and displays it in a responsive interface. Users can search for products, filter them by category, and view detailed product information.

## Technologies Used

- React.js
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3
- Fetch API
- DummyJSON REST API
- Git and GitHub

## Features

- Fetch product data from an external API
- Display products in a responsive card layout
- Show a loading message while fetching data
- Handle API errors with an error message
- Provide a Retry button when an API request fails
- Search products by title
- Filter products by category
- Display the number of matching products
- Show an empty-state message when no products match
- View product details in a modal
- Display product images, descriptions, prices, ratings, stock, and categories
- Close the product details modal

## API Integration

**API Endpoint:** https://dummyjson.com/products

The application uses the Fetch API to retrieve product data from DummyJSON. React state and the useEffect hook are used to manage and fetch the data.

## React Concepts Practiced

- Functional components
- JSX
- useState
- useEffect
- API requests using Fetch
- Async/await
- Try/catch error handling
- Conditional rendering
- Array map() and filter()
- Search and category filtering
- Event handling
- Controlled form inputs

## Project Structure

```text
week-2-api-product-dashboard/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## How to Run the Project

### Prerequisites

- Node.js
- npm

### Installation

1. Clone or download the repository.
2. Open the project folder in VS Code.
3. Open the terminal.
4. Install the dependencies:

```bash
npm install
```

5. Start the development server:

```bash
npm run dev
```

6. Open the local URL displayed in the terminal.

## Testing

The following features have been checked manually:

- Products load successfully from the API.
- Product search works.
- Category filtering works.
- Product details modal opens and closes.
- Empty search results display an appropriate message.
- The API request returns a successful HTTP status.

The Retry button is implemented to allow another API request after a failure. Its failure-and-retry behavior still needs to be tested.

## Learning Outcomes

Through this project, I practised integrating an external REST API into a React application. I learned to manage asynchronous data fetching, loading and error states, search and category filtering, conditional rendering, and product details using React Hooks.

## Future Improvements

- Add to Cart functionality
- Cart quantity and total price
- Checkout and order placement

## Author

**Noor Fatima**

AUREX Full-Stack Web Development Internship
