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
export default function _1e() {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Điều hướng sang trang _1c.js khi ấn nút "LOGIN"
    navigation.navigate("_2a");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.divREGISTER}>
          <Text style={styles.textREGISTER}>REGISTER</Text>
        </View>
        <View style={styles.divName}>
          <TextInput style={styles.textinputName} placeholder="Name" />
        </View>
        <View style={styles.divPhone}>
          <TextInput style={styles.textinputPhone} placeholder="Phone" />
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
        <View style={styles.divBirthday}>
          <TextInput style={styles.textinputBirthday} placeholder="Birthday" />
        </View>
      </View>
      <View style={styles.divinputRadio}>
        <View style={styles.Radio}></View>
        <Text>Male</Text>
        <View style={styles.Radio}></View>
        <Text>Female</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity onPress={handleLogin}>
          <View style={styles.divREGISTERNext}>
            <Text style={styles.textREGISTERNext}>REGISTER</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.textAgree}>
          When you agree to terms and conditions
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#D8EFDF",
  },
  body: {
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#D8EFDF",
  },
  container: {
    flex: 1,
    backgroundColor: "#D8EFDF",
  },
  divREGISTER: {
    marginTop: 40,
    width: 150,
    height: 40,
    // backgroundColor: "#31AA52",
  },
  textREGISTER: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 25,
    color: "#000",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  divName: {
    marginTop: 25,
    width: 330,
    height: 54,
    backgroundColor: "#CAE1D1",
    justifyContent: "center",
  },
  textinputName: {
    marginLeft: 10,
    fontSize: 18,
  },
  divPhone: {
    marginTop: 20,
    width: 330,
    height: 54,
    backgroundColor: "#CAE1D1",
    justifyContent: "center",
  },
  textinputPhone: {
    marginLeft: 10,
    fontSize: 18,
  },
  divEmail: {
    marginTop: 20,
    width: 330,
    height: 54,
    backgroundColor: "#CAE1D1",
    justifyContent: "center",
  },
  textinputEmail: {
    marginLeft: 10,
    fontSize: 18,
  },
  image: {
    width: 35,
    height: 35,
    marginVertical: 10,
    marginRight: 20,
  },
  divPass: {
    marginTop: 20,
    width: 330,
    height: 54,
    backgroundColor: "#CAE1D1",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  textinputPass: {
    marginLeft: 10,
    fontSize: 18,
  },
  divBirthday: {
    marginTop: 20,
    width: 330,
    height: 54,
    backgroundColor: "#CAE1D1",
    justifyContent: "center",
  },
  textinputBirthday: {
    marginLeft: 10,
    fontSize: 18,
  },
  divinputRadio: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginLeft: 20,
    alignItems: "center",
  },
  Radio: {
    width: 23,
    height: 23,
    borderRadius: 100,
    backgroundColor: "#D8EFDF",
    color: "#000",
    borderWidth: 3,
    margin: 15,
    marginLeft: 30,
  },
  divREGISTERNext: {
    marginTop: 8,
    width: 330,
    height: 54,
    backgroundColor: "#C34E3B",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  textREGISTERNext: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 23,
    color: "#fff",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  textAgree: {
    marginTop: 15,
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 14,
    color: "#000",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "normal",
  },
});
