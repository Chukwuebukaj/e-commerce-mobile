# e-commerce-mobile
This app demonstrates product listing on an e-commerce website. 

### Features

- **Product Catalog**: Displays a list of products with detailed information.
- **Shopping Cart**: Enables users to add and remove items from the cart.
- **Sort and Filter**: Users are able to sort and filter through what is displayed on the UI.
- **Pagination**: It also includes pagination where only 5 items are displayed at once and a user can click on the pagination buttons to view more items. 

**Project Documentation**

### Technologies Used

React Native, Typescript, Expo

### Project Setup:
This React Native project was initialized using the Expo CLI. 
Expo provides a set of tools and services for developing React Native applications quickly. 
To get started, I made sure I had Node.js and Expo CLI installed. Then, I created a new project using the following command:

```bash
expo init e-commerce-mobile
```

I Choose the Typescript template.

### Project Setup

```bash
# Clone the repository
git clone https://github.com/Chukwuebukaj/e-commerce-mobile.git

# Navigate to the project directory
cd e-commerce-mobile

# Install dependencies
yarn install
```

### Running the Application

```bash
# Start the development server
yarn start

# View on Android emulator
Press a

# View on IOS emulator
Press i

# View on Browser
Press w
```

### Component Hierarchy:
The project follows a modular component-based architecture. Here's an overview of the component hierarchy:

- **App (Root Component):** The main component rendering the entire application.
    - **Home Screen:** The landing screen displaying the product listing, filters, sorting options, and pagination controls.
    - **Product Card Component:** Reusable component rendering individual product items with their name, category, price, and add to cart functionality.
    - **Sort Component:** UI component allowing users to sort products based on different criteria (alphabetically, price, etc.).
    - **Filter Component:** UI component enabling users to filter products by category or price range.
    - **Pagination Component:** Component managing the pagination logic, allowing users to navigate through the product catalog.

### State Management Approach:
The project utilizes React's built-in state management capabilities alongside React Hooks for managing local component states. 
I used the `useState` hook to manage states, ensuring efficient re-renders and updates and the `useEffect` hook for managing side effects.

### Development Process:
1. **Setup:** Clone the repository by running `git clone https://github.com/Chukwuebukaj/e-commerce-mobile.git` and install project dependencies using `yarn install`.
2. **Development:** Wrote code using a modular approach, creating reusable components where applicable.
4. **Documentation:** Documented important aspects of the code, including complex logic, and custom components.
5. **Version Control:** Utilized Git for version control. Commited changes with meaningful messages for clear version history.

---
