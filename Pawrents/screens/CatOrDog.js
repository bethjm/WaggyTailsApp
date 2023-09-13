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
        <AnimalButton
          imageSource={require("../assets/images/CatButton.png")}
          onPress={goToGatosQuestions}
        />
        <AnimalButton
          imageSource={require("../assets/images/DogButton.png")}
          onPress={goToPerrosQuestions}
        />
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
