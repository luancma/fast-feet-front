import styled from 'styled-components';


export const Action = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  padding: 10px;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: 0;
  }

  svg {
    margin-right: 10px;
    font-size: 18px;
  }

  p {
    color: #999999;
    line-height: 20px;
  }
`;
