import { useState } from "react";
import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [display, setDisplay] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 20 }}>
        Form in React Native
      </Text>

      <TextInput
        style={{
          backgroundColor: "white",
          borderColor: "purple",
          borderWidth: 2,
          color: "black",
          padding: 10,
          height: 50,
          width: "100%",
          marginBottom: 10,
          borderRadius: 5,
        }}
        placeholder="Enter Your Name .."
        placeholderTextColor="gray"
        onChangeText={setName}
        value={name}
      />

      <TextInput
        style={{
          backgroundColor: "white",
          borderColor: "purple",
          borderWidth: 2,
          color: "black",
          padding: 10,
          height: 50,
          width: "100%",
          marginBottom: 10,
          borderRadius: 5,
        }}
        placeholder="Enter Your Email .."
        placeholderTextColor="gray"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />

      <TextInput
        style={{
          backgroundColor: "white",
          borderColor: "purple",
          borderWidth: 2,
          color: "black",
          padding: 10,
          height: 50,
          width: "100%",
          marginBottom: 10,
          borderRadius: 5,
        }}
        placeholder="Enter Your Password .."
        placeholderTextColor="gray"
        secureTextEntry
        onChangeText={setPass}
        value={pass}
      />

      {/* <View style={{ marginTop: 10, width: "100%" }}>
        <Button
          title="Submit Now"
          color="purple"
          onPress={() => setDisplay(!display)}
        />
      </View> */}

      <TouchableOpacity
        onPress={() => setDisplay(!display)}
        style={{
          backgroundColor: "yellow",
          padding: 25,
          borderRadius: 5,
          alignItems: "center",
          marginTop: 10,
          width: "100%",
        }}
      >
        <Text style={{ color: "black", fontSize: 12, fontWeight: "bold" }}>
          Submit Now
        </Text>
      </TouchableOpacity>

      {display && (
        <View
          style={{
            marginTop: 20,
            padding: 10,
            backgroundColor: "#e0e0e0",
            borderRadius: 5,
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              padding: 10,
              borderWidth: 2,
              borderColor: "blue",
              fontSize: 18,
              fontWeight: "500",
              marginVertical: 5,
            }}
          >
            Name: {name}
          </Text>
          <Text
            style={{
              padding: 10,
              borderWidth: 2,
              borderColor: "blue",
              fontSize: 18,
              fontWeight: "500",
              marginVertical: 5,
            }}
          >
            Email: {email}
          </Text>
          <Text
            style={{
              padding: 10,
              borderWidth: 2,
              borderColor: "blue",
              fontSize: 18,
              fontWeight: "500",
              marginVertical: 5,
            }}
          >
            Password: {pass}
          </Text>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
