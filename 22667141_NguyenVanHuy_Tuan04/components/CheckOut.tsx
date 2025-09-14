import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CheckOut = () => {
    return (
        <View style={styles.container}> 
        <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:20}}>  
        <Text style={{fontSize: 22, fontWeight: "bold",color:"grey"}}>Thành tiền</Text>
        <Text style={{fontSize: 22, fontWeight: "bold",color:"red"}}>141.800 đ</Text>
        </View>
        <View><TouchableOpacity style={{backgroundColor:"red",borderWidth:1,borderColor:"red",borderRadius:5,height:60,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize: 25, fontWeight: "bold",color:"white"}}>TIẾN HÀNH ĐẶT HÀNG</Text></TouchableOpacity></View>
        </View>
    );
}
export default CheckOut;
const styles = StyleSheet.create({
    container: {
    backgroundColor:"white",
    padding:20,
    
    
    }
})