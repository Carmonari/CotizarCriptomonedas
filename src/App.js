import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import image from './cryptomonedas.png';
import Form from './components/Form';
import Quote from './components/Quote';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

const App = () => {
  const [coin, setCoin] = useState('');
  const [criptoCurrency, setCriptoCurrency] = useState('');
  const [result, setResult] = useState({});

  useEffect(() => {
    if(coin === '') return;

    const quoteCrypto = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCurrency}&tsyms=${coin}`;
  
      const res = await axios.get(url);
      setResult(res.data.DISPLAY[criptoCurrency][coin]);
    }

    quoteCrypto();
  }, [coin, criptoCurrency]);

  return (
    <Contenedor>
      <div>
        <Image
          src={image}
          alt="Criptos"
        />
      </div>
      <div>
        <Heading>Consulta de criptomonedas</Heading>
        <Form
          setCoin={setCoin}
          setCriptoCurrency={setCriptoCurrency}      
        />
        <Quote
          result={result}
        />
      </div>
    </Contenedor>
  );
}

export default App;
