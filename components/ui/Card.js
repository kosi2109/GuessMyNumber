import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Color from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    backgroundColor: Color.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, //shadow for android
    //shadow for ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
