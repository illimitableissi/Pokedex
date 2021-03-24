import React from 'react';

class MainPage extends React.Component {

    state = {
        pokemon: []
    }

componentDidMount () {
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(res => res.json())
    .then(response => this.setState({
        pokemon: response
    }))

    .catch(err => console.log(err));
}

render() {
    const [pokemon] = this.state
    console.log(pokemon)
    return (
        <div></div>
    )
}

}

export default MainPage;