import React from 'react';
import PokemonDetails from '../Components/PokemonDetails'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

class MainPage extends React.Component {

    state = {
        pokemon: [],
        pokemonEntries: [],
    }

componentDidMount () {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151/")
    .then(res => res.json())
    .then(response => this.setState({
        pokemon: response.results}, () => {
        this.state.pokemon.map(i => {
            fetch(i.url)
            .then(res => res.json())
            .then(data => {
                var temp = this.state.pokemonEntries
                temp.push(data)
                this.setState({pokemonEntries: temp})
              }
            )            
        .catch(err => console.log(err));
        })
    }
    ))
    
    .catch(err => console.log(err));
}

render() {
    const {pokemon, pokemonEntries, pokemonUrls} = this.state
    return (
        <div>
            <h1>Pokedex</h1>
            <Container>
                <Row>
            {pokemonEntries.map( j =>
            <PokemonDetails 
                image = {j.sprites['front_default']}
                name = {j.name.toUpperCase()}
                id = {j.id}
                information = {j.base_experience}
            />
                )}
            </Row>
            </Container>
        </div>
    )
}

}

export default MainPage;