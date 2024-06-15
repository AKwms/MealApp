import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#9067B6" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#111827" },
            // i used it on the stack navigator to apply the above settings to all screens !
          }} //Note: first screen on Stacj.navigator is the default starting screen !
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
              // headerStyle: { backgroundColor: "#9067B6" },
              // headerTintColor: "white",
              // contentStyle: {backgroundColor: '#111827'}
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={({ route, navigation }) => { 
              const catTitle = route.params.title;
              return {
                title: catTitle,
              };
            }}
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
