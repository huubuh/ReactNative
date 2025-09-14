import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const Discount = () => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:"row",gap:20,alignItems:"center"}}> 
                <Text style={{fontWeight:"bold"}}>Mã giảm giá đã lưu</Text>
                  <TouchableOpacity><Text style={{color:"blue",fontWeight:"bold"}}>xem tại đây</Text></TouchableOpacity>
            </View> 
            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:20}}>
             <TouchableOpacity style={{flexDirection:"row",alignItems:"center",borderWidth:1,padding:5,width:"60%",borderRadius:5}}><Text style={{backgroundColor:"yellow",width:50,height:30,margin:10}}></Text><Text style={{fontWeight:"bold",fontSize:22}}>Mã giảm giá </Text></TouchableOpacity>
             <TouchableOpacity style={{borderWidth:1,borderColor:"blue",width:"30%",height:60,justifyContent:"center",alignItems:"center",padding:5,backgroundColor:"blue",borderRadius:5}}><Text style={{color:"white",fontSize:22,fontWeight:"bold"}}>Áp dụng </Text></TouchableOpacity>
            </View> 
        </View>
    );
}
export default Discount;
const styles = StyleSheet.create({
    container : {
        padding:20,    
        backgroundColor:"white",
        
    }
})
    