import { Pressable, Text, StyleSheet } from "react-native";

const Answers = ({ answerText, onPress }) => {
  const handleAnswerSelect = () => {
    onPress(answerText);
  };

  return (
    <Pressable style={styles.answerContainer} onPress={handleAnswerSelect}>
      <Text style={styles.answerText}>{answerText}</Text>
    </Pressable>
  );
};

export default Answers;

const styles = StyleSheet.create({
  answerContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    marginVertical: 20,
    marginHorizontal: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  answerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "auto",
  },
});
