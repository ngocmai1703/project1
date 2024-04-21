import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const  Bth1 =()=> {
  return (
    <View style={styles.container}>
      <Text style = {styles.Text}>Hello word</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default Bth1

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    alignItems: "center",
    backgroundColor: "aqua",
    justifyContent: "center"
  },
  Text: {
    fontSize: 20,
    fontWeight: "bold",
  }
});