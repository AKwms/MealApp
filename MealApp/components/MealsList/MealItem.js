import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import MealDetails from "../MealDetails";


//you can use images from web by source={{uri: Link of the image}} !
function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation(); //i used it bc it can't be passed as a parameter "function MealItem({ navigation })"

  function selectMealHandler() {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
            <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;
const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    // overflow: 'hidden', this may cuze not showing the shadow !
    overflow: Platform.OS === "andriod" ? "hidden" : "visible",
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },

  innerContainer: {
    //i've created the innerContainer to use the borderRadius after adding the shadow at mealItem
    borderRadius: 8,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 200,
  },

  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },

  buttonPressed: {
    opacity: 0.25,
  },
});
