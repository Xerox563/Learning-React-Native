import { FlatList, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  const arr = ["Apple", "Mango", "Banana", "Orange", "PineApple", "Grapes"];
  const users = [
    {
      id: 1,
      name: "Peter",
    },
    {
      id: 2,
      name: "Alex",
    },
    {
      id: 3,
      name: "Raju",
    },
    {
      id: 4,
      name: "aman",
    },
    {
      id: 5,
      name: "Keshav",
    },
    {
      id: 6,
      name: "Raghav",
    },
    {
      id: 7,
      name: "Dileep",
    },
  ];
  return (
    <View>
      <Text style={{ marginTop: 19 }}>
        Below is the List of Most talented users ..
      </Text>
      <FlatList
        style={styles.heading}
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.smallheading}>{item.name}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    borderWidth: 2,
    borderColor: "yellow",
    backgroundColor: "grey",
  },
  smallheading: {
    borderWidth: 2,
    borderColor: "purple",
    backgroundColor: "green",
  },
});

export default HomeScreen;
