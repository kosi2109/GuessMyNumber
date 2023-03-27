import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ScrollView
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Color from "../constants/colors";

function GameOverScreen({ roundNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  let marginTop = 50;

  if (width < 380) {
    imageSize = 150
  }

  if (height < 400) {
    imageSize = 80
    marginTop = 10
  }

  const imageStyle = {
    width : imageSize,
    height : imageSize,
    borderRadius : imageSize / 2
  }

  return (
    <ScrollView style={styles.screen}>
    <View style={[styles.rootContainer, {marginTop : marginTop}]}>
      <Title>Game Over</Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your Phone need<Text style={styles.highlightText}> {roundNumber} </Text>
        rounds to guess a number
        <Text style={styles.highlightText}> {userNumber} </Text> .
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
    </ScrollView>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen : {
    flex : 1
  },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: Color.primary800,
    overflow: "hidden",
    margin: 36
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Color.primary500,
  },
});
