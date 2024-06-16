import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

//Drawer inside Stack!
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#9067B6" },
        headerTintColor: "white",
        // contentStyle: { backgroundColor: "#111827" },
        sceneContainerStyle: { backgroundColor: "#111827" }, //in Drawer the contentStyle called sceneContainerStyle
        drawerContentStyle: { backgroundColor: "#9067B6" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#111827",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

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
          }} //Note: first screen on Stack.navigator is the default starting screen !
        >
          <Stack.Screen
            name="MealsCategories"
            component={DrawerNavigator}
            options={{
              // title: "All Categories",
              headerShown: false, //remove the title of the stack
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
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: "About The Meal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
