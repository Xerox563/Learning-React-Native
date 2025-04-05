import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
const HomeScreen = () => {
  return (
    <View style={{ marginTop: 50 }}>
      <TouchableHighlight
        onPress={() => alert("Button1 Pressed")}
        activeOpacity={0.4}
      >
        {/* Reduces the opacity of the child component when pressed. */}
        <Text style={styles.btn1}> Click Button1</Text>
      </TouchableHighlight>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.btn1, styles.btn2]}
        onPress={() => alert("Button2 Pressed ")}
      >
        <Text style={[styles.btn1, styles.btn2]}> Click Button2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn1: {
    backgroundColor: "blue",
    color: "black",
    borderWidth: 3,
    borderColor: "pink",
    padding: 8,
  },
  btn2: {
    backgroundColor: "green",
    border: "yellow",
    underlayColor: "purple",
  },
});

export default HomeScreen;

/*

activeOpacity : How transparen button becomes when pressed (0-1)

🟢 Use TouchableOpacity When:

Scenario	Explanation
✅ You want a modern UI look	Opacity fade feels clean and minimal.
✅ You're building custom buttons	Especially for cards, icons, images, etc.
✅ You want fast interactions	It renders slightly faster, lightweight.
✅ Subtle feedback is enough	Great when you don’t want bold feedback.
✅ You're using FlatList items	Lightweight tap handling on rows/items.

🔥 Ideal For:
    Navigation buttons
    Icons, images, cards
    Floating Action Buttons (FABs)
    Any component needing light feedback
* ------------------------------------------------------------------------

🔵 Use TouchableHighlight When:

Scenario	Explanation
✅ You want clear and strong feedback	Shows underlay color when pressed.
✅ You need a "pressed" background effect	Use underlayColor to customize it.
✅ You're targeting older UI styles	Useful in older apps, or dark UIs.
✅ You want to clearly show taps	For example: settings menus, list items.

🔥 Ideal For:
    Menu items with full-width background on press
    Richly styled buttons with contrast feedback
    Dark-themed UIs needing visible press action
*/
