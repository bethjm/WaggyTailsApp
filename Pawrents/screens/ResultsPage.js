import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import PrimaryButton from "../components/ui/PrimaryButton";
import DoubleButton from "../components/ui/DoubleButton";
import Colors from "../constants/Colors";

function ResultsPage() {
  const navigation = useNavigation();
  const route = useRoute();

  const { wrongAnswer, correctAnswerScore, selectedAnswers } = route.params;

  const seeWrongAnswers = ({}) => {
    navigation.navigate("WrongAnswers", {
      wrongAnswer,
      correctAnswerScore,
      selectedAnswers,
    });
  };

  const retakeQuiz = () => {
    navigation.navigate("CatOrDog");

    console.log("reset");
  };

  return (
    <ImageBackground
      source={require("../assets/images/highpaw-dark.png")}
      style={styles.container}
    >
      <Text style={styles.title}>
        you got {correctAnswerScore}/17 questions correct
      </Text>
      {wrongAnswer.length > 0 ? (
        <View style={styles.buttonContainer}>
          <DoubleButton onPress={seeWrongAnswers}>
            See incorrect answers
          </DoubleButton>
          <DoubleButton onPress={retakeQuiz}>Retake quiz</DoubleButton>
        </View>
      ) : (
        <PrimaryButton onPress={retakeQuiz}>Retake quiz</PrimaryButton>
      )}
    </ImageBackground>
  );
}

export default ResultsPage;

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
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {},
});
