import React, { useState } from "react";
import { Text, Button, View, StyleSheet } from "react-native";

const Square =({text, bgcolor ='#7ce0f9'}) =>(
    <View style={[styles.box, {backgroundColor: bgcolor}]}>
        <Text>{text}</Text>
    </View>
);

export default () => {
    return (
        <View style={styles.container}>
            <Square text={"Square 1"}/>
            <Square text={"Square 1"} bgcolor="#4dc2c2"/>
            <Square text={"Square 1"} bgcolor="#ff637c"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    box:{
        width: 100,
        height:100,
        justifyContent: 'center',
        alignItems: 'center'
    }
})