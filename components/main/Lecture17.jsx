import { FlatList, Text, View } from "react-native";

const HomeScreen = () => {
  const users = [
    {
      id: 1,
      name: "Peter",
      email: "test@gmail.com",
    },
    {
      id: 2,
      name: "Alex",
      email: "test@gmail.com",
    },
    {
      id: 3,
      name: "Raju",
      email: "test@gmail.com",
    },
    {
      id: 4,
      name: "aman",
      email: "test@gmail.com",
    },
    {
      id: 5,
      name: "Keshav",
      email: "test@gmail.com",
    },
  ];
  return (
    <View>
      <Text>Below is the List of Most Influential Guys ..</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <userData item={item} />}
      />
    </View>
  );
};

const userData = (props) => {
  const item = props.item;
  return (
    <View
      style={{
        borderWidth: 2,
        borderColor: "blue",
        backgroundColor: "yellow",
      }}
    >
      {" "}
      <Text>Name: {item.name}</Text> <Text>Email: {item.email}</Text>{" "}
    </View>
  );
};

export default HomeScreen;
