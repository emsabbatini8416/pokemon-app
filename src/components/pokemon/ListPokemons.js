import React from 'react';
import './ListPokemons.scss';

const ItemPokemon = ({pokemon}) => {
  return (
    <div className="media">
      <div className="media-left">
        <img src={pokemon.image} className="media-object" alt="" />
      </div>
      <div className="media-body">
        <h4 className="media-heading">{pokemon.name}</h4>
      </div>
    </div>
  )
}

const ListPokemons = ({pokemons}) => {
    return (
      <div>
        {
          pokemons.map((pokemon, index) => {
            return <ItemPokemon key={index} pokemon={pokemon}/>
          })
        }
      </div>
    )
}

export default ListPokemons;