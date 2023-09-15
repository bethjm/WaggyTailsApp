import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

import { StyleSheet, View, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";

function DogQuizScreen() {
  const navigation = useNavigation();

  const goToScreenWelcome = () => {
    navigation.navigate("Welcome");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>No Dog Questions. Sorry.</Text>
      <PrimaryButton style={styles.button} onPress={goToScreenWelcome}>
        Back to begining
      </PrimaryButton>
    </View>
  );
}

export default DogQuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 250,
    backgroundColor: Colors.lightPrimary,
    paddingHorizontal: 30,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    width: "100%",
    marginBottom: 30,
  },
});
