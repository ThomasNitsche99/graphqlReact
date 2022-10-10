import React from 'react'
import { useParams } from 'react-router';
import { useCharacter } from '../hooks/useCharacter'
import './Character.css'

export default function Character() {

    const { id } = useParams()
    const { data, loading, error } = useCharacter(id);

    if (loading) return <div>Spinner!</div>

    if (error) return <div>Something went wrong</div>

    return (
        <div className='character'>
            <img src={data.character.image} alt="picture" width={750} height={750} />
            <div className="character-content">
                <h1>{data.character.name}</h1>
                <p>{data.character.gender}</p>
            </div>
            <div className="character-episode">
                {data.character.episode.map(episode => {
                    return (
                        <div>
                            {episode.name} -<b>{episode.episode}</b>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
