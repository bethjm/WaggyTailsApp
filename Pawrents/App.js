import { StyleSheet, Text, View } from "react-native";

import Welcome from "./screens/Welcome";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Pawrents!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#26BCDE",
    flex: 1,
    alignItems: "center",
    paddingTop: 200,
  },
});
