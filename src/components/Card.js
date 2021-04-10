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
        marginVertical: 10
    },
    title:{
        fontWeight: 'bold',
        fontSize: 15
    },
    description:{

    },
    image:{
        height: Dimensions.get("window").height * 0.3,
        width: Dimensions.get("window").width
    }
})

export default Card
