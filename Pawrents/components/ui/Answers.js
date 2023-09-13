import { Pressable, Text, StyleSheet } from "react-native";

const Answers = ({ answerText, onPress }) => {
  return (
    <Pressable style={styles.answerContainer} onPress={onPress}>
      <Text style={styles.answerText}>{answerText}</Text>
    </Pressable>
  );
};

export default Answers;

const styles = StyleSheet.create({
  answerContainer: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  answerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
