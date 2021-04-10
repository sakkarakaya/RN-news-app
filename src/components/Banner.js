import React from 'react';
import { ScrollView, StyleSheet, Dimensions, Image } from 'react-native';

bannerlist = [
    {
        id: 0,
        url: "https://customerthink.com/wp-content/uploads/businessman-2606506_1920-pixabay-sales-process-technology.jpg"
    },
    {
        id: 1,
        url: "https://cleantechnica.com/files/2019/09/201908-tesla-autopilot-sunlight-camera-safety-blind-KYLE-e1607147520556.jpg"
    },
    {
        id: 2,
        url: "https://www.newsbtc.com/wp-content/uploads/2019/01/crypto-stocks-real-estate-shutterstock_716335063.jpg"
    },
    {
        id: 3,
        url: "https://247wallst.com/wp-content/uploads/2019/01/gettyimages-933052786.jpg"
    },
]

const Banner = (props) => {
    return (

        <ScrollView horizontal>
            {bannerlist.map((i) => {
                return <Image
                    source={{ uri: i.url }}
                    style={styles.image}
                />
            })}



        </ScrollView>

    )
}


const styles = StyleSheet.create({
    image: {
        height: Dimensions.get('window').height * 0.2,
        width: Dimensions.get('window').width * 0.85,
        margin: 5,
        borderRadius: 15
    }
})

export { Banner }
