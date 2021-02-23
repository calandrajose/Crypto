import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import image from './cryptomonedas.png'
import Form from './components/Form'
import ExchangeRate from './components/ExchangeRate'
import Spinner from './components/Spinner'
import axios from 'axios'

const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align:left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`;

function App() {
const [currency, setCurrency] = useState('')
const [crypto, setCrypto] = useState('')
const [result, setResult] = useState({})
const [loading, setLoading] = useState(false)

useEffect(() => {
  if(currency ==='') return;
  const fetchAPI = async ()=>{
    const result = await axios(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`)
    setResult(result.data.DISPLAY[crypto][currency]);
  }
  fetchAPI()
}, [currency, crypto])


  return (
    <Container>
      <div >
        <Image src={image}
          alt='imagen criptos' 
        />
      </div> 
      <div>
          <Heading> Cotiza Criptomonedas al instante </Heading> 
          <Form 
            saveCrypto={setCrypto}
            saveCurrency={setCurrency}
            setLoading={setLoading}
          />
          {loading ? <Spinner/> : <ExchangeRate result={result}/>}
         
      </div> 
    </Container>
    );
}

export default App;