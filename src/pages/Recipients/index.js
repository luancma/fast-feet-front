import React, { useState } from 'react';
import { Container } from './styles';
import { InputSearch } from '~/style/InputSearch/styles';
import { ActionArea } from '~/style/ActionArea/styles';
import { CreateButton } from '~/style/CreateButton/styles';
import { Table, TableBody, TableHeader } from '~/style/Table/styles';

import {
  MdSearch,
  MdVisibility,
  MdMoreHoriz,
  MdEdit,
  MdDeleteForever,
  MdAdd,
} from 'react-icons/md';
import { Action } from '~/style/Action/styles';



export default function Deliverymen() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Container>
      <h2>Gerenciando Destinatários</h2>

      <ActionArea>
        <InputSearch>
          <MdSearch size={18} />
          <input
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Buscar por destinatário"
          />
        </InputSearch>

        <CreateButton>
          <MdAdd color="#fff" size={20} />
          <span>Cadastrar</span>
        </CreateButton>
      </ActionArea>

      <Table>
        <TableHeader>
          {columns.map(item => (
            <th>{item}</th>
          ))}
        </TableHeader>
        <TableBody>
          {deliveries.map(delivery => (
            <tr>
              <td>#{delivery.id}</td>
              <td>{delivery.recipient.name}</td>
              <td>{delivery.deliveryman.name}</td>
              <td>{delivery.recipient.state}</td>
              <td>{delivery.recipient.city}</td>
              <td>
                <ActionButton>
                  <button
                    type="button"
                    onClick={e => {
                      setSelectedId(delivery.id);
                      handleOpen();
                    }}
                  >
                    <MdMoreHoriz size={18} />
                  </button>

                  <ActionsArea open={open && selectedId === delivery.id}>
                    <Action>
                      <button>
                        <MdVisibility color="#8E5BE8" />
                      </button>
                      <p>Name</p>
                    </Action>
                    <Action>
                      <button>
                        <MdEdit color="#4D85EE" />
                      </button>
                      <p>Name</p>
                    </Action>
                    <Action>
                      <button>
                        <MdDeleteForever color="#DE3B3B" />
                      </button>
                      <p>Name</p>
                    </Action>
                  </ActionsArea>
                </ActionButton>
              </td>
            </tr>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
