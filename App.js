import {AsyncStorage} from 'react-native';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Cadastro</Text>
      <TextInput placeholder="Digite o nome do produto" style={styles.input} />
      <TextInput placeholder="Digite o preço do produto" style={styles.input}/>

      <TouchableOpacity style={styles.btn}>
        <Text style={{color: '#fff', fontSize: 20}}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 10
  },
  input: {
    borderWidth: 1,
    width: 300,
    height: 30,
    borderRadius: 5,
    paddingLeft: 5
  },
  btn: {
    borderWidth: 1,
    width: 300,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#000',
    textAlign:'center'
  },
});
