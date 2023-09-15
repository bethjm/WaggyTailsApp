import { View, Text, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import PrimaryButton from "../components/ui/PrimaryButton";

function ResultsPage() {
  const navigation = useNavigation();
  const route = useRoute();

  const { quizResults, wrongAnswer, correctAnswerScore } = route.params;

  console.log("WRONG ANSWER", wrongAnswer);
  console.log("correct", correctAnswerScore);

  //write code and create a button to bring you to a page that sows you the answers you got wrong
  const seeWrongAnswers = ({}) => {
    navigation.navigate("WrongAnswers", { wrongAnswer });
  };

  // console.log(quizResults);

  //write code to calcuate the score
  //map through the object of responses
  //for each questions compare the user answer to the correct answer
  //if correct, add a point to the result
  //else if incorrect, add the question to the "wrong answers" page

  //write code to show incorrect answers button only IF there are incorrect answers

  return (
    <View>
      <Text>you got {correctAnswerScore}/17 correct</Text>
      {/* {wrongAnswer.length > 0 ? (
        <PrimaryButton onPress={seeWrongAnswers}>
          See incorrect answers
        </PrimaryButton>
      ) : null} */}
    </View>
  );
}

export default ResultsPage;

const styles = StyleSheet.create({});
