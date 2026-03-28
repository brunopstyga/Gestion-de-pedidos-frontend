# Order Management - Frontend (React Native)

# Description
This is a mobile application developed using React Native with Expo. It allows users to:

- Select users and view their orders  
- Check products within each order  
- Interact with data retrieved from a Java/Spring Boot backend  

 # Project Structure
src/
 ├─ pages/
 │   └─ UsuarioPage.js
 ├─ component/
 │   └─ MyPicker.js
 ├─ hooks/
 │   ├─ useUsuarios.js
 │   ├─ useOrdenes.js
 │   └─ useProductos.js
 └─ services/
     └─ usuarioService.js

# Installation

Clone the repository:

git clone https://github.com/brunopstyga/Gestion-de-pedidos-frontend.git
cd Gestion-de-pedidos-frontend

Instalar dependencias:

npm install


# Run the App:

npm start


Run on Android:

npm run android


Run on iOS:

npm run ios

# Unit Testing

This project uses Jest and @testing-library/react-native to test components and custom hooks.

Componentes testeados

Tested Components

UsuarioPage

Verifies that the component renders correctly
Checks that loaded users appear in the picker
Ensures loading indicators (ActivityIndicator) are displayed while fetching data

Custom Hooks

useUsuarios

Tests that users are correctly loaded from the service
Mocks the API to avoid dependency on real data

useOrdenes

Validates that selecting a user loads their orders
Checks behavior during loading and empty states

useProductos

Ensures that selecting a user and an order loads the corresponding products
Mocks API responses to simulate backend behavior

Run tests
npm test

All tests run in isolation using mocked services and verify that the UI reacts correctly to state changes and loaded data.

<img width="459" height="545" alt="2025-09-23 11_52_47-Window" src="https://github.com/user-attachments/assets/d8231500-f9dc-44e3-a05a-66ca2a238298" />

