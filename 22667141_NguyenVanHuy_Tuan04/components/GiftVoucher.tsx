import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const GiftVoucher = () => {
return(
    <View style={styles.container}>
        <Text style={{fontWeight:"bold"}}> Bạn có phiếu quà tặng Tiki/Got it/Urbox? </Text> <TouchableOpacity><Text style={{color:"blue",fontWeight:"bold"}}> Nhập tại đây? </Text> </TouchableOpacity>
    </View>
);
}
export default GiftVoucher;
const styles = StyleSheet.create({
    container : {
     flexDirection:"row",
     alignItems:"center",  
     gap:10,
        padding:20,
        backgroundColor:"white",
        marginTop:20,
     
    }
})