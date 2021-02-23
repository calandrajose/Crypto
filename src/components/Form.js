import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled'
import useCurrency from '../hooks/useCurrency'
import useCryptocurrency from '../hooks/useCrypto'
import axios from 'axios'
import {toggleState} from '../utility'
import Error from './Error'

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

const Form = ({saveCurrency, saveCrypto, setLoading}) => {
    const [cryptos, setCryptos] = useState([])
    const [error, setError] = useState(false)

    const currencies = [
        { code: 'USD', currencyName: 'Dolar Estadounidense' },
        { code: 'ARG', currencyName: 'Peso Argentino' },
        { code: 'MXN', currencyName: 'Peso Mexicano' },
        { code: 'EUR', currencyName: 'Euro' },
        { code: 'GBP', currencyName: 'Libra Esterlina' },
    ]

    const [currency, SelectCurrency, setCurrency] = useCurrency('Elige tu moneda', '', currencies)
    const [crypto, SelectCrypto, setCrypto] = useCryptocurrency('Elige tu criptomoneda', '', cryptos)

    useEffect( () => {
        const fetchAPI = async ()=>{
            const response = await axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD');
            setCryptos(response.data.Data);
        }
        fetchAPI()

    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if(currency.trim() === '' || crypto.trim() === ''){
            toggleState(2000, setError)
            return;
        }
        toggleState(1500, setLoading)
        saveCrypto(crypto)
        saveCurrency(currency)
    }

    return (
        <form
            onSubmit={onSubmitHandler}
        >
            {error ? <Error message='Hay un error'/> : null}
            <SelectCurrency />
            <SelectCrypto />
            <Button
                type='submit' >
                Calcular
        </Button>
        </form>
    );
};

export default Form;
