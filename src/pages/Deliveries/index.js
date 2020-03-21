import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  UserActions,
  ActionButton,
  Action,
  ActionsArea,
} from './styles';
import {
  MdSearch,
  MdVisibility,
  MdMoreHoriz,
  MdEdit,
  MdDeleteForever,
  MdAdd,
} from 'react-icons/md';

import { fetchAll } from '~/store/modules/delivery/actions';
import { TableHeader, Table, TableBody } from '~/style/Table/styles';
import { searchDelivery } from '~/store/modules/delivery/actions';

export default function Deliveries() {
  const dispatch = useDispatch();
  const { loading, deliveries } = useSelector(state => state.delivery);
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedId, setSelectedId] = React.useState(null);

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    dispatch(fetchAll());
  }, []);

  useEffect(() => {
    if (searchTerm.length) {
      dispatch(searchDelivery(searchTerm));
    }
  }, [searchTerm]);

  const columns = ['ID', 'Entregador', 'Cidade', 'Estado', 'Status', 'Ações'];

  return (
    <Container>
      <h2>Gerenciando encomendas</h2>

      <UserActions>
        <div>
          <MdSearch size={18} />
          <input
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Buscar encomendas"
          />
        </div>

        <button>
          <MdAdd color="#fff" size={20} />
          <span>Cadastrar</span>
        </button>
      </UserActions>

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
