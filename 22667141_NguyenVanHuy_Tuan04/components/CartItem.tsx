import { Image, StyleSheet, Text, View } from "react-native";
import QualityStepper from "./QualityStepper";

const CartItem = () => {
    return(
        
        <View style={styles.container}>
            <Image source={require("../assets/book.png")} style={{width:170,height:250 }}/>
            <View style={{flex:1,gap:20 }}> 
            <Text style={{fontWeight:"bold" ,fontSize:16}}>Nguyên hàm tích phân và ứng dụng </Text> 
            <Text style={{fontSize:14,fontWeight:"bold"}}>Cung cấp bởi Tiki Trading</Text>
            <Text style={{fontWeight:"bold",color:"red",fontSize:26}}>141.800 đ</Text>
            <Text style={{textDecorationLine:"line-through",fontWeight:"bold",color:"gray"}}>141.800 đ</Text>

            <View style={{marginTop:20}}><QualityStepper/></View>
            </View>
        </View>
        )
}
export default CartItem;
const styles = StyleSheet.create({
    container :{
        flexDirection:"row",
        padding:20,
        gap:20,
        backgroundColor:"white",
    
    },


})