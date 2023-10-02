import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
export default function FirstScreen() {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Điều hướng sang trang _1c.js khi ấn nút "LOGIN"
    navigation.navigate("_1c");
  };
  return (
    <LinearGradient
      colors={["#C7F4F7", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
      start={{ x: 0.5, y: 0.0 }}
      end={{ x: 0.5, y: 1.0 }}
      style={styles.container}
    >
      <View style={styles.style1}>
        <Image
          source={require("file:///D:/Ch%C6%B0%C6%A1ng%20Tr%C3%ACnh%20H%E1%BB%8Dc/N%C4%83m%204/L%E1%BA%ADp%20tr%C3%ACnh%20di%20%C4%91%E1%BB%99ng/ReactNative/Shopee/Image/okhoa.svg")} // Thay đổi đường dẫn đến hình ảnh tương ứng
          style={{ width: 105, height: 117 }}
        />
      </View>
      <View style={styles.style2}>
        <Text style={styles.text}>FORGET PASSWORD</Text>
      </View>
      <View style={styles.style3}>
        <Text style={styles.text1}>
          Provide your account’s email for which you want to reset your password
        </Text>
      </View>
      <View style={styles.divinput}>
        <Image
          source={require("file:///D:/Ch%C6%B0%C6%A1ng%20Tr%C3%ACnh%20H%E1%BB%8Dc/N%C4%83m%204/L%E1%BA%ADp%20tr%C3%ACnh%20di%20%C4%91%E1%BB%99ng/ReactNative/Shopee/Image/iconMail.svg")} // Thay đổi đường dẫn đến hình ảnh tương ứng
          style={{ width: 48, height: 45 }}
        />
        <TextInput style={styles.textinput} placeholder="Email" />
      </View>
      <TouchableOpacity onPress={handleLogin}>
        <View style={styles.divNext}>
          <Text style={styles.textNext}>NEXT</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start", // Để căn giữa theo chiều dọc
  },
  style1: {
    width: 105,
    height: 117,
    marginTop: 76,
    borderRadius: 100,
    marginLeft: 128,
    marginRight: 127,
  },
  style2: {
    marginTop: 37,
    marginLeft: 113,
    marginRight: 114,
    width: 189,
    height: 58,
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    color: "#000",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  style3: {
    marginTop: 32,
    marginLeft: 30,
    marginRight: 28,
    width: 302,
    height: 53,
  },
  text1: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 15,
    color: "#000",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 20,
  },
  divinput: {
    flexDirection: "row",
    backgroundColor: "#C4C4C4",
    height: 45,
    width: 305,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 25,
  },
  textinput: {
    marginTop: 13,
    marginBottom: 14,
    fontFamily: "Roboto",
    fontSize: 15,
    color: "#000",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  divNext: {
    backgroundColor: "#E3C000",
    height: 45,
    width: 305,
    marginTop: 43,
    marginLeft: 30,
    marginRight: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  textNext: {
    fontFamily: "Roboto",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  },
});
