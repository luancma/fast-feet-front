import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;

  color: #444444;
  width: 100%;
  border-spacing: 0 20px;

  thead {
    text-align: left;
    background: none;

    th {
      padding-left: 20px;

      &:last-child {
        text-align: center;
      }
    }
  }

  tbody {
    text-align: left;
    color: #666666;

    td {
      padding-left: 20px;
      border-radius: 4px;
      background: #fff;
      height: 57px;
    }

    td:last-child {
      text-align: center;
      padding-left: 20px;
    }
  }
`;
