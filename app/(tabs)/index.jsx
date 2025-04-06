// App.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Stack Navigator
const Stack = createStackNavigator();

// Login Screen
const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

// Home Screen
const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
};

// Main App
export default function App() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

/*
                          * Types of Navigation *
* 1. Stack Navigation (When you need a simple flow of screens)
Use Stack Navigation when your app has a straightforward flow where users go from one screen to another in a linear way.

When to use it:
For apps with a simple sequence of screens (e.g., login → home → profile).
When you want users to go back to the previous screen using a "back" button (like the back button on Android or iOS).

Example:
Login Screen → Home Screen → Profile Screen In this case, you only go forward through the screens and use the back button to return.

* 2. Tab Navigation (When you have different sections or features that users can switch between quickly)
Use Tab Navigation when your app has multiple sections or features, and you want users to quickly switch between them without going through a back-and-forth process.

When to use it:
For apps where users need to access different sections frequently (e.g., Home, Search, Profile).
When you want users to quickly move between major sections without any back-and-forth navigation.

Example:
Home Tab → Search Tab → Profile Tab Users can switch between tabs at the top or bottom, and each tab represents a different section of the app.

* 3. Drawer Navigation (When you have many sections or options to display)
Use Drawer Navigation when your app has a lot of options or settings, and you want to keep the main interface clean while providing easy access to extra features.

When to use it:
For apps with many options, settings, or sections that don’t need to be visible all the time.
When you want to hide the options in a side menu and make the app look cleaner.

Example:
Home → Settings → Profile → Notifications → Logout Instead of showing all these options on the main screen, they are hidden inside a sliding drawer, which users can open when needed.

* 4. Material Top Tab Navigation (When you want a more stylish and clean design with tabs at the top)
Use Material Top Tab Navigation when you want to display tabs at the top, and the app looks better with that style. It’s typically used in apps with content that can be categorized into several tabs.

When to use it:
For apps with categories that you want users to switch between easily (e.g., News, Sports, Entertainment).
When you want a more modern and clean interface with tabs at the top.

Example:
News Tab → Sports Tab → Entertainment Tab Users can swipe or tap to switch between different content sections at the top of the screen.

* 5. Bottom Tab Navigation (When you want quick access to key features at the bottom)
Use Bottom Tab Navigation when your app has important actions or sections that need to be easily accessible from anywhere in the app. This is commonly used in mobile apps where quick navigation is essential.

When to use it:
For apps where the user needs to access key sections like Home, Search, Profile, or Notifications quickly and often.
When you want to make the most important sections accessible with one tap from anywhere in the app.

Example:
Home Tab → Search Tab → Profile Tab These tabs are at the bottom of the screen, making it easy for users to access major parts of the app with one tap.

* 6. Nested Navigation (When you need more complex flows within a screen)
Use Nested Navigation when your app has screens within screens (like sub-sections inside a category). It’s useful when one screen leads to another set of screens, and you want to organize things better.

When to use it:
For apps with multiple levels of navigation (e.g., categories inside a category).
When you want users to navigate within a particular section but still be able to go back to the main screen.

Example:
Home Screen → Category Screen → Subcategory Screen → Item Details The Home screen has a category list, and when you tap a category, you enter a subcategory screen with even more options, like items in that category.
 */
