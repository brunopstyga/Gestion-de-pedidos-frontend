import { useEffect, useState } from "react";
import { getOrdenesByUsuario } from "../services/usuarioService";

export function useOrdenes(usuarioId) {
  const [ordenes, setOrdenes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!usuarioId) return;

    setLoading(true);
    getOrdenesByUsuario(usuarioId).then(data => {
      setOrdenes(data);
      setLoading(false);
    });
  }, [usuarioId]);

  return { ordenes, loading };
}
