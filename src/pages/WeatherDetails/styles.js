import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 50px 0 0 0;
`;

export const Texto = styled.h2`
    font-size: ${props => props.fontSize}em;
    text-align: right;
    color: #494d5b;
    font-weight: ${props => props.fontWeight};
    text-transform: capitalize;
    margin: ${props => props.margin};
`;

export const Icon = styled.img`
`;

export const ContainerWeather = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: ${props => props.justifyContent};
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const ContainerWeatherInformation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Separacao = styled.hr`
    width: 80%;
    margin: 35px 0 35px 0;
    border-color: #e3e3e3;
    border-width: 0.1px;
`;