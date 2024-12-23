import { FlatList, StyleSheet, ActivityIndicator, Platform } from 'react-native'
import React from 'react'
import CharacterCard from './CharacterCard';

export default function CharactersList(props) {
    const { characters, isLoading } = props;

    return (
        <FlatList style={styles.flatList}
            data={characters}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (<CharacterCard character={item} />)}
            contentContainerStyle={styles.flatListContentContainer}
            onEndReahedThreshold={0.5}//Triggers when 50% of data is scrolled
            ListFooterComponent={isLoading && (<ActivityIndicator size='large' style={styles.spinner} color='#aeaeae' />)}
        >
        </FlatList>
    )
}
const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === "android" ? 5 : 0,
    },
    flatList: {
        marginBottom: 80
    },
    spinner: {
        margingTop: 50,
        marginBottom: 50
    }
})