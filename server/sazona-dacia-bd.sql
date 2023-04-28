-- Crear la base de datos
-- CREATE DATABASE SazonaDacia;

-- Seleccionar la base de datos
-- USE SazonaDacia;

-- Tabla de clientes
CREATE TABLE clientes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  email VARCHAR(100),
  telefono VARCHAR(20) NOT NULL,
  direccion VARCHAR(100) NOT NULL
);

-- Tabla de productos
CREATE TABLE productos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  descripcion VARCHAR(200),
  precio DECIMAL(10,2) NOT NULL
);

-- Tabla de pedidos
CREATE TABLE pedidos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  fecha_hora DATETIME NOT NULL,
  cliente_id INT NOT NULL,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id),
  total DECIMAL(10,2) NOT NULL
);

-- Tabla de detalles de pedido
CREATE TABLE detalles_pedido (
  id INT PRIMARY KEY AUTO_INCREMENT,
  pedido_id INT NOT NULL,
  FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
  producto_id INT NOT NULL,
  FOREIGN KEY (producto_id) REFERENCES productos(id),
  cantidad INT NOT NULL,
  precio DECIMAL(10,2) NOT NULL
);