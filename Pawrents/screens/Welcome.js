import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";

function Welcome() {
  const navigation = useNavigation();

  const goToSecondScreen = () => {
    navigation.navigate("AppGoal");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/waggy_logo.webp")}
      />
      <Text style={styles.content}>Welcome to the WaggyTail adopter quiz</Text>
      <PrimaryButton onPress={goToSecondScreen}>Next</PrimaryButton>
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 250,
    backgroundColor: Colors.lightPrimary,
  },
  image: {
    width: 200,
    height: 200,
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    marginVertical: 40,
    fontSize: 24,
    textAlign: "center",
    width: "80%",
    fontWeight: "bold",
  },
});
