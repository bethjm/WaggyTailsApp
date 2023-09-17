import { View, Text, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import PrimaryButton from "../components/ui/PrimaryButton";

function WrongAnswers() {
  const navigation = useNavigation();
  const route = useRoute();

  const { wrongAnswer, correctAnswerScore, selectedAnswers } = route.params;

  const backToResults = () => {
    navigation.navigate("ResultsPage", {
      correctAnswerScore: correctAnswerScore,
      wrongAnswer: wrongAnswer,
      selectedAnswers,
    });
  };

  const retakeQuiz = () => {
    correctAnswerScore = 0;
    wrongAnswer = [];
    selectedAnswers = [];
    console.log("reset quiz", correctAnswerScore, wrongAnswer, selectedAnswers);
    navigation.navigate("CatOrDog");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Questions answered incorrectly</Text>
      <View style={styles.answerContainer}>
        {wrongAnswer.map((answer) => (
          <Text key={answer} style={styles.answerText}>
            {answer}
          </Text>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={backToResults}>
          Back to results page
        </PrimaryButton>
        <PrimaryButton onPress={retakeQuiz}>Retake quiz</PrimaryButton>
      </View>
    </View>
  );
}

export default WrongAnswers;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 70,
    paddingHorizontal: 0,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  answerContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    marginVertical: 20,
    marginHorizontal: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  answerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "auto",
  },
  buttonContainer: {
    flexDirection: "column",
  },
});
