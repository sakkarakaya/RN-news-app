import React from 'react';
import {SafeAreaView, Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import {Button, Input} from './components';


const Login = () => {
    return (
        <SafeAreaView>
            <View>
                <Image 
                source={require('./assets/logo.png')}
                style={styles.image}
                />

                <Input holder='Email...'/>
                <Input holder='Password...'/>

                <Button/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width,
        marginTop: 50,
        marginBottom:50
    }
})

export default Login
