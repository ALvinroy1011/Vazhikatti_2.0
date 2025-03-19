import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { ScanIcon } from "./Icons";

const ScanButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <ScanIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#8B2936",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 44,
    alignSelf: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default ScanButton;
