import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 360px;
  height: 425px;
  background: rgba(255, 255, 255, 1);
  text-align: center;
  border-radius: 4px;

  img {
    margin-top: 68px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      margin: 0 30px;
      padding: 15px;
      border: 1px solid rgba(221, 221, 221, 1);
      width: 300px;
      height: 45px;
      border-radius: 4px;
      color: rgba(153, 153, 153, 1);
      transition: border 0.2s; 

      &:hover {
        border: 1.5px solid rgba(221, 221, 221, 1);
      }
    }

    span {
      color: #e53935;
      font-weight: bold;
    }

    label {
      padding: 15px 0 9px 30px;
      font-size: 14px;
      text-transform: uppercase;
      text-align: left;
      letter-spacing: 0;
      color: #444444;
      opacity: 1;
    }

    button {
      width: 300px;
      height: 45px;
      margin: 15px 30px;
      border: 0;
      background: #7d40e7;
      border-radius: 4px;
      color: #ffffff;
      size: 16px;
      font-weight: bold;
      transition: background 0.2s; 

      &:hover {
        background: ${darken(0.03, '#7d40e7')}
      }
  }
`;
