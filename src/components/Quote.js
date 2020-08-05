import React from 'react';
import styled from '@emotion/styled';

const ResultDiv = styled.div`
  color: #FFF;
`;

const Info = styled.p`
  font-size: 18px;

  span {
    font-weight: bold;
  }
`;

const Price = styled.p`
  font-size: 35px;
  span {
    font-weight: bold;
  }
`;

const Quote = ({result}) => {
  if(Object.keys(result).length === 0) return null;

  return (
    <ResultDiv>
      <Price>El precio es: <span>{result.PRICE}</span></Price>
      <Info>El precio más alto del día es: <span>{result.HIGHDAY}</span></Info>
      <Info>El precio más bajo del día es: <span>{result.LOWDAY}</span></Info>
      <Info>Variación últimas 24hrs: <span>{result.CHANGEPCT24HOUR}</span></Info>
      <Info>Última actualización: <span>{result.LASTUPDATE}</span></Info>
    </ResultDiv>
  )
}

export default Quote;
