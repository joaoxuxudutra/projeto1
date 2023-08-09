import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';


export default function App() {

  const[moedaOrigem, setMoedaOrigem] = useState('')
  const[moedaDestino, setMoedaDestino] = useState('')

  return (
      <View style={styles.container}>
        <View style={styles.content}>
        <Text>Moeda 1</Text>
        <TextInput placeholder='moeda 1' style={styles.input}/>

        <Picker
          selectedValue= {moedaOrigem}
          onValueChange={(itemValue, itemIndex) => setMoedaOrigem(itemValue)}
          >
            <Picker.Item label="" value=""/>
            <Picker.Item label="" value=""/>
            <Picker.Item label="" value=""/>
            <Picker.Item label="" value=""/>

        </Picker>

        

        <Text>Moeda 2</Text>
        <TextInput placeholder='moeda 2' style={styles.input}/>

        <Picker
           selectedValue= {moedaDestino}
           onValueChange={(itemValue, itemIndex) => setMoedaDestino(itemValue)}
        >
          <Picker.Item label="" value=""/>
          <Picker.Item label="" value=""/>
          <Picker.Item label="" value=""/>
          <Picker.Item label="" value=""/>

        </Picker>

          <Pressable style={styles.botao}>
              <Text style={styles.botaoTexto}>Calcular</Text>
          </Pressable>
              <Text>Resultado</Text>

        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
    color: '#000'
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#84E1DF',
    
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

  botaoTexto: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    elavation: 3,
    backgroundColor: 'white',
    marginTop: 10,
    height: 60,
  },
  textoBotao: {
    color: 'black'
  },
  botaoResultado:{
     flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    elavation: 3,
    backgroundColor: 'white',
    marginTop: 10,
    height: 60,
  },

  },
);
