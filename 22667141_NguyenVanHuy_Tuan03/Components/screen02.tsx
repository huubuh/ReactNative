import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Screen02 = () =>{
 return (
    <>
      <LinearGradient 
      colors={["#d7f7f9", "#d7f7f9", "#00c6ff"]}
       locations={[0, 0.8, 1]}   // 70% trên nhạt, 30% dưới đậm
      
        style={[styles.container]}
      >
      <SafeAreaView style={{flex:1}}>
         <View style= {{flex : 2, justifyContent:"center",alignItems:"center"}}> 
            <Image source={require("../assets/dry-clean.png")} style={{width: 200, height: 200 }}/>
         </View>
         <View style= {{flex : 1,justifyContent:"center",alignItems:"center"}}> <Text style={styles.texts}> GROW {'\n'} YOUR BUSINESS </Text></View>
         <View style= {{flex : 1}}> <Text style={{ fontSize : 18, fontWeight : "bold",textAlign:"center"}}>We will help you to go grow your business using online server</Text></View>
         <View style= {{flex : 1,gap:30 ,flexDirection:"row", justifyContent:"center",alignItems:"center"}}> 
            <TouchableOpacity style={styles.button}>
               <Text style={styles.texts}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
               <Text style={styles.texts}>SIGN UP</Text>
            </TouchableOpacity>
            </View>
            <View style= {{flex :1}}>
                <Text style={{fontWeight:"bold",fontSize:25,textAlign:"center"}}>HOW HE WORK ?</Text>
            </View>
      </SafeAreaView>
      </LinearGradient>
    </>
 )
}
export default Screen02 ;
const styles = StyleSheet.create({
   container : {
         flex : 1,
        
   },
   button : {
     
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
  