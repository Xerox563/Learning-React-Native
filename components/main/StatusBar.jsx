import { useState } from "react";
import { View, Text, StatusBar, Button, Platform } from "react-native";
const HomeScreen = () => {
  const [hide, setHide] = useState(false);
  const [color, setColor] = useState("purple");
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <StatusBar
        backgroundColor={color}
        barStyle="dark-content"
        hidden={hide}
      />
      <Button
        title="Toggle Status Bar"
        onPress={() => {
          if (hide === false) {
            setHide(true);
          } else {
            setHide(false);
          }
        }}
      />
      <Text>Platform :: {Platform.OS}</Text>
      <Text>
        React Native ::{" "}
        {JSON.stringify(Platform.constants.reactNativeVersion.patch)}
      </Text>
      <Button
        title="Update Style"
        onPress={() => {
          if (color === "purple") {
            setColor("green");
          } else {
            setColor("purple");
          }
        }}
      />
    </View>
  );
};

export default HomeScreen;
