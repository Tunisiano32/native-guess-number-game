import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.nubmerText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("screen").width;
const deviceheight = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    margin: deviceWidth < 380 ? 12 : 16,
    padding: deviceWidth < 380 ? 12 : 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  nubmerText: {
    fontSize: deviceWidth < 380 ? 28 : 30,
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
  },
});
