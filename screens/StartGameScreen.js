import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickedNumber }) {
  const { width, height } = useWindowDimensions();
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function restInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const parsedNumber = parseInt(enteredNumber);
    console.log(enteredNumber, parsedNumber);
    if (parsedNumber < 1 || parsedNumber > 99 || isNaN(parsedNumber)) {
      Alert.alert(
        "Please add a valid number",
        "Number has to be a number between 1 and 99",
        [
          {
            text: "okay",
            style: "destructive",
            onPress: restInputHandler,
          },
        ]
      );
      return;
    }
    onPickedNumber(parsedNumber);
  }
  const marginTop = height < 450 ? 30 : 100;
  return (
    <ScrollView style={style.screen}>
      <KeyboardAvoidingView style={style.screen} behavior="position">
        <View style={[style.rootContainer, { marginTop: marginTop }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput
              value={enteredNumber}
              onChangeText={numberInputHandler}
              style={style.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoFocus
            />
            <View style={style.buttonContainer}>
              <View style={style.button}>
                <PrimaryButton onPress={() => setEnteredNumber("")}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={style.button}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const style = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,

    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },

  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },
  button: {
    flex: 1,
  },
});
