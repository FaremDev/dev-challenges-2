import styled, { css } from 'styled-components';


export const Button = styled.div`
    width: 160px;
    height: 65px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    
    ${props => props.primary && css`
      background-color: #3DB46D;
      border-radius: 13px;
      box-shadow: 4px 5px 5px lightgray;
      color: white;
      cursor: pointer;
    `}

    ${props => props.cancel && css`
      background-color: none;
      box-shadow: none;
      color: gray;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 17px;
      cursor: default;
    `}
`