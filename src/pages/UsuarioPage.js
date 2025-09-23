import React, { useState } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import MyPicker from "../component/MyPicker";
import { useUsuarios } from "../hooks/useUsuarios";
import { useOrdenes } from "../hooks/useOrdenes";
import { useProductos } from "../hooks/useProductos";

export default function UsuarioPage() {
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState("");
  const [ordenSeleccionada, setOrdenSeleccionada] = useState("");

  const { usuarios, loading: loadingUsuarios } = useUsuarios();
  const { ordenes, loading: loadingOrdenes } = useOrdenes(usuarioSeleccionado);
  const { productos, loading: loadingProductos } = useProductos(usuarioSeleccionado, ordenSeleccionada);

  return (
    <View style={styles.container}>
      {loadingUsuarios ? (
        <>
          <ActivityIndicator size="large" color="blue" />
          <Text>Cargando usuarios...</Text>
        </>
      ) : (
        <>
          <Text style={styles.title}>Selecciona un usuario:</Text>
          <MyPicker
            items={usuarios.map(u => ({ label: u.label, value: u.id }))}
            selectedValue={usuarioSeleccionado}
            onValueChange={value => {
              setUsuarioSeleccionado(value);
              setOrdenSeleccionada("");
            }}
            placeholder={usuarios.length === 0 ? "No hay usuarios" : "-- Selecciona usuario --"}
          />

          {loadingOrdenes ? (
            <Text>Cargando órdenes...</Text>
          ) : (
            usuarioSeleccionado && (
              <>
                <Text style={styles.title}>Selecciona una orden:</Text>
                <MyPicker
                  items={ordenes.map(o => ({ label: o.label, value: o.id }))}
                  selectedValue={ordenSeleccionada}
                  onValueChange={setOrdenSeleccionada}
                  placeholder={ordenes.length > 0 ? "-- Selecciona orden --" : "No hay órdenes"}
                />
              </>
            )
          )}

          {loadingProductos ? (
            <Text>Cargando productos...</Text>
          ) : (
            productos.length > 0 && (
              <View style={styles.detalle}>
                <Text style={styles.title}>Productos de la orden:</Text>
                {productos.map((p, index) => (
                  <Text key={index} style={styles.producto}>
                    - {p.label} | Cantidad: {p.cantidad} | Precio: ${p.precioUnitario}
                  </Text>
                ))}
              </View>
            )
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#333333",
    textAlign:"center"
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "white",
  },
});
