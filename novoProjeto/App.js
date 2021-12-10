import 'react-native-gesture-handler';

import React, {Component} from 'react';

import NavigationContainer from '@react-navigation/native';
import createStackNavigator from '@react-navigation/stack';

import {StatusBar, StyleSheet} from 'react-native';

import login from './pages/login'
import consultas from './pages/consultas';
import consultasMED from './pages/consultasMED';

const AuthStack = createStackNavigator();

class App extends Component {
    render() {
      return(
        <NavigationContainer>
        <StatusBar
          hidden={true}
        />
        <AuthStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <AuthStack.Screen name="login" component={login} />
          <AuthStack.Screen name="consultas" component={consultas} />
          <AuthStack.Screen name="consultasMED" component={consultasMED} />
        </AuthStack.Navigator>
      </NavigationContainer>
      );
    }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  }
});

export default App;