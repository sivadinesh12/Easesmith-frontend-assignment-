# Plant Nursery Landing Page

This project is a **Plant Nursery Landing Page**, developed using React, which showcases a collection of plants and pots along with a nursery section. Users can view details, search for specific plants, and add items to their cart.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Components](#components)
- [Customization](#customization)

## Installation

To set up and run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/plant-nursery.gi
   ```
2. **Navigate to Project Director**:
   ```bash
   cd easesmith-frontend-assignment
   ```
3. **Install Dependencies**:
   ```bash
   npm start
   ```
4. **Open the browser and visit HTTP://Localhost:3000 to view the landing page **:



# Features
- Search functionality to filter plants.
- Pagination for displaying products.
- Add items to the cart.
- Display modal for adding products to the cart.
- Plant and nursery sections with a description of products.
- Sort products based on price, rating, and more.


## Usage
### Search for Products
Users can type in the search bar to filter and find specific plants by name. The search input dynamically filters plants as you type.

## Add to Cart
Users can click on a product to open a modal, showing detailed information, and can add the product to the cart. Once added, the product will appear in the cart, which is accessible through the header.

## Pagination
The products are displayed in a paginated format, allowing users to navigate through different pages of the product listing.

## Filtering & Sorting
- Sort by Price: Allows users to sort products by their price.
- Sort by Rating: Enables sorting based on customer ratings (mock data).

## Components
- Header: Contains navigation links and cart access.
- PlantAndPotsItem: Displays the plants and pots items.
- NurseryItem: Renders nursery items with images and descriptions.
- ProductItem: Renders each individual product in the product listing section.
- Modal: Shows product details and allows adding items to the cart.

## Customization
### Adding More Products
To add more products, modify the MockData.js file in the components/ folder. Simply add more items to the MockData array.

## Changing Images
Replace the images inside the assets/images/ folder to update product images or icons.

## Styling
To update styles, modify the .css files in the styles/ folder.
