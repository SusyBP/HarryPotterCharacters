import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, ImageBackground } from 'react-native'
import { getCharacterDetailsApi } from '../api/characters';
import Header from '../components/Character/Header';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/FontAwesome5";
import CharacterDescription from '../components/Character/CharacterDescription';

export default function CharacterScreen(props) {

    const { navigation, route: { params } } = props;
    const [character, setCharacter] = useState(null)
    const bgStyle = { backgroundColor: params.colors.primary }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => null,
            headerLeft: () => <Icon name="arrow-left"
                size={20}
                style={{ marginLeft: 20 }}
                color="#000"
                onPress={() => navigation.goBack()} />
        }
        )
    }, [navigation, params])
    useEffect(() => {
        (async () => {
            try {
                const response = await getCharacterDetailsApi(params.id)
                setCharacter(response[0])
            } catch (error) {
                navigation.goBack()
            }
        })()
    }, [params])

    if (!character) return null;

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={bgStyle}>
                <Image source={require('../../assets/bgpattern.png')} style={styles.bgImage} />
                <Header
                    id={character.id}
                    image={character.image}
                    houseImage={params.houseImage}
                    bgImage={params.bgImage}
                    colors={params.colors}
                />
                <CharacterDescription
                    id={character.id}
                    colors={params.colors}
                    name={character.name}
                    aliases={character.alternate_names}
                    dob={character.dateOfBirth}
                    gender={character.gender}
                    wizard={character.wizard ? 'true' : 'false'}
                    ancestry={character.ancestry}
                    hogwartsStaff={character.hogwartsStaff ? 'true' : 'false'}
                    hogwartsStudent={character.hogwartsStudent ? 'true' : 'false'}
                    patronus={character.patronus}
                    wand={character.wand}
                    actor={character.actor}
                    alive={character.alive ? 'true' : 'false'}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    bgImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '180%',
        height: '100%',
        zIndex: -1,
        resizeMode: 'repeat'

    },
})