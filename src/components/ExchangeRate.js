import React from 'react';
import styled from '@emotion/styled'

const Result = styled.div`
    color: #fff;

`
const Info = styled.p`
    font-size: 18px;
    span{
        font-weight: bold;
    }
`
const Price = styled.p`
    font-size: 30px;
`

const ExchangeRate = ({result}) => {
    if(Object.keys(result).length === 0) return null;
    
    return (
        <Result>
            <Price>Cotizacion: <span>{result.PRICE}</span></Price>   
            <Info>Cotizacion mas alta del dia: <span>{result.HIGHDAY}</span></Info>   
            <Info>Cotizacion mas baja del dia: <span>{result.LOWDAY}</span></Info>   
            <Info>Variacion de las ultimas 24 hs: <span>{result.CHANGEPCT24HOUR}</span></Info>   
            <Info>Ultima actualizacion: <span>{result.LASTUPDATE}</span></Info>   
        </Result>
    );
};

export default ExchangeRate;