import { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import * as S from './styles'

const getDigimons = gql`
  {
    digimons {
      id
      name
      img
      level
    }
  }
`;

function App() {
  const { data, loading, error} = useQuery(getDigimons);

  if (loading) return <p>Loading...</p>;
  if (error) return <pre>{error.message}</pre>

  return (
    <S.App>
    <select name='digimon'>
      {/* {data.digimons.map((digimon) => (
        <option key={digimon.id} value={digimon.name}>
          {digimon.name}
        </option>
      ))} */}
    </select>
    </S.App>
  )
}

export default App