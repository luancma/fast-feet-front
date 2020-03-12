import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
  max-width: 1200px;
  margin-left: 120px;
  margin-right: 120px;

  h2 {
    font-size: 24px;
    margin: 34px 0;
  }
`;

export const UserActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  div {
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
  }

  button {
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

    &:hover {
      background: ${darken(0.05, '#7d40e7')};
    }

    &:active {
      background: ${lighten(0.05, '#7d40e7')};
    }
  }
`;

export const ActionButton = styled.div`
  position: relative;
  button {
    background: none;
    border: 0;
    color: #c6c6c6;
    transition: color 0.4s;

    svg:hover {
      color: #444444;
    }
  }
`;

export const DeliveriesTable = styled.div`
  table {
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
  }
`;

export const ActionsArea = styled.ul`
  position: absolute;
  width: 150px;
  left: calc(50% - 78px);
  top: calc(100% + 10px);
  background: #ffffff;
  box-shadow: 0px -5px 20px #0000001a;
  border-radius: 4px;
  padding: 5px;
  display: ${props => (props.open ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 8px);
    top: -10px;
    width: 0;
    height: 0px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
  }
`;

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
