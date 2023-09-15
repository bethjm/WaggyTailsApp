import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AnimalButton from "../components/ui/AnimalButton";
import Colors from "../constants/Colors";

function CatOrDog() {
  const navigation = useNavigation();

  const goToCatQuizScreen = () => {
    navigation.navigate("CatQuizScreen");
  };

  const goToDogQuizScreen = () => {
    navigation.navigate("DogQuizScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What animal are you adopting?</Text>
      <View style={styles.buttonsContainer}>
        <AnimalButton
          imageSource={require("../assets/images/CatButton.png")}
          onPress={goToCatQuizScreen}
        />
        <AnimalButton
          imageSource={require("../assets/images/DogButton.png")}
          onPress={goToDogQuizScreen}
        />
      </View>
    </View>
  );
}

export default CatOrDog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 250,
    backgroundColor: Colors.lightPrimary,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 10,
    marginTop: 30,
  },
});
