import { useEffect, useState } from "react";
import { getProductosByOrden } from "../services/usuarioService";

export function useProductos(usuarioId, ordenId) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!usuarioId || !ordenId) return;

    setLoading(true);
    getProductosByOrden(usuarioId, ordenId).then(data => {
      setProductos(data);
      setLoading(false);
    });
  }, [usuarioId, ordenId]);

  return { productos, loading };
}
