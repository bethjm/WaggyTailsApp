import { View, Text, StyleSheet, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";

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
      <Text style={styles.title}>Incorrectly Answered</Text>
      <View style={styles.answerContainer}>
        <FlatList
          data={wrongAnswer}
          renderItem={(itemData) => (
            <Text style={styles.answerText}>{itemData.item}</Text>
          )}
          keyExtractor={(item) => item.toString()}
        />
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
    flexDirection: "column",
  },
});
