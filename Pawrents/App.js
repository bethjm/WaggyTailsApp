import Welcome from "./screens/Welcome";
import AppGoal from "./screens/AppGoal";
import OpenBook from "./screens/OpenBook";
import CatOrDog from "./screens/CatOrDog";
import GatosQuestions from "./screens/GatosQuestions";
import PerrosQuestions from "./screens/PerrosQuestions";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="AppGoal" component={AppGoal} />
        <Stack.Screen name="OpenBook" component={OpenBook} />
        <Stack.Screen name="CatOrDog" component={CatOrDog} />
        <Stack.Screen name="GatosQuestions" component={GatosQuestions} />
        <Stack.Screen name="PerrosQuestions" component={PerrosQuestions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
