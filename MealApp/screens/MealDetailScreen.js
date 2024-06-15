import { useLayoutEffect } from "react";
import { Text, View, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId; //its passed by mealItem component !

  const selectedMeal = MEALS.find((meal) => meal.id === mealId); //give me all the info of the component has the specific id

  function headerButtonPressHandler() {
    console.log('Pressed!')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton whenPress={headerButtonPressHandler} icon="star" color="white"/>
      }
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    //you have to determine the width and height of the image in this case !
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText} //now the d, c and affor. in detailScreen are white and at MealDetails are black
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    width: "100%",
    height: 350,
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },

  detailText: {
    color: "white",
  },

  listOuterContainer: {
    alignItems: "center",
  },

  listContainer: {
    maxWidth: "80%",
  },
});
