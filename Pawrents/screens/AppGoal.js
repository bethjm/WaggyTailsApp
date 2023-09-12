import { View, Text } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";

function AppGoal() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The goal of this quiz is...</Text>
      <Text stle={styles.content}>
        to ensure that perspective paw-rents know all the essential information
        before bringing a new furry friend home.
      </Text>
      <PrimaryButton>Next</PrimaryButton>
    </View>
  );
}

export default AppGoal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    alignItems: "center",
    fontSize: 30,
  },
  content: {
    alignItems: "center",
    fontSize: 24,
    paddingTop: 20,
  },
});
