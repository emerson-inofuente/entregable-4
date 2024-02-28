import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemonName } from '../store/slices/pokemonName.slice';
import useFetch from '../hooks/useFetch';
import PokeCard from '../components/pokedexPage/PokeCard';
import SelectType from '../components/pokedexPage/SelectType';
import './styles/pokedexPage.css';

const PokedexPage = () => {

    const [selectValue, setselectValue] = useState('allPokemons');
    const trainerName = useSelector(store => store.trainerName);
    const pokemonName = useSelector(store => store.pokemonName);
    const dispatch = useDispatch();
    const [ pokemons, getPokemons, getPerType] = useFetch();

    useEffect(() => {
        if (selectValue==='allpokemons') {
            const url = 'https://pokeapi.co/api/v2/pokemon/?limit=30';
            getPokemons(url);
        } else {
            getPerType(selectValue);
        }
    }, [selectValue]);

    const textInput = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setPokemonName(textInput.current.value.trim().toLowerCase()));
        textInput.current.value = '';
    }

    const cbFilter = () => {
        if (pokemonName) {
            return pokemons?.results.filter(element => element.name.includes(pokemonName));
        } else {
            return pokemons?.results;
        }
    }
    
  return (
    <div className='pokedex'>
        <section className='poke__header'>
            <h3><span>Bienvenido {trainerName}, </span> Aqui podras encontrar tu pokemon favorito</h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" ref={textInput}/>
                    <button className="capturar-button">Capturar</button>
                </form>
                <SelectType
                    setselectValue={setselectValue}
                />
            </div>
        </section>
        <section
        className='poke__container'
        >
            {
                cbFilter()?.map(poke => (
                    <PokeCard
                    key={poke.url}
                    url={poke.url}
                    />
                ))
            }
        </section>
    </div>
  )
}

export default PokedexPage;