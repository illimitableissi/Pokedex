import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const PokemonDetails = (props) => {
    return (
        <div>
            <Card style={{width: '11rem', margin: '2px' }}>
                <Card.Img variant="top" src={props.image}/>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        ID: {props.id}
                    </Card.Text>
                    <Card.Text>
                        Experience: {props.information}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PokemonDetails;