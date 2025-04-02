import React from "react";
import { View, Text, Button } from "react-native";
import UserData from "../../components/main/ButtonMain";
const HomeScreen = () => {
  const fruit = () => {
    console.log("Function Called !!");
  };
  return (
    <View style={{ padding: 20, alignItems: "center" }}>
      <View style={{ backgroundColor: "blue", padding: 10 }}>
        <Text style={{ color: "white", fontSize: 20 }}>Box 1</Text>
      </View>
      <View style={{ backgroundColor: "green", padding: 10, marginTop: 10 }}>
        <Text style={{ color: "white", fontSize: 20 }}>Box 2</Text>
      </View>
      {/* <Button title="Click Me" color={"black"} onPress={() => fruit("Hello Anil !!")}></Button> */}
      <Button title="Click Me" color={"black"} onPress={fruit}></Button>
      <UserData />
      <CollegeData />
    </View>
  );
};

const CollegeData = () => {
  return (
    <View>
      <Text>Me from IIT Kanpur .. ...</Text>
    </View>
  );
};

export default HomeScreen;
