import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function PrimaryButton({ children }) {
  return (
    <View style={styles.outterContainer}>
      <View style={styles.container}>
        <Text style={styles.content}>{children}</Text>
      </View>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  outterContainer: {
    borderRadius: 20,
    overflow: "hidden",
  },
  container: {
    backgroundColor: Colors.darkPrimary,
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 50,
    elevation: 9,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  content: {
    color: "white",
    alignItems: "center",
    fontSize: 18,
  },
});
