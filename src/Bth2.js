import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function Bth2() {
  return (
    <View style={styles.container}>
      <Button title='Button 1' onPress={()=> alert("hello!")}/>
      <TouchableOpacity style = {styles.button}>
        <Text style = {styles.Text}>Button 2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center"
  },
  button:{
    backgroundColor: 'Blue',
    marginTop: 10,
    alignItems: "center",
    padding: 10
  },
  Text: {
    color: "white",
    fontSize: 18,
  }
});