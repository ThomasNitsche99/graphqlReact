import {useLazyQuery, gql} from '@apollo/client'

const GET_CHARACTER = gql`

  query GetCharater($id: ID!){
    character(id: $id) {
      name
      id
      image
      episode{
        name
        episode
      }
    }
  }
`;


export const useLazyCharacter = (id) =>{
    const [getCharacter, error, data, loading] = useLazyQuery(GET_CHARACTER, {
        variables: {
            id
        }
    });

    return {getCharacter,error, data, loading};

}