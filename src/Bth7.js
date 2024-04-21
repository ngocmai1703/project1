import React, { useState } from "react";
import { Text, Button, View, StyleSheet, TextInput } from "react-native";



const data = [1,2,3,4,5,6,7,8,9,10]
export default () => {
     const [name, setName] = useState("");
    return (
        <View style={styles.view}>
        <View style={styles.container}>

            <Text style={styles.lable}> What is your name?</Text>
            <TextInput 
                style={styles.input}
                placeholder="Jonh Doe"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                onChangeText={(text)=> setName(text)}
                value={name}
            />
            <Button
            title="Say hello"
            onPress={()=>{
                alert(`Hello, ${name}!`)
                setName("")
            }}
            />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
    padding: 20,
   },
   view:{
    flex: 1,
    alignItems: 'center'
   },
   input:{
    marginTop: 10,
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: 10,
    borderRadius: 5
   },
    lable:{
       fontWeight: "bold",
       fontSize: 18
    }
})