import React from 'react';
import { Table } from './styles';
export default function DefaultTable({ columns, tbody }) {
  return (
    <Table>
      <thead>
        <tr>
          {columns.map(column => (
            <th>{column}</th>
          ))}
        </tr>
      </thead>

      <tbody>{tbody}</tbody>
    </Table>
  );
}
