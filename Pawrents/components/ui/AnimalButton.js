import { View, Text, StyleSheet, Image, Pressable } from "react-native";

import Colors from "../../constants/Colors";

function AnimalButton({ children, onPress }) {
  return (
    <View style={styles.outterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        android_ripple={{ color: "#26BCDE" }}
        onPress={onPress}
      >
        <Text style={styles.content}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default AnimalButton;

const styles = StyleSheet.create({
  outterContainer: {
    borderRadius: 20,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: Colors.darkPrimary,
    paddingTop: 70,
    paddingBottom: 70,
    paddingHorizontal: 70,
    borderRadius: 40,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  content: {
    color: "white",
    alignItems: "center",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.75,
  },
});
