import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/Colors";

function PrimaryButton({ children, onPress, style }) {
  return (
    <View style={styles.outterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        onPress={onPress}
      >
        <Text style={[styles.content, style]}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outterContainer: {
    overflow: "hidden",
  },
  innerContainer: {},
  content: {
    color: "white",
    alignItems: "center",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
