
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { StyleSheet } from "react-native";
import  RadioGroup  from "react-native-radio-buttons-group";
import {  SafeAreaView } from "react-native-safe-area-context";

const Screen06 = ()=>{
    const radioButtons = [
        {
            id:"1",
            label:"Male",
            value :"male"
        },{
        id: "2",
        label: "Female",
        value : "female"
        }
    ]
return (<>
    <SafeAreaView style={styles.contructor}>
    <View style={{flex:0.5,justifyContent:"center",alignItems:'center'}}>
        <Text style={{fontSize:28,fontWeight:"bold"}}>REGISTER</Text>
    </View>
    <View style={{flex:1,gap:20,alignItems:"center"}}>
       <TextInput 
       placeholder="Name"
       placeholderTextColor="black" style={styles.inputRow}
       />
       <TextInput
       placeholder="Phone"
       placeholderTextColor="black"
       style={styles.inputRow}
       />
       <TextInput
       placeholder="Email"
       placeholderTextColor="black"
       style={styles.inputRow}
       />
       <View style={[styles.inputRow,{justifyContent:'space-between'}]}> 
        <TextInput
        style={{fontSize:18}}
       placeholder="Password"
       placeholderTextColor="black"
       
       />
       <Image source={require("../assets/eye.png")} style={{width:30,height:30}}/>
       </View>
       
        <TextInput
        placeholder="Birthday"
        placeholderTextColor="black"
        style={styles.inputRow}
       />
       <View style={{width:"100%",alignItems:"flex-start",marginLeft:"10%"}}>
        <RadioGroup 
        radioButtons={radioButtons}
        layout="row"
        labelStyle = {{fontSize:18,color:"black"}}
        
        /></View>
        
    </View>
    
    <View style ={{flex:1,marginTop:100,alignItems:'center'}}>
       <TouchableOpacity style={styles.button}>
        <Text style={{fontSize:24,fontWeight:"bold" , color:"#d8efdf"}}>REGISTER</Text>
       </TouchableOpacity>
       <Text style={{marginTop:10}}>When you agree to terms and conditions</Text>
    </View>
        
  
    </SafeAreaView>
</>)
}
export default Screen06 ;
const  styles = StyleSheet.create({
    contructor : {
        flex :1,
        backgroundColor:"#d8efdf",
    },
    inputRow:{
        fontSize:18,
        width:350,
        height:50,
        borderWidth:1,
        backgroundColor: "#cae1d1",
        borderColor:"#cae1d1",
        alignItems:"center",
        flexDirection:"row",
        paddingHorizontal:20,
            
    },
    button : {
        width:"90%",
        backgroundColor:"red",
        borderRadius :5 ,
        justifyContent :"center",
        alignItems:"center",
        textAlign:"center",
        height:50,
    }
}) 
