import { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";

const Lecture13 = () => {
  const [name, setName] = useState("Raju");
  return (
    <View>
      <Text style={styles.txt}>Handle Text Input</Text>
      <Text style={styles.txt}>Your name is : {name}</Text>
      <TextInput
        placeholder="Enter Your Name"
        style={styles.txtinput}
        onChangeText={(text) => setName(text)}
      ></TextInput>
      <Button title="Clear Input Value" onPress={() => setName("")}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  txtinput: {
    padding: 8,
    borderWidth: 3,
    borderColor: "purple",
  },
  txt: {
    fontSize: 24,
  },
});

export default Lecture13;
