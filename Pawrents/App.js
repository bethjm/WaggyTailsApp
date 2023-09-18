import Welcome from "./screens/Welcome";
import AppGoal from "./screens/AppGoal";
import OpenBook from "./screens/OpenBook";
import CatOrDog from "./screens/CatOrDog";
import CatQuizScreen from "./screens/CatQuizScreen";
import DogQuizScreen from "./screens/DogQuizScreen";
import SeeResults from "./screens/SeeResults";
import ResultsPage from "./screens/ResultsPage";
import WrongAnswers from "./screens/WrongAnswers";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

const Stack = createStackNavigator();

function App() {
  return (
    <View style={styles.container}>
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
          <Stack.Screen name="SeeResults" component={SeeResults} />
          <Stack.Screen name="ResultsPage" component={ResultsPage} />
          <Stack.Screen name="WrongAnswers" component={WrongAnswers} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
