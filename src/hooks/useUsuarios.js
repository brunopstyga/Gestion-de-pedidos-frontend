import { useEffect, useState } from "react";
import { getUsuarios } from "../services/usuarioService";

export function useUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getUsuarios().then(data => {
      setUsuarios(data);
      setLoading(false);
    });
  }, []); 

  return { usuarios, loading };
}