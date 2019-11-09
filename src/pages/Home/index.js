import React, {useState} from 'react';
import api from '../../services/api';
import chuck from '../../assets/images/chuck.png';

import { Container } from './styles';

export default function Home() {

    const [phrase, setPhrase] = useState('');

    async function loadLerolero() {
      const response = await api.get();
      setPhrase(response.data.value);
    }

  return (
    <Container>
        <h2>Chuck Norris Lero Lero</h2>
        <img src={chuck} alt="Chuck Norris"/>

        {phrase}
        
        <button onClick={loadLerolero}>Generate</button>
    </Container>
  );
}
