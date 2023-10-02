import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function FirstScreen() {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Điều hướng sang trang _1c.js khi ấn nút "LOGIN"
    navigation.navigate("_1a");
  };
  return (
    <LinearGradient
      colors={["#00CCF9", "#00CCF9"]}
      start={{ x: 0.5, y: 0.0 }}
      end={{ x: 0.5, y: 1.0 }}
      style={styles.container}
    >
      <View style={styles.style1}></View>
      <View style={styles.style2}>
        <Text style={styles.text}>GROW{"\n"}YOUR BUSINESS</Text>
      </View>
      <View style={styles.style3}>
        <Text style={styles.text1}>
          We will help you grow your business using online services
        </Text>
      </View>
      <View style={styles.style4}>
        <TouchableOpacity onPress={handleLogin}>
          <View style={styles.btnLG}>
            <Text style={styles.textLG}>LOGIN</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.btnSU}>
          <Text style={styles.textSU}>SIGN UP</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center", // Để căn giữa theo chiều dọc
  },
  style1: {
    backgroundColor: "rgba(196, 196, 196, 0.00)",
    borderWidth: 15,
    borderColor: "#000",
    width: 140,
    height: 140,
    flexShrink: 0,
    marginTop: 105,
    borderRadius: 100,
    marginLeft: 110,
    marginRight: 110,
  },
  style2: {
    marginTop: 52,
    marginLeft: 86,
    marginRight: 85,
    width: 189,
    height: 58,
  },
  text: {
    textAlign: "center",
    fontSize: 23,
    color: "#000",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 30,
  },
  style3: {
    marginTop: 62,
    marginLeft: 29,
    marginRight: 29,
    width: 302,
    height: 36,
  },
  text1: {
    textAlign: "center",
    fontSize: 15,
    color: "#000",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 20,
  },
  style4: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: 302, // Điều chỉnh theo nhu cầu
    marginBottom: 45, // Để căn giữa theo chiều dọc
  },
  btnLG: {
    width: 119,
    height: 48,
    borderRadius: 10,
    backgroundColor: "#E3C000",
    justifyContent: "center",
  },
  btnSU: {
    width: 119,
    height: 48,
    borderRadius: 10,
    backgroundColor: "#E3C000",
    justifyContent: "center",
  },
  textSU: {
    textAlign: "center",
    fontSize: 20,
    color: "#000",
    fontWeight: "700",
  },
  textLG: {
    textAlign: "center",
    fontSize: 20,
    color: "#000",
    fontWeight: "700",
  },
});
