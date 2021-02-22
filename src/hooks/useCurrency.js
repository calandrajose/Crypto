import React, { Fragment, useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight:bold;
    font-size: 2.4rem;
    display: block;
`
const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
    outline-style: none;
    &:focus {
        box-shadow: 0 0 0 2pt red;
    }
`

const useCryptocurrency = (label, initialState, options) => {
    const [state, setState] = useState(initialState)
    const SelectCoin = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => setState(e.target.value)}
                value={state}>
                {options.map(currency => (
                    <option
                        key={currency.code}
                        value={currency.code}
                    >{currency.currencyName}</option>
                ))}
                <option value='ARG'>Argentina</option>
            </Select>
        </Fragment>
    );

    return [state, SelectCoin, setState]
}

export default useCryptocurrency