import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Screen05 = () => {
    return (
        <SafeAreaView style={styles.contructor}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontWeight: "bold", fontSize: 30 }}>LOGIN</Text>
            </View>

            <View style={{ flex: 1, gap: 20, justifyContent: "center", alignItems: "center" }}>
                <TextInput
                    placeholder="EMAIL"
                    placeholderTextColor="black"
                    style={styles.rowInput}
                />
                <View style={styles.rowInput}>
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="black"
                        style={{ fontSize: 18 }}
                    />
                    <Image source={require("../assets/eye.png")} style={{ width: 30, height: 30 }} />
                </View>
            </View>

            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 20 }}>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "bold", color: "#d8efdf" }}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
                <Text>When you agree to terms and conditions</Text>
                <TouchableOpacity>
                    <Text style={{ color: "#5e27f9" }}>For got your password?</Text>
                </TouchableOpacity>
                <Text>Or login with</Text>
            </View>

            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <TouchableOpacity
                    style={{
                        width: 100,
                        height: 50,
                        borderWidth: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:"#275a8e",
                        borderColor:"#275a8e",
                        borderRadius:2,
                    }}
                >
                    <Text style={{color:"#d8efdf",fontSize:24,fontWeight:"bold"}}>f</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                        width: 100,
                        height: 50,
                        borderWidth: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:"#1593c6",
                        borderColor:"#1593c6",
                        borderRadius:2,
                    }}>
                    <Text style={{color:"#d8efdf",fontSize:24,fontWeight:"bold"}} >Z</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                        width: 100,
                        height: 50,
                        borderWidth: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:"#d8efdf",
                        borderColor:"#1593c6",
                        borderRadius:2,
                    }}>
                    <Image source={require("../assets/google.png")} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Screen05;

const styles = StyleSheet.create({
    contructor: {
        flex: 1,
        backgroundColor: "#d8efdf",
    },
    rowInput: {
        width: 350,
        backgroundColor: "#cae1d1",
        borderWidth: 1,
        borderColor: "#cae1d1",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        height: 50,
        fontSize: 18,
    },
    button: {
        paddingHorizontal: 20,
        height: 50,
        backgroundColor: "red",
        borderWidth: 1,
        width: 350,
        justifyContent: "center",
        alignContent: "center",
        borderColor: "red",
    },
});