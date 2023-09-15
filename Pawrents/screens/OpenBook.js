import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";

function OpenBook() {
  const navigation = useNavigation();

  const goToScreenFour = () => {
    navigation.navigate("CatOrDog");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>THIS QUIZ IS OPEN BOOK</Text>
      <Text style={styles.content}>
        You may research the answers while taking the quiz or you can challenge
        yourself to see where your knowledge is at. The quiz is not timed.
      </Text>
      <PrimaryButton onPress={goToScreenFour}>Get Started</PrimaryButton>
    </View>
  );
}

export default OpenBook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 250,
    backgroundColor: Colors.lightPrimary,
    paddingHorizontal: 30,
  },
  title: {
    alignItems: "center",
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
});
