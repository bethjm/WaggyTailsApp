import { View, Text, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import PrimaryButton from "../components/ui/PrimaryButton";

function ResultsPage() {
  const navigation = useNavigation();
  const route = useRoute();

  const { wrongAnswer, correctAnswerScore } = route.params;

  const seeWrongAnswers = ({}) => {
    navigation.navigate("WrongAnswers", { wrongAnswer, correctAnswerScore });
  };

  return (
    <View>
      <Text>you got {correctAnswerScore}/17 correct</Text>
      {wrongAnswer.length > 0 ? (
        <PrimaryButton onPress={seeWrongAnswers}>
          See incorrect answers
        </PrimaryButton>
      ) : null}
    </View>
  );
}

export default ResultsPage;

const styles = StyleSheet.create({});
