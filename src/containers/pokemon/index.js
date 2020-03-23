import { connect } from 'react-redux';
import Pokemon from './Pokemon';

import {
    getPokemons
} from '../../actions/pokemons/creators'

import {
    setFilterName
} from '../../actions/pokemons'

const mapStateToProps = state => {
    const {pokemons, filterName} = state.pokemons
    return {
       pokemons: pokemons.filter(pokemon => pokemon.name.startsWith(filterName)) 
    }
};

const mapDispatchToProps = dispatch => ({
    getPokemons: () => dispatch(getPokemons()),
    setFilterName: filter => dispatch(setFilterName(filter))

});

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);