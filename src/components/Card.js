import React from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Card = ({data}) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image 
                    source={{uri:data.urlToImage}}
                    style={styles.image}
                />
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#e0e0e0'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 15,
        margin: 5,
        marginVertical: 8
    },
    description:{
        margin: 5

    },
    image:{
        height: Dimensions.get("window").height * 0.25,
        borderRadius: 10,
        resizeMode: 'contain',
       
        
    }
})

export {Card}
