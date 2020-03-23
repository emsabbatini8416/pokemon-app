import axios from "axios"
import {
    getPokemonsStarted,
    getPokemonsSuccess,
    pokemonsError
} from "."

export const getPokemons = () => dispatch => {
  dispatch(getPokemonsStarted())
  axios.get("http://localhost:5000/api/pokemon")
  .then(response => {
    if (response.status === 200) {
      dispatch(getPokemonsSuccess(response.data))
    } else {
      dispatch(pokemonsError(""))
    }
  })
  .catch((err) => {
    dispatch(pokemonsError("There was an error in the server."))
  })
}
