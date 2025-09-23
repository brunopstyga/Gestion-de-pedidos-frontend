import React from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet, View } from "react-native";

export default function MyPicker({ items, selectedValue, onValueChange, placeholder }) {
  // Creamos items incluyendo el placeholder al inicio
  const itemsConPlaceholder = [
    { label: placeholder || "-- Selecciona --", value: "" },
    ...items
  ];

  return (
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={onValueChange}
      >
        {itemsConPlaceholder.map(item => (
          <Picker.Item
            key={item.value}
            label={item.label}
            value={item.value}
            color={item.value === "" ? "#999" : "#000"} 
          />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    marginVertical: 10,
    width: "100%", 
    alignItems: "center", 
  },
  picker: {
    height: 50,
    width: 250, 
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
