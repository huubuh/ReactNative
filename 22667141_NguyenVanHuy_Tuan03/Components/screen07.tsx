import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import {  SafeAreaView } from "react-native-safe-area-context";

const Screen07= ()=>{
return (<>
    <SafeAreaView style={styles.contructor}>
    <View style={{flex:1 ,justifyContent:"center",paddingLeft:"10%"}} >
        <Text style={{fontSize:35,fontWeight:"bold"}}>LOGIN</Text>
    </View>
    <View style={{flex:0.2 , alignItems:"center",gap:20}}>
        <View style={styles.inputRow}> 
        <Image source={require("../assets/user.png")} style={{width:30,height:30}}/>   
        <TextInput
        style={{fontSize:25,marginLeft:10}}
        placeholder="Name"
        placeholderTextColor="black"
        />
        </View>
        
        <View style={styles.inputRow}>
        
            <Image source={require("../assets/lock.png")} style={{width:30,height:30}}/>   
        <TextInput
        style={{fontSize:25,marginLeft:10}}
        placeholder="Password"
        placeholderTextColor="black"
        />
        <View style={{width:"60%",alignItems:"flex-end",paddingRight:50}}>
              <Image source={require("../assets/eye.png")} style={{width:30,height:30}}/>
        </View>
         
        </View>


    </View>
    <View style={{flex:1,alignItems:"center",gap:30}}>
        <TouchableOpacity style={styles.button}>
            <Text style={{fontSize:25,fontWeight:"bold",color:"white"}}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={{fontSize:22,fontWeight:"bold"}}>CREATE ACCOUNT</Text>
    </View>
    </SafeAreaView>
</>)
}
export default Screen07 ;
const  styles = StyleSheet.create({
    contructor : {
        flex :1,
        backgroundColor:"#f3c400"
    },
     inputRow:{
        
        width:350,
        height:70,
        borderWidth:1,
        backgroundColor: "#dcbe3b",
        borderColor:"#cae1d1",
        alignItems:"center",
        flexDirection:"row",
        paddingHorizontal:20,
        
            
    },
    button : {
        width:"90%",
        backgroundColor:"black",
        borderRadius :5 ,
        justifyContent :"center",
        alignItems:"center",
        textAlign:"center",
        height:50,
    }
}) 