import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import PrimaryButton from "../components/ui/PrimaryButton";

function OpenBook() {
  const navigation = useNavigation();

  const goToScreenFour = () => {
    navigation.navigate("CatOrDog");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This quiz is open book.</Text>
      <Text stle={styles.content}>
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
  },
  title: {
    alignItems: "center",
    fontSize: 30,
  },
  content: {
    alignItems: "center",
    fontSize: 24,
    paddingTop: 20,
  },
});
