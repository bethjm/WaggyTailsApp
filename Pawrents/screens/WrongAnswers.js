import { View, Text, StyleSheet, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";

function WrongAnswers() {
  const navigation = useNavigation();
  const route = useRoute();

  let {
    wrongAnswer,
    correctAnswerScore,
    selectedAnswers,
    CatQuiz,
    DogQuiz,
    sourceQuiz,
  } = route.params;

  const backToResults = () => {
    navigation.navigate("ResultsPage", {
      correctAnswerScore: correctAnswerScore,
      selectedAnswers: selectedAnswers,
      CatQuiz: CatQuiz,
      DogQuiz: DogQuiz,
      sourceQuiz: sourceQuiz,
      wrongAnswer: wrongAnswer,
    });
  };

  console.log("wrong answer length- wrong answer page", wrongAnswer.length);

  const retakeQuiz = () => {
    correctAnswerScore = 0;
    wrongAnswer = [];
    selectedAnswers = [];
    navigation.navigate("CatOrDog");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Incorrectly Answered</Text>

      <FlatList
        data={wrongAnswer}
        renderItem={(itemData) => (
          <View style={styles.answerContainer}>
            <Text style={styles.answerText}>{itemData.item}</Text>
          </View>
        )}
        keyExtractor={(item) => item.toString()}
      />

      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={backToResults} style={styles.button}>
          Results Page
        </PrimaryButton>
        <PrimaryButton onPress={retakeQuiz} style={styles.button}>
          Retake Quiz
        </PrimaryButton>
      </View>
    </View>
  );
}

export default WrongAnswers;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 70,
    paddingHorizontal: 10,
    backgroundColor: Colors.darkPrimary,
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    width: "80%",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  answerContainer: {
    borderRadius: 30,
    backgroundColor: "#E0E0E0",
    textAlign: "auto",
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  answerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    justifyContent: "center",
  },
  button: {
    backgroundColor: Colors.mediumPrimary,
    borderRadius: 20,
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 20,
    textAlign: "center",
    marginHorizontal: 5,
  },
  borderTest: {
    borderRadius: 20,
  },
});
