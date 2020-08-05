import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  --webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCriptocurrency = (label, initState, opts) => {
  const [state, setState] = useState(initState);
  
  const SelectCripro = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select
        onChange={e => setState(e.target.value)}
        value={state}
      >
        <option value="">- Seleccionar -</option>
        {
          opts.map(item => (
            <option key={item.CoinInfo.Id} value={item.CoinInfo.Name}>{item.CoinInfo.FullName}</option>
          ))
        }
      </Select>
    </Fragment>
  );

  return [state, SelectCripro, setState];
}

export default useCriptocurrency;
