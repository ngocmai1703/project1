import React, { useState } from "react";
import { Text, Button, View, StyleSheet, ScrollView } from "react-native";

const Square =({text, bgcolor ='#7ce0f9'}) =>(
    <View style={[styles.box, {backgroundColor: bgcolor}]}>
        <Text>{text}</Text>
    </View>
);

const data = [1,2,3,4,5,6,7,8,9,10]
export default () => {
    return (
        <ScrollView>
            {data.map((item, index)=>(
                <Square key={item} text={`Square ${index+1}`}/>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
   
    box:{
        width: 100,
        height:100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    }
})