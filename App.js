import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useState } from "react";
import { useFonts } from "expo-font";
import GameScreen from "./screens/GameScreen";
import Color from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [gussRound, setgussRound] = useState(0);

  const [fontLoaded, error] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  function pickNumberHandler(pickNumber) {
    setUserNumber(pickNumber);
  }

  const gameOverHandler = useCallback((numberOfRound) => {
    setGameIsOver(true);
    setgussRound(numberOfRound);
  }, []);

  const startNewGameHandler = useCallback(() => {
    setGameIsOver(false);
    setUserNumber("");
    setgussRound(0);
  }, []);

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        roundNumber={gussRound}
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <LinearGradient
      colors={[Color.primary700, Color.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        source={require("./assets/images/background.jpg")}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
