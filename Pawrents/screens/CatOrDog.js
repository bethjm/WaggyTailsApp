import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AnimalButton from "../components/ui/AnimalButton";

function CatOrDog() {
  const navigation = useNavigation();

  const goToGatosQuestions = () => {
    navigation.navigate("GatosQuestions");
  };

  const goToPerrosQuestions = () => {
    navigation.navigate("PerrosQuestions");
  };

  return (
    <View style={styles.container}>
      <Text>What animal are you adopting?</Text>
      <View style={styles.buttonsContainer}>
        <AnimalButton onPress={goToGatosQuestions}>
          Cat
          {/* <Image source={require("../assets/images/Cat.png")} /> */}
        </AnimalButton>

        {/* <Image source={require("../assets/images/Dog.png")} /> */}
        <AnimalButton onPress={goToPerrosQuestions}>Dog</AnimalButton>
      </View>
    </View>
  );
}

export default CatOrDog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 10,
  },
});
