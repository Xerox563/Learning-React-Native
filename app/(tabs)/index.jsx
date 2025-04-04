import { StyleSheet, Text, View, ScrollView } from "react-native";

const HomeScreen = () => {
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
      name: "Rohan",
    },
    {
      id: 13,
      name: "Abhay",
    },
    {
      id: 14,
      name: "Amit",
    },
    {
      id: 15,
      name: "Rachit",
    },
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
      name: "Rohan",
    },
    {
      id: 13,
      name: "Abhay",
    },
    {
      id: 14,
      name: "Amit",
    },
    {
      id: 15,
      name: "Rachit",
    },
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
      name: "Rohan",
    },
    {
      id: 13,
      name: "Abhay",
    },
    {
      id: 14,
      name: "Amit",
    },
    {
      id: 15,
      name: "Rachit",
    },
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
      name: "Rohan",
    },
    {
      id: 13,
      name: "Abhay",
    },
    {
      id: 14,
      name: "Amit",
    },
    {
      id: 15,
      name: "Rachit",
    },
  ];
  return (
    <View>
      <Text>Below is the List of Most talented users ..</Text>
      <ScrollView>
        {users.map((item) => (
          <Text style={styles.head}>{item.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    backgroundColor: "blue",
    borderWidth: 2,
    borderColor: "yellow",
    padding: 14,
    color: "white",
    textAlignVertical: "center",
    textAlign: "center",
    marginTop: 10,
  },
});

export default HomeScreen;
