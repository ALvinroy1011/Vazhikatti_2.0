import { StyleSheet } from "react-native";

export const colors = {
  primary: "#8B2936",
  darkBg: "#3D0008",
  white: "#FFFFFF",
  black: "#161616",
  gray: "#7A7A7A",
  orange: "#DF741E",
  darkGray: "#8B8B8B",
};

export const typography = {
  h1: {
    fontSize: 23,
    fontWeight: "600",
  },
  h2: {
    fontSize: 20,
    fontWeight: "600",
  },
  body: {
    fontSize: 16,
  },
  small: {
    fontSize: 14,
  },
  tiny: {
    fontSize: 12,
  },
};

export const layout = {
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  padding: {
    padding: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
};

export const shared = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: "hidden",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
