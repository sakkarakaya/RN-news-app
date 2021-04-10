import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const Input = (props) => {
    const {holder} = props
    return (
        <View style={styles.container}>
            <TextInput 
            style={styles.text}
            placeholder={holder}
            placeholderTextColor='white'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    text: {
        backgroundColor: '#ff9800',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        color: 'white',
     
    }
})

export {Input}
