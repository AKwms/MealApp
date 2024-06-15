import { MEALS } from "../data/dummy-data";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId; //this method used to receive only the "ID" from CategoriesScreen


  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProp = {
        id: item.id,
        title: item.title,
        imageUrl: item.imageUrl,
        affordability: item.affordability,
        complexity: item.complexity,
        duration: item.duration
    }

    return (
        <MealItem {...mealItemProp}/>
    //   <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
