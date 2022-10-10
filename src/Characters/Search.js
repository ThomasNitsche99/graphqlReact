import React, { useState } from 'react'
import { gql, useLazyQuery} from '@apollo/client';

//lazyQuery returns an array, not an object

const GET_CHARACTER_LOCATIONS = gql`
    query GetCharaterLocations($name:String!){
        characters(filter: {name: $name }) {
            results{
                location{
                    name
                }
            }
        }
    }
`

export default function Search() {
    const[name, setName] = useState("");
    //lazyQuery vil gi deg alt det samme, men også en funksjon som du kan bruke for å faktisk hente dataen. 
    //Dette betyr at queryen er spesifisert, men du kan lagre funksjonen som vil trigge å faktisk hente dataen! GENIALT
    const [getLocations, {loading, error, data, called} ] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
        variables: {
            name
        }
    })


    return (
        <div>
            <input value={name} onChange={(e)=> setName(e.target.value)}></input>
            <button onClick={()=> getLocations()}>Search</button>
            {loading && <div>spinner..</div>}
            {error && <div>something went wrong!</div>}
            {data && 
            
                <ul>
                    {data.characters.results.map( (character) => {
                        return(
                            <li>
                                {character.location.name}
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
  )
}
