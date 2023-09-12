import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";

function Welcome() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/waggy_logo.webp")}
      />
      <Text style={styles.content}>Welcome to the WaggyTail adopter quiz</Text>
      <PrimaryButton>Next</PrimaryButton>
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 300,
    backgroundColor: Colors.lightPrimary,
  },
  image: {
    width: 200,
    height: 200,
    alignItems: "center",
    paddingTop: 200,
  },
  content: {
    alignItems: "center",
    marginVertical: 40,
    fontSize: 24,
    textAlign: "center",
    width: "80%",
  },
});
