import { useState } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

const HomeScreen = () => {
  const [show, setShow] = useState(false);

  return (
    <View style={{ marginTop: 50, padding: 20 }}>
      {/* TouchableHighlight with style and underlayColor */}
      <TouchableHighlight
        onPress={() => alert("Button1 Pressed")}
        underlayColor="purple"
        style={styles.btn1}
      >
        <Text style={styles.btnText}>Click Button1</Text>
      </TouchableHighlight>

      {/* TouchableOpacity for loader */}
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.btn1, styles.btn2]}
        onPress={() => {
          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, 3000);
        }}
      >
        <Text style={styles.btnText}>Show Loader</Text>
      </TouchableOpacity>

      {/* Loader appears only when show === true */}
      {/* <ActivityIndicator
        style={{ marginTop: 20 }}
        size="large"
        color="blue"
        animating={show}
      /> */}
      {show && (
        <ActivityIndicator
          style={{ marginTop: 20 }}
          size="large"
          color="blue"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  btn1: {
    backgroundColor: "blue",
    borderWidth: 3,
    borderColor: "pink",
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: "center",
  },
  btn2: {
    backgroundColor: "green",
    borderColor: "yellow",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default HomeScreen;
