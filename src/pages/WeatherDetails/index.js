import React from 'react';
import { Container, Texto, Icon, ContainerWeather, ContainerWeatherInformation, Separacao } from './styles';
import { dataAtualFormatada, horaFormatada } from '../../utils/formatDate';

function WeatherDetails(props) {
  const weatherInfomations = props.location.state
  const error = props.location.state

  if (error.message !== '' && error.message !== undefined) {
    return (
      <div>
        {error.message}
      </div>
    )
  }

  return (
    <main>
      <Container>
        <Texto fontSize={1.3} fontWeight="bold">
          {weatherInfomations.item.name}, {weatherInfomations.item.sys && weatherInfomations.item.sys.country}
        </Texto>
        <Texto fontSize={1} fontWeight="normal">
          {dataAtualFormatada(weatherInfomations.item.dt)}
        </Texto>
        <figure>
          {weatherInfomations.item.weather && <Icon src={'http://openweathermap.org/img/wn/' + weatherInfomations.item.weather[0].icon + '@2x.png'} alt="" />}
        </figure>
        <ContainerWeather justifyContent="space-evenly">
          <ContainerWeatherInformation>
            <Texto fontSize={0.7} fontWeight="normal">
              Mínima
              </Texto>
            <Texto fontSize={1.2} fontWeight="400">
              {weatherInfomations.item.main && weatherInfomations.item.main.temp_min.toFixed(0)} ºC
              </Texto>
          </ContainerWeatherInformation>
          <ContainerWeatherInformation>
            <Texto fontSize={2.5} fontWeight="700">
              {weatherInfomations.item.main && weatherInfomations.item.main.temp.toFixed(0)}ºC
              </Texto>
            <Texto fontSize={1.5} fontWeight="500">
              {weatherInfomations.item.weather && weatherInfomations.item.weather[0].description}
            </Texto>
          </ContainerWeatherInformation>
          <ContainerWeatherInformation>
            <Texto fontSize={0.7} fontWeight="normal">
              Máxima
              </Texto>
            <Texto fontSize={1.2} fontWeight="400">
              {weatherInfomations.item.main && weatherInfomations.item.main.temp_max.toFixed(0)} ºC
              </Texto>
          </ContainerWeatherInformation>
        </ContainerWeather>
        <Separacao />
        <ContainerWeatherInformation>
          <ContainerWeather justifyContent="space-between">
            <Texto fontSize={0.7} fontWeight="500" margin="0 25px">
              Umidade
              </Texto>
            <Texto fontSize={0.7} fontWeight="500">
              {weatherInfomations.item.main && weatherInfomations.item.main.humidity}%
              </Texto>
          </ContainerWeather>
          <ContainerWeather justifyContent="space-between">
            <Texto fontSize={0.7} fontWeight="500" margin="0 25px">
              Nascer do Sol
              </Texto>
            <Texto fontSize={0.7} fontWeight="500">
              {weatherInfomations.item.sys && horaFormatada(weatherInfomations.item.sys.sunrise)}
            </Texto>
          </ContainerWeather>
          <ContainerWeather justifyContent="space-between">
            <Texto fontSize={0.7} fontWeight="500" margin="0 25px">
              Pôr do Sol
              </Texto>
            <Texto fontSize={0.7} fontWeight="500">
              {weatherInfomations.item.sys && horaFormatada(weatherInfomations.item.sys.sunset)}
            </Texto>
          </ContainerWeather>
        </ContainerWeatherInformation>
      </Container>
    </main>
  );
}

export default WeatherDetails;