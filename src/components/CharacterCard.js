import { StyleSheet, View, Text, Image, TouchableWithoutFeedback, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function CharacterCard({ character }) {
    const navigation = useNavigation()
    const secondaryColor = character.colors.secondary;
    const bgStyles = {};

    const goTocharacter = () => {
        navigation.navigate("CharacterScreen", { id: character.id, colors: character.colors, houseImage: character.houseImage, bgImage: character.bgImage })
    }
    return (
        <TouchableWithoutFeedback onPress={goTocharacter}>
            <SafeAreaView style={[styles.card, { backgroundColor: character.colors.primary }]}>
                <View style={styles.spacing}>
                    <View style={bgStyles}>
                        <View>
                            <View style={styles.stripe}><Text></Text></View>
                            <Image source={character.houseImage} style={{ ...styles.houseImage }} />
                            <Text style={{ ...styles.name }}>{character.name}</Text>                          
                            <Image src={character.image} style={{ ...styles.image, borderColor: secondaryColor }} />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130,
        padding: 1,
        margin: 2,
        borderRadius: 5,
    },
    spacing: {
        flex: 1,
        borderRadius: 5,
        overflow: 'hidden'
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
    },
    image: {
        position: 'absolute',
        top: 35,
        bottom: 7,
        right: 10,
        height: 80,
        width: 80,
        borderRadius: 50,
        borderWidth: 3, // Border thickness
        borderRadius: 50, // circle
    },
    houseImage: {
        position: 'absolute',
        top: 80,
        height: '100%',
        width: '30%',
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
        paddingTop: 12,
        left: 10,
        textTransform: 'capitalize',
        fontWeight: 120
    },
    circle: {
        position: 'absolute',
        marginLeft: 90,
        marginTop: 80,
        zIndex: 1
    },
    stripe: {
        position: 'absolute',
        top: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        width: '100%',
        height: 40
    }
})