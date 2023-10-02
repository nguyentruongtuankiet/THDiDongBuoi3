import React from "react";
import { View, Text, StyleSheet, Button, TextInput, Image,TouchableOpacity } from "react-native";

export default function XMEye() {
  return (
    <View style={styles.container}>
      <View style={styles.divimage}>
        <Image style={styles.image} source={require("./assets/ege.png")} />
      </View>
      <View style={styles.divUser}>
        <Image
          style={styles.imageUser}
          source={require("./assets/userXME.png")}
        />
        <TextInput
          style={styles.textinputUser}
          placeholder="Please input user name"
        />
      </View>
      <View style={styles.divPass}>
        <Image
          style={styles.imagePass}
          source={require("./assets/iconKhoaXME.png")}
        />
        <TextInput
          style={styles.textinputPass}
          placeholder="Please input password"
        />
      </View>
      <View style={styles.divLOGIN}>
        <Text style={styles.textLOGIN}>LOGIN</Text>
      </View>
      <View style={styles.divOption}>
        <Text style={styles.textOption}>Register</Text>
        <Text style={styles.textOption}>Forgot Password</Text>
      </View>
      <View style={styles.divOTherLogin}>
        <View style={styles.line}></View>
        <Text style={styles.textOrLogin}>Other Login Methods</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.divOptionLogin}>
        <View style={styles.divUsser}>
          <Image
            style={styles.imageUserPlus}
            source={require("./assets/User+.png")}
          />
        </View>
        <View style={styles.divWifi}>
          <Image
            style={styles.imageWifi}
            source={require("./assets/Wifi.png")}
          />
        </View>
        <View style={styles.dicFace}>
          <Image
            style={styles.imageFace}
            source={require("./assets/FaceXME.png")}
          />
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
    backgroundColor: "#FFF",
  },
  divimage: {
    marginTop: 50,
    marginLeft: 124,
    marginRight: 124,
    width: 113,
    height: 108,
  },
  image: {
    width: 113,
    height: 108,
  },
  divUser: {
    marginTop: 31,
    marginLeft: 30,
    marginRight: 30,
    width: 300,
    height: 44,
    borderBottomWidth: 1, // Độ rộng của viền dưới
    borderColor: "#C4C4C4", // Màu của viền dưới
    flexDirection: "row",
    alignItems: "center",
  },
  imageUser: {
    width: 30,
    height: 30,
  },
  textinputUser: {
    // width: 250,
    // height: 44,
    fontSize: 18,
    color: "#C4C4C4",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "normal",
    marginLeft: 15,
  },
  divPass: {
    marginTop: 35,
    marginLeft: 30,
    marginRight: 30,
    width: 300,
    height: 44,
    borderBottomWidth: 1, // Độ rộng của viền dưới
    borderColor: "#C4C4C4", // Màu của viền dưới
    flexDirection: "row",
    alignItems: "center",
  },
  imagePass: {
    width: 30,
    height: 30,
  },
  textinputPass: {
    // width: 250,
    // height: 44,
    fontSize: 18,
    color: "#C4C4C4",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "normal",
    marginLeft: 15,
  },
  divLOGIN: {
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
    width: 300,
    height: 48,
    backgroundColor: "#386FFC",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textLOGIN: {
    textAlign: "center",
    fontSize: 18,
    color: "#FFF",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  divOption: {
    marginTop: 20,
    marginLeft: 31,
    marginRight: 29,
    width: 300,
    height: 23,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textOption: {
    fontSize: 18,
    fontFamily: "Arial",
    color: "#000",
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  divOTherLogin: {
    marginTop: 38,
    // marginLeft: 30,
    // marginRight: 30,
    width: 300,
    height: 22,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    width: 62,
    height: 1,
    backgroundColor: "#0E18F5",
  },
  textOrLogin: {
    marginRight: 10,
    marginHorizontal: 5,
    fontSize: 17,
    fontFamily: "Arial",
    color: "#000",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  divOptionLogin: {
    marginTop: 29,
    width: 300,
    height: 75,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  divUsser: {
    height: 74,
    width: 74,
    backgroundColor: "#3AB4FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  divWifi: {
    height: 74,
    width: 74,
    backgroundColor: "#F4AA47",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  dicFace: {
    height: 74,
    width: 74,
    backgroundColor: "#3A579C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  imageUserPlus: {
    width: 68,
    height: 68,
  },
  imageWifi: {
    width: 68,
    height: 68,
  },
  imageFace: {
    width: 68,
    height: 68,
  },
});
