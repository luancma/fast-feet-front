import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import { InputSearch } from '~/style/InputSearch/styles';
import { ActionArea } from '~/style/ActionArea/styles';
import { CreateButton } from '~/style/CreateButton/styles';
import { Table, TableBody, TableHeader } from '~/style/Table/styles';

import {
  MdSearch,
    MdMoreHoriz,
  MdEdit,
  MdDeleteForever,
  MdAdd,
} from 'react-icons/md';
import { Action } from '~/style/Action/styles';
import { fetchAllRecipients } from '~/store/modules/recipient/actions';
import { ActionButton, ActionsArea } from '../Deliveries/styles';



export default function Deliverymen() {
  const dispatch = useDispatch();

  const { recipients, loading} = useSelector(state => state.recipient);
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(null);
  const columns = ['ID', 'Nome', 'Endereço',   'Ações'];


  useEffect(() => {
    dispatch(fetchAllRecipients());
  }, []);

  const handleOpen = () => setOpen(!open);


  if(loading){
    console.log("Carregando")
  }
  
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
          {recipients.map(recipient => (
            <tr>
              <td>#{recipient.id}</td>
              <td>{recipient.name}</td>
              <td>{recipient.street}, {recipient.number}, {recipient.city} - {recipient.state} </td>
              <td>
                <ActionButton>
                  <button
                    type="button"
                    onClick={e => {
                      setSelectedId(recipient.id);
                      handleOpen();
                    }}
                  >
                    <MdMoreHoriz size={18} />
                  </button>

                  <ActionsArea open={open && selectedId === recipient.id}>
                    <Action>
                      <button>
                        <MdEdit color="#4D85EE" />
                      </button>
                      <p>Editar</p>
                    </Action>
                    <Action>
                      <button>
                        <MdDeleteForever color="#DE3B3B" />
                      </button>
                      <p>Excluir</p>
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
