import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  border: 1px solid #dddddd;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 64px;
  padding: 30px;

  nav {
    display: flex;
    align-items: center;

    img {
      cursor: pointer;
      width: 135px;
      height: 26px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    ul {
      display: flex;

      li {
        color: #fff;
        margin-right: 21px;

        a {
          text-transform: uppercase;
          font-weight: bold;
          color: #999;
          transition: color 0.2s;

          &:hover {
            color: #444;
          }
        }
      }
    }
  }
`;

export const User = styled.div`
  span {
    display: block;
    margin-bottom: 5px;
  }
  button {
    border: none;
    background: none;
    color: rgba(222, 59, 59, 1);
  }
`;
