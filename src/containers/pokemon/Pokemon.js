import React from 'react';
import ListPokemons from '../../components/pokemon/ListPokemons'
import './Pokemon.scss'

class PokemonContainer extends React.Component {
  constructor(props){
    super(props)
    props.getPokemons();
  }

  handlerSearch = e => {
    const { setFilterName } = this.props
    setFilterName(e.target.value)
  }

  render() {  
    const {
      pokemons
    } = this.props
    return (
        <div className="container">
          <div className="pokemon-container-filter">
            <input 
              className="form-control" 
              type="text" 
              placeholder="Search ..." 
              onChange={this.handlerSearch}
            />
          </div>
          <ListPokemons pokemons={pokemons} />
        </div>
    );
  }
}

export default PokemonContainer;