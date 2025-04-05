import { useState } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Button,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";

const HomeScreen = () => {
  const [show, setShow] = useState(false);
  const setModel = () => {
    setShow(false); // Model will not show
  };
  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={show} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>Hello welcome Amit 👋</Text>
            <Button title="Close" color="red" onPress={setModel} />
          </View>
        </View>
      </Modal>

      <View style={styles.subMain}>
        <Button title="Click Me" color="blue" onPress={() => setShow(true)} />
      </View>
      <Pressable
        onPress={() => alert("Normal on Press !!")}
        onLongPress={() => alert("On Long Press ...")}
        onPressIn={() => alert("On Press In..")}
        onPressOut={() => alert("On Press Out..")}
      >
        <Text style={styles.pressTxt}>Pressable</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  subMain: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  pressTxt: {
    backgroundColor: "blue",
    color: "#fff",
    padding: 10,
  },
  modalBox: {
    backgroundColor: "white",
    padding: 24,
    borderRadius: 12,
    width: "80%",
    elevation: 10, // for Android shadow
    shadowColor: "#000", // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
});

export default HomeScreen;
