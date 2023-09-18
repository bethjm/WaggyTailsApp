import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";

function AppGoal() {
  const navigation = useNavigation();

  const goToScreenThree = () => {
    navigation.navigate("OpenBook");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>THE GOAL OF THIS QUIZ</Text>
      <Text style={styles.content}>
        This quiz was created to ensure that perspective paw-rents know all the
        essential information for keeping furry friends happy and healthy before
        bringing them home.
      </Text>
      <PrimaryButton style={styles.button} onPress={goToScreenThree}>
        Next
      </PrimaryButton>
    </View>
  );
}

export default AppGoal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.lightPrimary,
    paddingHorizontal: 30,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    width: "100%",
    textDecorationLine: "underline",
  },
  content: {
    alignItems: "center",
    marginVertical: 40,
    fontSize: 24,
    textAlign: "center",
  },
  button: {
    backgroundColor: Colors.darkPrimary,
    borderRadius: 20,
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 20,
    textAlign: "center",
  },
});
