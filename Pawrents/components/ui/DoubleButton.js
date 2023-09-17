import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/Colors";

function DoubleButton({ children, onPress }) {
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

const styles = StyleSheet.create({
  outterContainer: {
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 50,
    flex: 1,
  },
  innerContainer: {
    backgroundColor: Colors.mediumPrimary,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
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
  pressed: {
    opacity: 0.75,
  },
});

export default DoubleButton;
