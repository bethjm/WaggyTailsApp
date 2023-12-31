import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";

function ResultsPage() {
  const navigation = useNavigation();
  const route = useRoute();

  let {
    wrongAnswer: wrongAnswer,
    correctAnswerScore: correctAnswerScore,
    selectedAnswers: selectedAnswers,
    CatQuiz: CatQuiz,
    DogQuiz: DogQuiz,
    sourceQuiz: sourceQuiz,
  } = route.params;

  const seeWrongAnswers = () => {
    navigation.navigate("Review", {
      correctAnswerScore: correctAnswerScore,
      selectedAnswers: selectedAnswers,
      CatQuiz: CatQuiz,
      DogQuiz: DogQuiz,
      sourceQuiz: sourceQuiz,
      wrongAnswer: wrongAnswer,
    });
  };

  const retakeQuiz = () => {
    navigation.navigate("Choose");
  };

  console.log("wrong answer length- results page", wrongAnswer.length);

  return (
    <ImageBackground
      source={require("../assets/images/highpaw-dark.png")}
      style={styles.container}
    >
      <Text style={styles.title}>
        You got {correctAnswerScore}/
        {sourceQuiz === "Cat" ? CatQuiz.length : DogQuiz.length} questions
        correct
      </Text>
      {wrongAnswer.length > 0 ? (
        <View style={styles.buttonContainer}>
          <PrimaryButton style={styles.button} onPress={seeWrongAnswers}>
            Incorrect Answers
          </PrimaryButton>
          <PrimaryButton style={styles.button} onPress={retakeQuiz}>
            Retake the quiz
          </PrimaryButton>
        </View>
      ) : (
        <PrimaryButton style={styles.button} onPress={retakeQuiz}>
          Retake the quiz
        </PrimaryButton>
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
    flexDirection: "column",
    paddingVertical: 20,
    width: "70%",
  },
  button: {
    backgroundColor: Colors.mediumPrimary,
    borderRadius: 30,
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 10,
    textAlign: "center",
    marginVertical: 10,
  },
});
