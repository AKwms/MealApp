import { MEALS } from "../data/dummy-data";

import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId; //this method used to receive only the "ID" from CategoriesScreen


  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });


  return <MealsList items={displayedMeals}/> 

}

export default MealsOverviewScreen;


