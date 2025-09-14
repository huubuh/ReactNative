import Checkbox from "expo-checkbox";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const PassWordGN = () => {
    const [lower, setLower]   = useState(true);
    const [upper, setUpper]   = useState(false);
    const [number, setNumber] = useState(true);
    const [symbol, setSymbol] = useState(false);
    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
             <View style={{justifyContent: 'center', alignItems: 'center',height:"30%"}}><Text style={{textAlign:"center",width:"50%",color:"white",fontSize:30,fontWeight:"bold"}}>PASSWORD GENERATION</Text></View>
            <View style={{height:"10%",borderWidth:1,borderColor:"#151537",borderRadius:5,margin:10,backgroundColor:"#151537"}}><TextInput  /></View>
              <View style={{margin:10,height:"10%",flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}><Text style={styles.font}>Password length</Text> <TextInput style={{width: "50%", borderWidth:1,borderColor:"white",borderRadius:5,margin:10,backgroundColor:"white"}}/></View>
                <View style={styles.check}><Text style={styles.font}>Include lowercase letters</Text> <Checkbox
                    value={lower}
                    onValueChange={setLower}
                    color={lower ? "#000" : undefined} 
                    style={{ width: 28, height: 28, borderWidth: 2,  borderRadius: 4 }}
                    />
                    </View>
                                    <View style={styles.check}><Text style={styles.font}>Include uppercase letters</Text> <Checkbox
                    value={upper}
                    onValueChange={setUpper}
                    color={upper ? "#000" : undefined}
                    style={{ width: 28, height: 28, borderWidth: 2, borderRadius: 4 }}
                    /></View>
                                    <View style={styles.check}><Text style={styles.font}>Include numbers</Text> <Checkbox
                    value={number}
                    onValueChange={setNumber}
                    color={number ? "#000" : undefined}
                    style={{ width: 28, height: 28, borderWidth: 2,  borderRadius: 4 }}
                    /></View>
                                    <View style={styles.check}><Text style={styles.font}>Include special symbols</Text> <Checkbox
                    value={symbol}
                    onValueChange={setSymbol}
                    color={symbol ? "#000" : undefined}
                    style={{ width: 28, height: 28, borderWidth: 2,  borderRadius: 4 }}
                    /></View>

        </View>

        <View style={{height:"20%",justifyContent:"center",alignItems:"center"}}><TouchableOpacity style={{width:"80%",height:"40%",backgroundColor:"#3b3b98",borderRadius:5,alignItems:"center",justifyContent:"center"}}><Text style={{color:"white",fontSize:20,fontWeight:"bold"}}>GENERATE PASSWORD</Text></TouchableOpacity></View>
    </View>
    )
}
export default PassWordGN;
const styles = StyleSheet.create({
container :{
flex:1,
backgroundColor:"#23235b",

},
check:{
    margin:10,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
},
font:{
    color:"white",
    fontSize:20,
    fontWeight:"bold",
}
})