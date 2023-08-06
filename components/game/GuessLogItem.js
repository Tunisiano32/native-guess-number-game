import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.container}>
      <Text style={styles.rounderNumber}>#{roundNumber}</Text>
      <Text style={styles.opponentGuess}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 5,
    padding: 12,
    marginVertical: 3,
    backgroundColor: "#ebebeb",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  rounderNumber: {
    fontFamily: "open-sans",
  },
  opponentGuess: {
    fontFamily: "open-sans",
  },
});
