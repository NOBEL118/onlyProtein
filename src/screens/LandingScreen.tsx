import { useState } from "react";
import {View , Text, Button , Alert, StyleSheet} from "react-native" ;

import { TextInput } from "react-native-gesture-handler" ;

const LandingScreen = ({navigation}) => {
    const [name , setname] = useState("") ;
    const [email , setemail] = useState("") ;
    const [password , setpassword] = useState("") ;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to onlyProtein</Text>
            <TextInput 
                value= {name} 
                onChangeText={setname}
                placeholder="Name"
                placeholderTextColor="#8a6675"
                style={styles.input}
            />
            <TextInput 
                placeholder="Email" 
                value= {email} 
                onChangeText={setemail}
                placeholderTextColor="#8a6675"
                style={styles.input}
            />
            <TextInput 
                placeholder="Password" 
                value= {password} 
                onChangeText={setpassword}
                placeholderTextColor="#8a6675"
                style={styles.input}
            />
            <Button 
            title = "submit"
            color="#ff4f9a"
            onPress = {() => {
                if (!name.trim() || !email.trim() || !password.trim()) {
                    Alert.alert("Please fill all the fields") ;
                    return ;
                }
                navigation.navigate("MyDrawer" ,{
                    username : name 
                })
            }}
             />     
        </View>
    )
} ;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 24,
        gap: 16,
        backgroundColor: "#090909",
    },
    title: {
        marginBottom: 12,
        color: "#ff4f9a",
        fontSize: 30,
        fontWeight: "800",
        lineHeight: 36,
        textAlign: "center",
    },
    input: {
        height: 54,
        paddingHorizontal: 18,
        borderWidth: 2,
        borderColor: "#ff4f9a",
        borderRadius: 14,
        backgroundColor: "#ffffff",
        color: "#090909",
        fontSize: 16,
    },
});

export default LandingScreen ;
