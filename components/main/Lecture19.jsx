import { View, Text } from "react-native";
const HomeScreen = () => {
  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          borderWidth: 5,
          borderColor: "black",
        }}
      >
        <Text style={{ flex: 1, backgroundColor: "blue" }}> box-1</Text>
        <Text style={{ flex: 1, backgroundColor: "purple" }}> box-3</Text>
        <Text style={{ flex: 1, backgroundColor: "yellow" }}> box-2</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          borderWidth: 5,
          borderColor: "black",
        }}
      >
        <Text style={{ flex: 1, backgroundColor: "orange" }}> box-4</Text>
        <Text style={{ flex: 1, backgroundColor: "green" }}> box-3</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          borderWidth: 5,
          borderColor: "black",
        }}
      >
        <Text style={{ flex: 1, backgroundColor: "white" }}> box-3</Text>
        <Text style={{ flex: 2, backgroundColor: "pink" }}> box-3</Text>
      </View>
      <Text style={{ flex: 1, backgroundColor: "green" }}> box-5</Text>
    </View>
  );
};

export default HomeScreen;
