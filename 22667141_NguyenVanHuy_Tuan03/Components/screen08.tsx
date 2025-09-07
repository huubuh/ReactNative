import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import {  SafeAreaView } from "react-native-safe-area-context";

const Screen08 = ()=>{
return (<>
    <SafeAreaView style={styles.contructor}>
        <View style={{flex:1,alignItems:"center"}}>
            <Image source={require("../assets/eye3d.png")} style={{ width:"50%",height:"50%",resizeMode:"contain"}}/>
        
        <View style={styles.inputRow}>
            <Image source={require("../assets/userblue.png")} style={{width:30,height:30}}/>
            <TextInput 
            placeholder="Please input user name"
            style={{fontSize:20}}
            />
        </View>
        <View style={styles.inputRow}>
            <Image source={require("../assets/locked.png")} style={{width:30,height:30}}/>
            <TextInput
            placeholder="Please input password"
            style={{fontSize:20}}
            />
        </View>
        </View>
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity style={styles.button}>
                <Text style={{fontSize:20,color:"white"}}>LOGIN</Text>
            </TouchableOpacity>
            <View style={{width:"80%",flexDirection:"row", justifyContent:"space-between", paddingTop:20}}>
                <TouchableOpacity>
                    <Text style={{fontSize:20}}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{fontSize:20}}>Forgot Password</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row" ,height:80,alignItems:"center",gap:2,width:"80%"}}>
                <View style={styles.line}></View>
                <Text style={{fontSize:20}}>Other Login Methods</Text>
                <View style={styles.line}></View>
            </View>
            <View style={{flex:1 , flexDirection:"row",justifyContent:"center",gap:40,paddingTop:20}}>
                <TouchableOpacity>
                    <Image source={require("../assets/adduser.png")} style={{width:100,height:100}}/> 
                    </TouchableOpacity> 
                <TouchableOpacity>
                    <Image source={require("../assets/wifi.png")} style={{width:100,height:100}}/> 
                    
                    </TouchableOpacity> 
                <TouchableOpacity>
                    <Image source={require("../assets/facebook.png")} style={{width:100,height:100}}/> 
                    
                    </TouchableOpacity> 

            </View>

        </View>
    </SafeAreaView>
</>)
}
export default Screen08 ;
const  styles = StyleSheet.create({
    contructor : {
        flex :1,
    },
    inputRow:{
        width:"80%",
        borderBottomWidth : 1,
        borderBottomColor : "lightgray",
        marginVertical: 10,
        paddingVertical: 5,
        flexDirection :"row",
        gap :10,
        alignItems:"center"
        
    },
    button:{
        borderWidth:1,
        borderColor:"#386ffc",
        backgroundColor:"#386ffc",
        borderRadius:10,
        alignItems:"center",
        width:"80%",
        height:60,
        justifyContent:"center"
    },
    line: {
        flex:1,
        height:1,
        backgroundColor:"blue",
       
    }

}) 