import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  container: {
    margin: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
  },
  subtitle: {
    color: "#525252",
    fontSize: 15,
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  menuTitle: {
    fontSize: 16,
    marginTop: 10,
    letterSpacing: 0.7,
  },
  menuContainer: {
    borderTopColor: "lightgrey",
    borderTopWidth: 1,
    marginTop: 10,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
  },
});

export default styles;
