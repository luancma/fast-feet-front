import styled from 'styled-components';

export const InputSearch = styled.div`
  display: flex;
  justify-content: baseline;
  border: 1px solid #dddddd;
  align-items: center;
  border-radius: 4px;
  background: #fff;
  margin-bottom: 22px;
  opacity: 1;

  svg {
    border: none;
    margin: 0 10px;
    color: #999999;
  }

  input {
    color: #666666;
    border: none;
    font-size: 14px;
    width: 237px;
    height: 36px;
    border-radius: 4px;

    &::placeholder {
      color: #999999;
    }
  }
`;
