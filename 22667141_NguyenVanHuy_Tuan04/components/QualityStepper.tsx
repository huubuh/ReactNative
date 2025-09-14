import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const QualityStepper = () => {
 return (
            <View style={styles.container}>
                <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
            <TouchableOpacity style={styles.button}><Text>-</Text></TouchableOpacity>
                     <Text>1</Text>
            <TouchableOpacity style={styles.button}><Text>+</Text></TouchableOpacity>
                </View>
                <TouchableOpacity><Text style={{color:"blue",fontWeight:"bold"}}>Mua sau</Text></TouchableOpacity>
            </View>
)}
export default QualityStepper;
const styles = StyleSheet.create({
    container : {
       
        flexDirection:"row",
         alignItems:"center",
         justifyContent:"space-between"
    }, 
    button :{
        borderWidth:1,
        borderColor:"lightgray",
        backgroundColor:"lightgray",
        width:30,
        height:30,
        justifyContent:"center",
        alignItems:"center",
}
}) 
