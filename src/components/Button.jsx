import styled, { css } from 'styled-components';

export const ButtonsGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: end;
`;

export default styled.div`
    width: 160px;
    height: 65px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    margin: 0 5px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
    
    ${(props) => props.primary && css`
      background-color: #3DB46D;
      border-radius: 13px;
      box-shadow: 4px 5px 5px lightgray;
      color: white;
      cursor: pointer;
    `}

    ${(props) => props.cancel && css`
      background-color: none;
      box-shadow: none;
      color: gray;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 17px;
      cursor: pointer;
    `}

    ${(props) => props.delete && css`
      background-color: #EB5757;;
      box-shadow: none;
      border-radius: 13px;
      color: white;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 17px;
      cursor: pointer;
    `}
`;
