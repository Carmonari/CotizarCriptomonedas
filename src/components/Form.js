import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency';
import useCriptocurrency from '../hooks/useCriptocurrency';
import Error from './Error';

const Boton = styled.input`
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2FE;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #FFF;
  transition: background-color 3s ease;
  margin-top: 15px;

  &:hover {
    background-color: #326AC0;
    cursor: pointer;
  }
`;

const Form = ({setCriptoCurrency, setCoin}) => {
  const [listCripto, setListCripto] = useState([]);
  const [error, setError] = useState(false);

  const Currencies = [
    {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
    {codigo: 'MXN', nombre: 'Peso Mexicano'},
    {codigo: 'EUR', nombre: 'Euro'},
    {codigo: 'GBP', nombre: 'Libra Esterlina'},
  ]
  const [currency, SelectCurrency] = useCurrency('Elige tu moneda', '', Currencies);
  const [criptocurrency, SelectCripto] = useCriptocurrency('Elige tu criptomoneda', '', listCripto);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD';

      const res = await axios.get(url);
      setListCripto(res.data.Data);
    }
    consultarAPI();
  }, []);

  const quote = e => {
    e.preventDefault();
    if(currency === '' || criptocurrency === ''){
      setError(true);
      return;
    }
    setError(false);
    setCoin(currency);
    setCriptoCurrency(criptocurrency);
  }

  return (
    <form
      onSubmit={quote}
    >
      {error && <Error message="Todos los campos son obligatorios" />}
      <SelectCurrency />
      <SelectCripto />
      <Boton
        type="submit"
        value="Calcular"
      />
    </form>
  )
}

export default Form;
