import Welcome from "./screens/Welcome";
import AppGoal from "./screens/AppGoal";
import OpenBook from "./screens/OpenBook";
import CatOrDog from "./screens/CatOrDog";
import CatQuizScreen from "./screens/CatQuizScreen";
import DogQuizScreen from "./screens/DogQuizScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

const Stack = createStackNavigator();

function App() {
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const updateSelectedAnswers = (selectedAnswer) => {
    setSelectedAnswers([...selectedAnswers, selectedAnswer]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="AppGoal" component={AppGoal} />
          <Stack.Screen name="OpenBook" component={OpenBook} />
          <Stack.Screen name="CatOrDog" component={CatOrDog} />
          <Stack.Screen name="CatQuizScreen" component={CatQuizScreen} />
          <Stack.Screen name="DogQuizScreen" component={DogQuizScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
