import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

const PokedexIdPage = () => {

  const [ pokeData, getPokeData ] = useFetch();
  const param = useParams();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${param.id}`;
    getPokeData(url)
  }, [])

  return (
    <article>
        <img src={pokeData?.sprites.other['official-artwork'].front_default} alt='pokemon photo' />
        <h3>{pokeData?.name} </h3>
    </article>
  )
}

export default PokedexIdPage;