import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview', { //MealsOverview is the name of the other screen in App.js (MealsOverviewScreen)
        categoryId: itemData.item.id, //send the id of the item to MealsOverviewScreen as categoryId
        title : itemData.item.title //it used to be displayed on the top of the screen
      }); 
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        whenPress={pressHandler}
        // navigation={navigation} you can use it if you want to go from CategoryGridTile to MealsOverview
      />
    );
  }

  //check category.js in models to understand where's the id
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
