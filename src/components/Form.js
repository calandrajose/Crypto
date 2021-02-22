import React, {useEffect} from 'react';
import styled from '@emotion/styled'
import useCurrency from '../hooks/useCurrency'
import useCryptocurrency from '../hooks/useCrypto'
import axios from 'axios'

const Button = styled.button`
margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`

const Form = () => {
    const currencyS = [
        {code: 'USD', currencyName: 'Dolar Estadounidense'},
        {code: 'ARG', currencyName: 'Peso Argentino'},
        {code: 'MXN', currencyName: 'Peso Mexicano'},
        {code: 'EUR', currencyName: 'Euro'},
        {code: 'GBP', currencyName: 'Libra Esterlina'},
    ]

    const [currency, SelectCurrency,setCurrency] = useCurrency('Elige tu moneda', '', currencyS)
    const [crypto, SelectCrypto,setCrypto] = useCryptocurrency('Elige tu criptomoneda', '', currencyS)
    
    useEffect(() => {
        axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD')
    }, [])

    const onSubmitHandler=()=>{

    }

    return (
        <form>
            <SelectCurrency/>
            <SelectCrypto/>
            <Button
                onSubmit={onSubmitHandler} 
                type='submit'
            >Calcular</Button>
        </form>
    );
};

export default Form;