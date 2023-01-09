import { useState, useEffect } from 'react';
import { StyleSheet, Text, Button, ScrollView, Pressable, Image } from 'react-native';

const API = {
    POKEDEX: 'https://pokeapi.co/api/v2/pokedex/2/',
    POKEMON: 'https://pokeapi.co/api/v2/pokemon/'
}


export default ({}) => {
    const [pokemons, setPokemons] = useState([]);

    (function fetchPokemon() {
        fetch(API.POKEDEX).then(r => r.json()).then(data => {
            const results = data.pokemon_entries.map(({pokemon_species, entry_number}) => ({key: pokemon_species.name, id: entry_number }))
            Promise.all(results.map(({id}) => fetch(API.POKEMON + id).then(r => r.json()))).then((data2)=>{
                setPokemons(data2);
            });
        });
    })()

    return <>
        <ScrollView style={styles.listPokemon}>
            {pokemons.map(pokemon => (
                <Pressable key={pokemon.species.name}>
                    <Image source={{ uri: pokemon.sprites.front_default}} style={styles.image}></Image>
                    <Text key={pokemon.species.name}>{pokemon.species.name}</Text>
                </Pressable>
            ))}
        </ScrollView>
    </>
};


const styles = StyleSheet.create({
    listPokemon: {
      backgroundColor: 'lightgray',
      overflow: 'scroll',
    },
    image: {
        height: 200,
        width: 200,
    }
});