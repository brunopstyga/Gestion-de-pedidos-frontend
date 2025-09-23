const BASE_URL = "http://localhost:8080/usuarios";
 
export async function getUsuarios() {
  const res = await fetch(`${BASE_URL}/picker`);
  const json = await res.json();
  return json.data || [];
}

export async function getOrdenesByUsuario(idUsuario) {
  const res = await fetch(`${BASE_URL}/${idUsuario}/ordenes/picker`);
  const json = await res.json();
  return json.data || [];
}

export async function getProductosByOrden(idUsuario, idOrden) {
  const res = await fetch(`${BASE_URL}/${idUsuario}/ordenes/${idOrden}/productos`);
  const json = await res.json();
  return json.data || [];
}
