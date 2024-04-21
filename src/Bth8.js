import React, { useState } from "react";
import { Text, Button, View, StyleSheet, SafeAreaView, SectionList } from "react-native";



const  groupPeopleByLastName = (_data) =>{
    const data = [..._data];
    const groupedData = data.reduce((accumlator, item)=>{
        const group = item.name.last[0].toUpperCase();
        if(accumlator[group]){
            accumlator[group].data.push(item);
        }
        else{
            accumlator[group] ={
                title: group,
                data: [item]
            }
        }
        return accumlator;

    }, {});
    const sections = Object.keys(groupedData).map((key)=>{
        return groupedData[key];
    });
    return sections.sort((a,b)=>{
        if(a.title> b.title){
            return 1;
        }
            return -1;
    });
};


export default () => {
    
    return (
        <SafeAreaView>
            <SectionList
                sections={groupPeopleByLastName(PEOPLE)}
                keyExtractor={(item)=>`${item.name.first}-${item.name.last}`}
                renderSectionHeader={({section})=>{
                    return (
                        <View style={styles.setionHeader}>
                            <Text>{section.title}</Text>
                        </View>
                    )
                }}
                renderItem={({item})=>{
                    return(
                        <View style={styles.row}>
                        <Text style={styles.name}>
                            {item.name.first} {item.name.last}
                        </Text>
                    </View>
                    )
                }}
                ItemSeparatorComponent={()=> <View style={styles.separator}/>}
            
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   row:{
    paddingHorizontal: 10,
    paddingVertical: 10
   },
   name:{
    fontSize: 16
   },
   separator:{
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 1
   },
   setionHeader:{
   paddingHorizontal: 10,
   paddingVertical: 10,
   backgroundColor: "rgb(170, 170, 170))"
   }
});
const PEOPLE = [
    {
        name:{
            title: "Ms",
            first: "Maeva",
            last: "Scott"
        }
    },
    {
        name:{
            title: "Ms",
            first: "Haha",
            last: "Henry"
        }
    },
    {
        name:{
            title: "Mr",
            first: "Mohamoud",
            last: "Faaij"
        }
    }
]