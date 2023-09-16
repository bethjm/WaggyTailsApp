import { View, Text, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import PrimaryButton from "../components/ui/PrimaryButton";

function WrongAnswers() {
  const navigation = useNavigation();
  const route = useRoute();

  const { wrongAnswer, correctAnswerScore } = route.params;

  const backToResults = () => {
    navigation.navigate("ResultsPage", {
      correctAnswerScore: correctAnswerScore,
      wrongAnswer: wrongAnswer,
    });
  };

  const goToHome = () => {
    navigation.navigate("CatQuizScreen");
  };

  //write code to reset answers when button pressed

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

      <PrimaryButton onPress={backToResults}>
        Back to results page
      </PrimaryButton>
      <PrimaryButton onPress={goToHome}>Retake quiz</PrimaryButton>
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
});
