import React from "react";

import { Text, View, StyleSheet } from "react-native";

const Lecture12 = () => {
  return (
    <View>
      <Text style={styles.textBox}>Styles in react Native</Text>
      <Text style={styles.textBox}>Styles in react Native</Text>
      <Text style={[styles.textBox, styles.bg, { borderWidth: 3 }]}>
        Styles in react Native
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    color: "black",
    backgroundColor: "blue",

    borderColor: "green",
    height: 10,
    borderRadius: 10,
    textAlignVertical: "center",
    textAlign: "center",
    padding: 19,
    margin: 5,
  },
  bg: {
    backgroundColor: "pink",
  },
});

export default Lecture12;
