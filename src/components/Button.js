import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Dimensions} from 'react-native'

const Button = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'turquoise',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        marginVertical: 20,
        width: Dimensions.get('window'). width * 0.5,
        alignItems: 'center',
        alignSelf: 'center'
    },
    text:{

    }
})

export {Button}
