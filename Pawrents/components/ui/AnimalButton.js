import { View, Text } from "react-native";

import Colors from ".../constants/Colors";

function AnimalButton({ children }) {
  return (
    <View style={styles.container}>
      <Text>{children}</Text>
    </View>
  );
}

export default AnimalButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkPrimary,
    width: 200,
    height: 200,
    borderRadius: 40,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
