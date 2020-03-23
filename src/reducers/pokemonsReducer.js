import {
    GET_POKEMONS_STARTED,
    GET_POKEMONS_SUCCESS,
    POKEMONS_ERROR,
    SET_FILTER_NAME
    } from "../actions/pokemons/types"
  
  const initialState = {
    pokemons: [],
    filterName: '',
    message: ''
  };
  
  const pokemonsReducer = (state = initialState, action) => {
      switch (action.type) {
          case GET_POKEMONS_STARTED: {
              return {
                ...state
              }
          }
          case GET_POKEMONS_SUCCESS: {
              return {
                ...state,
                pokemons: action.payload.pokemons
              }
          }
          case SET_FILTER_NAME: {
            return {
              ...state,
              filterName: action.payload.filter
            }
          }
          case POKEMONS_ERROR: {
              return {
                ...state,
                message: action.payload.message
              }
          }
          default:
              return state;
      }
  };
  
  export default pokemonsReducer;
  