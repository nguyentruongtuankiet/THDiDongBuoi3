import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function _1c() {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Điều hướng sang trang _1c.js khi ấn nút "LOGIN"
    navigation.navigate("_1d");
  };
  return (
    <LinearGradient
      colors={["#C7F4F7", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
      start={{ x: 0.5, y: 0.0 }}
      end={{ x: 0.5, y: 1.0 }}
      style={styles.container}
    >
      <Text style={styles.textCode}>CODE</Text>
      <View style={styles.divVERIFICATION}>
        <Text style={styles.textVERIFICATION}>VERIFICATION</Text>
      </View>
      <View style={styles.divSentOn}>
        <Text style={styles.textSentOn}>
          Enter ontime password sent on ++849092605798
        </Text>
      </View>
      <View style={styles.divRowOfSquares}>
        <TextInput style={styles.textinput} />
        <TextInput style={styles.textinput} />
        <TextInput style={styles.textinput} />
        <TextInput style={styles.textinput} />
        <TextInput style={styles.textinput} />
        <TextInput style={styles.textinput} />
      </View>

      <TouchableOpacity onPress={handleLogin}>
        <View style={styles.divVERIFYCODE}>
          <Text style={styles.textVERIFYCODE}>VERIFY CODE</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textCode: {
    marginTop: 113,
    marginLeft: 102,
    marginRight: 102,
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 60,
    color: "#000",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  divVERIFICATION: {
    marginTop: 62,
    marginLeft: 28,
    marginRight: 30,
    width: 302,
    height: 53,
  },
  textVERIFICATION: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 20,
    color: "#000",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  divSentOn: {
    marginHorizontal: 29,
    marginTop: 22,
    width: 302,
    height: 53,
  },
  textSentOn: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 15,
    color: "#000",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  divRowOfSquares: {
    marginTop: 14,
    flexDirection: "row",
  },
  textinput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  divVERIFYCODE: {
    marginTop: 34,
    marginLeft: 10,
    marginRight: 11,
    width: 339,
    height: 50,
    backgroundColor: "#E3C000",
    flexShrink: 0,
    justifyContent: "center",
  },
  textVERIFYCODE: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 18,
    color: "#000",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "normal",
  },
});
