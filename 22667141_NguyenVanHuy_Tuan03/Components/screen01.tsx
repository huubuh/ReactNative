import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Screen01 = () =>{
 return (
    <>
      <SafeAreaView style={[styles.container]}>
         <View style= {{flex : 2, justifyContent:"center",alignItems:"center"}}> 
            <Image source={require("../assets/dry-clean.png")} style={{width: 200, height: 200 }}/>
         </View>
         <View style= {{flex : 1,justifyContent:"center",alignItems:"center"}}> <Text style={styles.texts}> GROW {'\n'} YOUR BUSINESS </Text></View>
         <View style= {{flex : 1}}> <Text style={{ fontSize : 18, fontWeight : "bold",textAlign:"center"}}>We will help you to go grow your business using online server</Text></View>
         <View style= {{flex : 1,gap:20,flexDirection:"row", justifyContent:"center",alignItems:"center"}}> 
            <TouchableOpacity style={styles.button}>
               <Text style={styles.texts}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
               <Text style={styles.texts}>SIGN UP</Text>
            </TouchableOpacity>
            </View>
      </SafeAreaView>
    </>
 )
}
export default Screen01 ;
const styles = StyleSheet.create({
   container : {
         flex : 1,
         backgroundColor: "#00ccf9"
   },
   button : {
     
         borderRadius:15,
         borderWidth: 1,   
         paddingVertical: 16, 
         paddingHorizontal: 25,
         backgroundColor : "#e3c000",
         borderColor : "#e3c000"
   },
   texts : {
            fontSize : 30,
            fontWeight : "bold",
            textAlign: "center"
   }}


)
  