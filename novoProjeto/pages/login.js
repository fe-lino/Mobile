
import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {
  Button,
  StyleSheet,
  Text,
  Touchable,
  View,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Input } from 'react-native-elements/dist/input/Input';
import { Header } from 'react-native/Libraries/NewAppScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../src/services/api';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
  }

  realizarLogin = async () => {
    //nao temos mais  console log.
    //vamos utilizar console.warn.

    //apenas para teste.
    console.warn(this.state.email + ' ' + this.state.senha);
    
    const resposta = await api.post('/login', {
      email: this.state.email, //ADM@ADM.COM
      senha: this.state.senha //senha123
    });
    
    if (resposta.status == 200){
      console.warn('funcionou')

      const token = resposta.data.token;
      await AsyncStorage.setItem('userToken', token);
  
      console.warn(jwtDecode(token));
      
      if (jwtDecode(token).idTipoUsuario == '3') {
        this.props.navigation.navigate('consultas');
      }

      if (jwtDecode(token).idTipoUsuario == '2') {
        this.props.navigation.navigate('consultasMED');
      }
  
      console.warn(token);
      
    }
    //mostrar no swagger para montar.


  };

  // buscarDiag = async () =>{
  //   const resposta = await api.get('/DiagnosticoSp')
  //   const dadosDaApi = resposta.data;
  //   this.setState({ diagnostico : dadosDaApi })
  // };

  // componentDidMount(){
  //   this.buscarDiag();
  // }

  render(){
    return (
        <View style={styles.main}>
        
          <View>

          {/* <Text style={styles.logoLogin}>
            SP Medical
          </Text> */}
          <Image 
          style={{width:300, height:300,}}
          source={require('../assets/Img/logospm.png')} />

        </View>

        <View style={styles.formLogin}>
          <TextInput style={styles.inputLogin} 
          placeholder="Usuario/Email" keyboardType='email-address'
          onChangeText={email => this.setState({email})}
          />

          <TextInput style={styles.inputLogin}
           placeholder="Senha"
           keyboardType='default'
           secureTextEntry={true}
           onChangeText={senha => this.setState({senha})} 
           />

          <TouchableOpacity
           onPress={this.realizarLogin}>
            <View style={styles.botaoLogin}>
              <Text style={styles.textoBotao}>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
     
    );
  }
};

const styles = StyleSheet.create({

  main: {
    flex: 1,
    backgroundColor: '#113f96',
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

  logoLogin:{
   flex:0.5,
   height:200,
   color:'white',
   fontFamily:'Red Hat Text', 
   fontWeight:'bold',
   fontSize:50,
  },

  formLogin:{
    height:250,
    justifyContent:'space-evenly',
    alignItems:'center',
  },

  inputLogin:{
    color:"#000",
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#000',
    borderWidth:2,
    borderRadius:5,
    backgroundColor:"#fff",
    width:350,
    height:40,
  },

  botaoLogin:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#82EB4E",
    borderWidth:2,
    borderRadius:5,
    height:30,
    width:100,
  },

  textoBotao:{
    color:'black',
    fontFamily:'Red Hat Text', 
  },
});

export default App;
