import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react';

export default function Header(props) {
    const {image, colors} = props;

    return (
        <>
            <View style={styles.bg} />
            <SafeAreaView style={styles.content}>
                <View style={styles.contentImg}>
                    <Image source={{ uri: image }} style={[styles.image, {borderColor: colors.secondary}]} />
                </View>
            </SafeAreaView >
        </>
    )
}

const styles = StyleSheet.create({
    bgImage: {
        position: 'absolute',
        width: '100%',
        height: 500,
        zIndex: -1
    },
    bgImage2: {
        position: 'absolute',
        width: 100,
        height: 130,
        marginTop: 20,
        marginLeft: 20,
    },
    content: {
        marginHorizontal: "20",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 40
    },
    order: {
        color: "#000",
        fontWeight: "bold",
    },
    contentImg: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: 0
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "cover",
        borderRadius: 100,
        marginTop: 30,
        borderWidth: 5, 
        borderRadius: 100
    },
})