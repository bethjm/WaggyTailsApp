import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function PrimaryButton({ children }) {
  return (
    <View style={styles.container}>
      <Text>{children}</Text>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkPrimary,
    width: 100,
    height: 30,
    borderRadius: 20,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
