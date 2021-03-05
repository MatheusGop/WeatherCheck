import React, { useState } from 'react';
import { Main, Form, FieldSet, BotaoSubmit, InputSearch, DivLoader, Loader } from './styles';
import { useHistory } from "react-router-dom";
import weatherRepository from '../../services/weatherRepository';

function Home() {

    let history = useHistory();

    const [cityName, setCityName] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChangeCityName = (e) => {
        setCityName(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getWeatherInformation(cityName)
    }

    const getWeatherInformation = (cityName) => {
        console.log(cityName)
        setLoading(true)
        weatherRepository.getWeatherInformation(cityName).then(response => {
          setLoading(false)
          history.push({ pathname: 'weatherdetails', state: { item: response.data, error: '' } })
        }).catch(error => {
          if (error.response.status === 404) {
            setLoading(false)
            history.push({ pathname: 'weatherdetails', state: { message: 'Cidade não encontrada' } })
          } else if (error.response.status === 401) {
            setLoading(false)
            history.push({ pathname: 'weatherdetails', state: { message: '' } })
          } else if (error.response.status === 429) {
            setLoading(false)
            history.push({ pathname: 'weatherdetails', state: { message: 'Você possui plano gratuito e está fazendo mais de 60 chamadas da API por minuto' } })
          }
        })
      }

    return (
        <Main>
            <Form onSubmit={e => onSubmit(e)}>
                <FieldSet>
                    <label htmlFor="cityName"></label>
                    <InputSearch type="text" id="cityName" className="" name="cityName" value={cityName} placeholder="Buscar por cidade" onChange={e => handleChangeCityName(e)} required />
                </FieldSet>
                {loading ? <DivLoader><Loader /></DivLoader> : <BotaoSubmit type="submit">Procurar</BotaoSubmit>}
            </Form>
        </Main>
    );
}

export default Home;