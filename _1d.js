import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function _1c() {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Điều hướng sang trang _1c.js khi ấn nút "LOGIN"
    navigation.navigate("_1e");
  };
  return (
    <View style={styles.container}>
      <View style={styles.divLOGIN}>
        <Text style={styles.textLOGIN}>LOGIN</Text>
      </View>
      <View style={styles.divEmail}>
        <TextInput style={styles.textinputEmail} placeholder="Email" />
      </View>
      <View style={styles.divPass}>
        <TextInput style={styles.textinputPass} placeholder="Password" />
        <Image
          style={styles.image}
          source={require("./Image/see.svg")} // Thay đổi đường dẫn đến hình ảnh tương ứng
        />
      </View>
      <TouchableOpacity onPress={handleLogin}>
        <View style={styles.divLOGINNEXT}>
          <Text style={styles.textLOGINNEXT}>LOGIN</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.textAgree}>
        When you agree to terms and conditions
      </Text>
      <Text style={styles.textForGot}>For got your password?</Text>
      <Text style={styles.textOrLogin}>Or login with</Text>
      <View style={styles.divOptionLogin}>
        <View style={styles.divFacebook}>
          <Image
            style={styles.imageFace}
            source={require("./assets/face.png")}
          />
        </View>
        <View style={styles.divZ}>
          <Image style={styles.Z} source={require("./assets/z.png")} />
        </View>
        <View style={styles.divGG}>
          <Image style={styles.imageGG} source={require("./assets/gg.png")} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#D8EFDF",
  },
  divLOGIN: {
    marginTop: 40,
    marginLeft: 102,
    marginRight: 102,
    width: 110,
    height: 40,
    // backgroundColor: "#31AA52",
  },
  textLOGIN: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 25,
    color: "#000",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  divEmail: {
    marginTop: 50,
    width: 330,
    height: 54,
    backgroundColor: "#CAE1D1",
    justifyContent: "center",
  },
  textinputEmail: {
    marginLeft: 20,
    fontSize: 18,
  },
  image: {
    width: 35,
    height: 35,
    marginVertical: 10,
    marginRight: 20,
  },
  divPass: {
    marginTop: 35,
    width: 330,
    height: 54,
    backgroundColor: "#CAE1D1",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  textinputPass: {
    marginLeft: 20,
    fontSize: 18,
  },
  divLOGINNEXT: {
    marginTop: 80,
    width: 330,
    height: 45,
    backgroundColor: "#C34E3B",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  textLOGINNEXT: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 20,
    color: "#fff",
    fontWeight: "200",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  textAgree: {
    marginTop: 13,
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 14,
    color: "#000",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "normal",
    width: 260,
    height: 20,
  },
  textForGot: {
    marginTop: 13,
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 14,
    color: "#5D25FA",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "normal",
    width: 260,
    height: 20,
  },
  textOrLogin: {
    marginTop: 14,
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 14,
    color: "#000",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "normal",
    width: 260,
    height: 20,
  },
  divOptionLogin: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 330,
    height: 50,
  },
  divFacebook: {
    backgroundColor: "#275A8E",
    height: 50,
    width: 110,
    alignItems: "center",
    borderRadius: 2,
    justifyContent: "center",
  },
  divGG: {
    backgroundColor: "#D8EFDF",
    height: 50,
    width: 110,
    alignItems: "center",
    borderRadius: 2,
    justifyContent: "center",
    borderColor: "#1593C6",
    borderWidth: 1,
  },
  divZ: {
    backgroundColor: "#1593C6",
    height: 50,
    width: 110,
    alignItems: "center",
    borderRadius: 2,
    justifyContent: "center",
  },
  imageGG: {
    width: 40,
    height: 40,
  },
  imageFace: {
    width: 40,
    height: 40,
  },
  Z: {
    width: 40,
    height: 40,
  },
});
