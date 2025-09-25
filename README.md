# Gestión de Pedidos - Frontend (React Native)

# Descripción

Aplicación móvil desarrollada en React Native con Expo, que permite a los usuarios:

Seleccionar usuarios y ver sus órdenes.

Consultar productos de cada orden.

Interactuar con datos obtenidos de un backend Java/Spring Boot.

 # Estructura del proyecto
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

# Instalación

Clonar el repositorio:

git clone https://github.com/brunopstyga/Gestion-de-pedidos-frontend.git
cd Gestion-de-pedidos-frontend

Instalar dependencias:

npm install


# Ejecutar la app:

npm start


Para Android:

npm run android


Para iOS:

npm run ios

# Pruebas Unitarias

Se utilizan Jest y @testing-library/react-native para testear componentes y hooks.

Componentes testeados

UsuarioPage

Verifica que se renderiza correctamente.

Comprueba que los usuarios cargados aparecen en el picker.

Asegura que los indicadores de carga (ActivityIndicator) aparecen mientras se obtienen datos.

Hooks personalizados

useUsuarios

Testea que los usuarios se cargan correctamente desde el servicio.

Mockea la API para no depender de datos reales.

useOrdenes

Valida que al seleccionar un usuario se carguen sus órdenes.

Comprueba comportamiento ante carga de datos y estados vacíos.

useProductos

Asegura que al seleccionar un usuario y una orden, se carguen los productos correspondientes.

Mockea la API para simular respuestas del backend.

Ejecutar tests
npm test


Todos los tests se ejecutan de manera aislada usando mocks para los servicios y comprueban que la UI reacciona correctamente a los cambios de estado y datos cargados.

<img width="459" height="545" alt="2025-09-23 11_52_47-Window" src="https://github.com/user-attachments/assets/d8231500-f9dc-44e3-a05a-66ca2a238298" />

