import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";

const SeeResults = ({ route }) => {
  const navigation = useNavigation();

  const { selectedAnswers, wrongAnswer, correctAnswerScore } = route.params;

  const goToResultsPage = () => {
    navigation.navigate("ResultsPage", {
      quizResults: selectedAnswers,
      wrongAnswer: wrongAnswer,
      correctAnswerScore: correctAnswerScore,
    });
  };

  return (
    <ImageBackground
      source={require("../assets/images/dogcatpaw-dark.png")}
      style={styles.container}
    >
      <View>
        <Text style={styles.title}>Congrats! You've finished the quiz!</Text>
        <PrimaryButton style={styles.button} onPress={goToResultsPage}>
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
    alignItems: "center",
    paddingTop: 250,
    backgroundColor: Colors.lightPrimary,
    paddingHorizontal: 50,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 50,
  },
  button: {
    backgroundColor: Colors.mediumPrimary,
    borderRadius: 20,
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 10,
    textAlign: "center",
    justifyContent: "center",
  },
});
