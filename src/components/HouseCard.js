import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function HouseCard({ house }) {

    const { id, name, colors, houseImage, bgImage } = house;
    const navigation = useNavigation()

    const bgStyles = { backgroundColor: colors.primary, ...styles.bgStyles };

    const goToHouse = () => {
        navigation.navigate("HouseCharactersScreen", { id, name, colors, houseImage, bgImage })
    }
    return (
        <TouchableWithoutFeedback onPress={goToHouse}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgStyles}>
                        <View style={styles.stripe}><Text></Text></View>
                        <Text style={styles.name}>{name}</Text>
                        <View style={styles.imageContainer}>
                            <Image source={house.houseImage} style={styles.image} />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 300,
    },
    spacing: {
        flex: 1,
        padding: 2,
    },
    bgStyles: {
        flex: 1,
        padding: 7,
        borderRadius: 5,
        overflow: 'hidden'
    },
    imageContainer: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        borderColor: 'black'
    },
    image: {
        position: 'absolute',
        bottom: 40,
        height: '60%',
        width: 110,
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        paddingTop: 10,
        left: 10,
        textTransform: 'uppercase',
        fontWeight: '250'
    },
    order: {
        position: 'absolute',
        fontSize: 11,
        right: 10,
        top: 10,
        color: '#fff',
    },
    stripe: {
        position: 'absolute',
        top: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        width: '110%',
        height: 60
    }
})