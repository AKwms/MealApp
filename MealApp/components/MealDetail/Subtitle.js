import { View, Text, StyleSheet } from "react-native";
function Subtitle({children}) {
    return (
        <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
      </View>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: "#a288ba",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        // borderBottomColor: 'white', //Note: Text can't receive borders in RN !
      },
    
      subtitleContainer: {
        marginHorizontal: 24,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: "#9067B6",
        borderBottomWidth: 2,
      },
})