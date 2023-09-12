import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";

function Welcome() {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/images/waggy_logo.webp")}
      />
      <View>
        <Text>Welcome to the WaggyTail adopter quiz</Text>
      </View>

      <PrimaryButton>Next</PrimaryButton>
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    alignItems: "center",
    paddingTop: 200,
  },
  content: {
    alignItems: "center",
    paddingTop: 30,
    fontSize: 24,
  },
});
