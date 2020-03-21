import styled from 'styled-components';
import { darken } from 'polished';

export const CreateButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #7d40e7;
  width: 142px;
  height: 36px;
  border: none;
  border-radius: 4px;

  text-transform: uppercase;
  font-size: 14px;

  transition: background 0.3s;

  span {
    margin-left: 5px;
  }

  span {
    color: #fff;
    font-weight: bold;
  }

  &:hover,
  &:active {
    background: ${darken(0.05, '#7d40e7')};
  }
`;
