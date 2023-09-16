import { View, Text, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import PrimaryButton from "../components/ui/PrimaryButton";

function WrongAnswers() {
  const navigation = useNavigation();
  const route = useRoute();

  const { wrongAnswer } = route.params;

  const backToResults = () => {
    navigation.navigate("ResultsPage");
  };

  console.log("wrongAnswer from wrong answers page", wrongAnswer);
  return (
    <View>
      <Text>Wrong answers</Text>
      <View>
        {wrongAnswer.map((answer) => {
          <Text>{answer}</Text>;
        })}
      </View>

      <PrimaryButton onPress={backToResults}>
        Back to results page
      </PrimaryButton>
    </View>
  );
}

export default WrongAnswers;

const styles = StyleSheet.create({});
