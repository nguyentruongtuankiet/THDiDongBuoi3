import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FirstScreen from "./FirstScreen.js";
import _1a from "./_1a.js";
import _1b from "./_1b.js";
import _1c from "./_1c.js";
import _1d from "./_1d.js";
import _2a from "./_2a.js";
import _1e from "./_1e.js";
import XMEye from "./XMEye.js";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false, // Tắt tiêu đề
  headerBackTitleVisible: false, // Tắt mũi tên điều hướng trở lại
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstScreen"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="_1a" component={_1a} />
        <Stack.Screen name="_1b" component={_1b} />
        <Stack.Screen name="_1c" component={_1c} />
        <Stack.Screen name="_1d" component={_1d} />
        <Stack.Screen name="_1e" component={_1e} />
        <Stack.Screen name="_2a" component={_2a} />
        <Stack.Screen name="XMEye" component={XMEye} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
