import { View, Text, StyleSheet, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";

function WrongAnswers() {
  const navigation = useNavigation();
  const route = useRoute();

  let { wrongAnswer, correctAnswerScore, selectedAnswers } = route.params;

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
    navigation.navigate("CatOrDog");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Incorrectly Answered</Text>
      <FlatList
        data={wrongAnswer}
        renderItem={(itemData) => (
          <Text style={styles.answerText}>{itemData.item}</Text>
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
  answerContainer: {},
  answerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "auto",
    backgroundColor: "#E0E0E0",
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    justifyContent: "space-between",
    width: "80%",
  },
  button: {
    backgroundColor: Colors.mediumPrimary,
    borderRadius: 20,
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 20,
    textAlign: "center",
  },
});
