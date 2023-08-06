import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width } = useWindowDimensions();
  const isLandscape = width > 500;

  return (
    <View
      style={isLandscape ? styles.rootLandscapeContainer : styles.rootContainer}
    >
      <Title> Game Over</Title>
      <View>
        <View
          style={
            isLandscape ? styles.landscapeImageContainer : styles.imageContainer
          }
        >
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  rootLandscapeContainer: {
    flex: 1,

    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 300,
    borderWidth: 3,
    borderColord: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  landscapeImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColord: Colors.primary800,
    overflow: "hidden",
    margin: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginVertical: 24,
  },
  highlight: {
    color: "yellow",
    fontFamily: "open-sans-bold",
  },
});
