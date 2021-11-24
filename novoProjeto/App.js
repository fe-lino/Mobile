
import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  Touchable,
  View,
} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

import api from './src/services/api';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        diagnostico : []
      };
  };

  buscarDiag = async () =>{
    const resposta = await api.get('/DiagnosticoSp')
    const dadosDaApi = resposta.data;
    this.setState({ diagnostico : dadosDaApi })
  };

  componentDidMount(){
    this.buscarDiag();
  }

  render(){
    return (
      <View style={styles.main}>
        {/*Header*/ }
        <View style={styles.mainHeader}>

          <View style={styles.mainHeaderRow}>
            {/* <Text style={styles.texto}>SP Medical</Text> */}
            <Button onPress={() => {alert('não tem menu ainda');}} title="Press Me"/>
            <Text style={styles.texto}>{"Diagnosticos".toLocaleUpperCase()}</Text>
            {/* Text style={styles.texto}>Atendimento</Text>< */}
          </View>

        </View>

      </View>
    );
  }
};

const styles = StyleSheet.create({

  main: {
    flex: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainHeader:{
    flex: 1,
    width:411, 
  },
  
  mainHeaderRow:{
    padding:5,
    backgroundColor:"#004186",
    justifyContent:'space-evenly',
    alignItems:'center',
    flexDirection:"row",
    height:50,
  },

  texto:{
    color: 'white',
    fontSize:15,
    fontFamily:'Red Hat Text', 
    fontWeight:'bold',
  },

});

export default App;
