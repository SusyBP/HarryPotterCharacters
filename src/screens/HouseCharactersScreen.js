
import React, { useState, useEffect } from 'react'
import { SafeAreaView} from 'react-native'
import { getHouseCharactersApi } from '../api/characters'
import CharactersList from '../components/CharactersList'

const defaultCharacterImageUri = 'https://www.gravatar.com/avatar/?s=200&d=mp';

export default function HouseCharactersScreen(props) {
  const { navigation, route: { params } } = props;
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    (async () => {
      await loadCharacters()
    })()//autoexecutable anonymus function ()()
  }, [])

  const loadCharacters = async () => {
    try {
      setIsLoading(true)
      const response = await getHouseCharactersApi(params.name);

      const charactersArray = []
      for await (character of response) {

        charactersArray.push({
          id: character.id,
          name: character.name,
          dateOfBirth: character.dateOfBirth,
          wizard: character.wizard,
          gender: character.gender,
          image: character.image ? character.image : defaultCharacterImageUri,
          colors: params.colors,
          bgImage: params.bgImage,
          houseImage: params.houseImage
          ,
        })
      }

      setCharacters([...charactersArray])
    } catch (error) {
      console.error(error)
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
    <SafeAreaView >
      <CharactersList characters={characters} loadCharacters={loadCharacters} isLoading={isLoading}></CharactersList>
    </SafeAreaView>
  )
}
