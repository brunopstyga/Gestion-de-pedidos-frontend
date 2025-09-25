
import * as usuarioService from "../services/usuarioService";

// Mock global de fetch
global.fetch = jest.fn();

// Definimos los endpoints y respuestas de prueba
const endpoints = [
  {
    name: "getUsuarios",
    fn: usuarioService.getUsuarios,
    url: "http://localhost:8080/usuarios/picker",
    mockData: [{ id: 1, nombre: "Bruno" }],
    args: [],
  },
  {
    name: "getOrdenesByUsuario",
    fn: usuarioService.getOrdenesByUsuario,
    url: "http://localhost:8080/usuarios/1/ordenes/picker",
    mockData: [{ id: 101, label: "Orden 101" }],
    args: [1],
  },
  {
    name: "getProductosByOrden",
    fn: usuarioService.getProductosByOrden,
    url: "http://localhost:8080/usuarios/1/ordenes/101/productos",
    mockData: [{ label: "Producto 1", cantidad: 2, precioUnitario: 50 }],
    args: [1, 101],
  },
];

describe("usuarioService", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  endpoints.forEach(({ name, fn, url, mockData, args }) => {
    it(`${name} devuelve datos correctamente`, async () => {
      fetch.mockResolvedValueOnce({
        json: () => Promise.resolve({ data: mockData }),
      });

      const result = await fn(...args);
      expect(result).toEqual(mockData);
      expect(fetch).toHaveBeenCalledWith(url);
    });

    it(`${name} devuelve array vacío si no hay data`, async () => {
      fetch.mockResolvedValueOnce({
        json: () => Promise.resolve({}),
      });

      const result = await fn(...args);
      expect(result).toEqual([]);
    });

    it(`${name} maneja error si fetch falla`, async () => {
      fetch.mockRejectedValueOnce(new Error("Error de red"));

      await expect(fn(...args)).rejects.toThrow("Error de red");
    });
  });
});
