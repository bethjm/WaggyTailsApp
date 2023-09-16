import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import PrimaryButton from "../components/ui/PrimaryButton";

const SeeResults = ({ route }) => {
  const navigation = useNavigation();

  const { quizResults, selectedAnswers, wrongAnswer, correctAnswerScore } =
    route.params;

  const goToResultsPage = () => {
    navigation.navigate("ResultsPage", {
      quizResults: selectedAnswers,
      wrongAnswer: wrongAnswer,
      correctAnswerScore: correctAnswerScore,
    });
  };

  console.log("wrong answer from see results", wrongAnswer);

  return (
    <ImageBackground
      source={require("../assets/images/End_Screen.png")}
      style={styles.container}
    >
      <View>
        <PrimaryButton onPress={goToResultsPage}>
          See your results
        </PrimaryButton>
      </View>
    </ImageBackground>
  );
};

export default SeeResults;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
