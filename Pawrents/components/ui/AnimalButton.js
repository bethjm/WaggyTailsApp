import { View, Text, StyleSheet, Image, Pressable } from "react-native";

import Colors from "../../constants/Colors";

function AnimalButton({ children, onPress, imageSource }) {
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
        <Image source={imageSource} style={styles.image} />
        {/* <Text style={styles.content}>{children}</Text> */}
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
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  content: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    marginTop: 10,
  },
  pressed: {
    opacity: 0.75,
  },
  image: {
    height: 110,
    width: 110,
  },
});
