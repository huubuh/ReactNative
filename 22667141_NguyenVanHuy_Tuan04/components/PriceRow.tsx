import { StyleSheet, Text, View } from "react-native";

const PriceRow = () => {
    return (
    <View style={styles.container}>
        <Text style={{fontSize:22,fontWeight:"bold"}}>Tạm tính</Text>
        <Text style={{fontSize:22,fontWeight:"bold",color:"red"}}>141.800 đ</Text>
    </View>
    )
}
export default PriceRow;
const styles = StyleSheet.create({
    container: {
    flexDirection:"row",
    justifyContent:"space-between",
    padding:20,
    backgroundColor:"white",
    marginTop:20,
    }
})