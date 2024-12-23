import { FlatList, StyleSheet, Platform, View, useColorScheme } from 'react-native'
import React from 'react'
import HouseCard from '../components/HouseCard';
import HogwartsCard from '../components/HogwartsCard';

export default function HouseScreen() {
    const houses = [
        { id: 1, name: 'Gryffindor', colors: { primary: "#7f0909", secondary: "#d3a625" }, houseImage: require('../../assets/GryffindorShield.png')},
        { id: 2, name: 'Slytherin', colors: { primary: "#1a472a", secondary: "#d3a625" }, houseImage: require('../../assets/SlytherinShield.png')},
        { id: 3, name: 'RavenClaw', colors: { primary: "#0e1a40", secondary: "#d3a625" }, houseImage: require('../../assets/RavenclawShield.png')},
        { id: 4, name: 'HufflePuff', colors: { primary: "#ecb939", secondary: "#726255" }, houseImage: require('../../assets/HufflePuffShield.png')},
    ]

    return (
        <View>
            <FlatList style={styles.flatList}
                data={houses}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (<HouseCard house={item} />)}
                contentContainerStyle={styles.flatListContentContainer}
            >
            </FlatList>
            {/* <HogwartsCard></HogwartsCard> */}
        </View>
    )
}
const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 3,
        marginTop: Platform.OS === "android" ? 10 : 0,
    },
    flatList: {
        marginBottom: 100
    },
    spinner: {
        margingTop: 50,
        marginBottom: 50
    }
})