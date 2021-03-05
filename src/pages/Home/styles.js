import styled, { keyframes } from 'styled-components';

export const Main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const FieldSet = styled.fieldset`
    display: block;
    margin: 0;
    padding: 0;
    border: none;
`;

export const Form = styled.form`
    width: 100%;
`;

export const BotaoSubmit = styled.button`
    width: 125px;
    height: 40px;
    background-color: #4a494a;
    border-radius: 2px;
    color: white;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
    margin: 15px 0 0 0;
    transition: all 1;

    :hover {
        background-color: #636363;
        transition: all 1;
    }

`;

export const InputSearch = styled.input`
    width: 28%;
    border: 2px solid #9d9d9d;
    padding: 10px 0 10px 0;
    text-align: center;

    ::placeholder {
        text-align: center;
    }

`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
`;

export const Loader = styled.div`
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #4a494a;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  margin: 10px 0 0 0;
  -webkit-animation: ${rotate} 2s linear infinite; /* Safari */
  animation: ${rotate} 2s linear infinite;
`;

export const DivLoader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;