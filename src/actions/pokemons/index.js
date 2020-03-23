import {
    GET_POKEMONS_STARTED,
    GET_POKEMONS_SUCCESS,
    POKEMONS_ERROR,
    SET_FILTER_NAME,
    } from "./types"
  
  export const getPokemonsStarted = () => ({
    type: GET_POKEMONS_STARTED
  })
  
  export const getPokemonsSuccess = data => ({
    type: GET_POKEMONS_SUCCESS,
    payload: {
      pokemons: data
    }
  })

  export const setFilterName = filter => ({
    type: SET_FILTER_NAME,
    payload: {
      filter
    }
  })
  
  export const pokemonsError = message => ({
    type: POKEMONS_ERROR,
    payload: {
      message
    }
  })    