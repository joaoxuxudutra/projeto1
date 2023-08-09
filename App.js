import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput,  } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
        <View>
        <Text>Moeda 1</Text>
        <TextInput placeholder='Digite um numero' style={styles.input}/>

        <Text>Moeda 1</Text>
        <TextInput placeholder='Digite um numero' style={styles.input}/>

          

        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#84E1DF',
    padding: 8,
  },
  
  input:{
    color:'#000',
    fontSize: 19,
    height: 50,
    padding: 10,
    width: 180,
    justifyContent: 'center',
    textAlign: 'center',
  },

  },
);
