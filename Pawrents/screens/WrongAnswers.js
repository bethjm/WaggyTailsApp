import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import PrimaryButton from "../components/ui/PrimaryButton";

function WrongAnswers() {
  const navigation = useNavigation();

  const backToResults = () => {
    navigation.navigate("ResultsPage");
  };
  return (
    <View>
      <Text>Wrong answers</Text>
      <PrimaryButton onPress={backToResults}>
        Back to results page
      </PrimaryButton>
    </View>
  );
}

export default WrongAnswers;

const styles = StyleSheet.create({});
