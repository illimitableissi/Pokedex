import React from 'react';
import PokemonDetails from '../Components/PokemonDetails'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import logo from'../images/pokemon-Logo.png'

class MainPage extends React.Component {

    state = {
        pokemon: [],
        pokemonEntries: [],
    }

componentDidMount () {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=30/")
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
    const {pokemonEntries} = this.state
    return (
        <div>
            <Container>
                <img src={logo} alt="logo" style={{ width: '30rem'}}/>
                <Row>
                    {pokemonEntries.map(j =>
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