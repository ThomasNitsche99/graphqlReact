import React from 'react'
import { Link } from 'react-router-dom';
import { useCharacters } from '../hooks/useCharaters';
import './CharacterList.css'


export default function CharacterList() {

  const {error, loading, data} = useCharacters();

  if(loading) return <div>Spinner!</div>

  if(error) return <div>Something went wrong</div>

  

  return (
    <div className='char_list'>

      {data.characters.results.map(character =>{
        return(
          <Link to={`/${character.id}`}>
            <img src={character.image}></img>
            <h2>{character.name}</h2>   
          </Link>
        )
      })}


    </div>
  )
}
