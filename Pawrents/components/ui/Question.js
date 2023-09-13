import { StyleSheet, Text, View } from "react-native";
function Question({ questionText, questionAnswer }) {
  return (
    <View>
      <Text>{questionText}</Text>
    </View>
  );
}

export default Question;

const styles = StyleSheet.create({});
