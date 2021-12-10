import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';

class consultas extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>TESTE TESTE</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default consultas;