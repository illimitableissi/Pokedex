import React from 'react';
import Modal from 'react-bootstrap/Modal'

class Pokemon extends React.Component {

    state = {
        pokemon: [],
        abilities: [],
        moves: [],
        img:'',
        show: false
    }

    componentDidMount () {
        fetch("https://pokeapi.co/api/v2/pokemon/1/")
        .then(res => res.json())
        .then(response => {
            this.setState({ 
                pokemon: response,
                abilities: response.abilities,
                moves:  response.moves,
                img: response.sprites
            })
            console.log(this.state.pokemon)})
            .catch(err => console.log(err));
        }
    
    showModal = () => {
        this.setState({ show: true})
    }
    
    closeModal = () => {
        this.setState({ show: false})
    }

    render (){
        const { pokemon, abilities, moves, img, show} = this.state;
        return (
            <div>
                <img src={img.front_default} alt='sprite' />
                <Modal show={show}>
                    <h1>Stats</h1>
                    <h2>Abilities</h2>
                    {abilities.map(j => 
                    <p>{j.ability.name}</p>
                    )}
                    <p>Base Experience: {pokemon.base_experience}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <p>Height: {pokemon.height}</p>
                    <h2>Moves: </h2>
                    {moves.map(i => 
                     <p>{i.move.name}</p>
                    )}
                    <button onClick={this.closeModal}>Close</button>
                </Modal>
                <h1>{pokemon.name}</h1>
                <button onClick={this.showModal}>Click here for more details</button>
            </div>
        )
    };

}

export default Pokemon;