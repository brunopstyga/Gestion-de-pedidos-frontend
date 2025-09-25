
import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import UsuarioPage from "../pages/UsuarioPage";

// MOCK del servicio de usuarios
jest.mock("../services/usuarioService", () => ({
  getUsuarios: jest.fn(() =>
    Promise.resolve([
      { id: 1, nombre: "Bruno Gonzalez" },
      { id: 2, nombre: "María Lopez" },
    ])
  ),
  getOrdenesByUsuario: jest.fn((usuarioId) =>
    Promise.resolve([
      { id: 101, label: `Orden ${usuarioId}-1` },
      { id: 102, label: `Orden ${usuarioId}-2` },
    ])
  ),
  getProductosByOrden: jest.fn((usuarioId, ordenId) =>
    Promise.resolve([
      { label: `Producto ${ordenId}-1`, cantidad: 1, precioUnitario: 50 },
      { label: `Producto ${ordenId}-2`, cantidad: 2, precioUnitario: 75 },
    ])
  ),
}));

describe("UsuarioPage", () => {
  it("renderiza la lista de usuarios correctamente", async () => {
    const { findByText } = render(<UsuarioPage />);

  
    const bruno = await findByText(/Selecciona un usuario:/i);
    expect(bruno).toBeTruthy();
  });

  it("muestra órdenes y productos cuando se selecciona un usuario y una orden", async () => {
    const { getByText, findByText } = render(<UsuarioPage />);

    await findByText(/Selecciona un usuario:/i);

    
  });
});
