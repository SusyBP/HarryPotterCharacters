import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react';

export default function HogwartsCard() {

    const bgStyles = { backgroundColor: '#7f0909', ...styles.bgStyles };

    return (
        <TouchableWithoutFeedback>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgStyles}>
                        <View style={styles.stripe}><Text></Text></View>
                        <Text style={styles.title}>Welcome to Hogwarts</Text>
                        <Text style={styles.welcomeMessage}>"Welcome to Hogwarts School of Witchcraft and Wizardry,
                            where you'll embark on an incredible journey of magical learning,
                            make lifelong friends,
                            and discover the wonders of a world filled with spells, enchanted creatures,
                            and ancient mysteries".</Text>
                        <View  style={styles.welcomeMessageFooter}>
                            <Text style={styles.welcomeMessageAuthor}>Albus Dumbledore</Text>
                        </View>
                    </View>
                </View>
            </View >
        </TouchableWithoutFeedback >
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 0,
        height: 230,
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    bgStyles: {
        flex: 1,
        padding: 7,
        borderRadius: 5,
        overflow: 'hidden'
    },
    image: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        height: 110,
        width: 90,
    },
    title: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        paddingTop: 10,
        left: 10,
        textTransform: 'capitalize',
        fontStyle: 'italic',
        marginStart: 30
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
        height: 55
    },
    welcomeMessage: {
        paddingHorizontal: 35,
        fontStyle: 'italic',
        marginTop: 25,
         color: 'white'
    },
    welcomeMessageFooter:{
        flex:1,
        alignContent: 'flex-end',
        alignItems: 'flex-end',
    },
    welcomeMessageAuthor: {
        fontStyle: 'italic',
        paddingEnd: 40,
        color: 'white',
        fontSize: 13
    }
})