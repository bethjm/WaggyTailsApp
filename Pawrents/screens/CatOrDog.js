import { View, Text } from "react-native";

import AnimalButton from "../components/ui/AnimalButton";

function CatOrDog() {
  return (
    <View style={styles.container}>
      <Text>What animal are you adopting?</Text>
      <AnimalButton>
        Cat
        <Image source={require("../assets/images/Cat.png")} />
      </AnimalButton>
      <AnimalButton>
        Dog
        <Image source={require("../assets/images/Dog.png")} />
      </AnimalButton>
    </View>
  );
}

export default CatOrDog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: row,
  },
});
