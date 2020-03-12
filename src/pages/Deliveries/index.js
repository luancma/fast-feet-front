import React from 'react';

import {
  DeliveriesTable,
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

import { useDispatch, useSelector } from 'react-redux';

import CreateModal from '~/components/Modal';
import { openModal } from '~/store/modules/config/actions';

export default function Deliveries() {
  const dispatch = useDispatch();

  const modalOpen = useSelector(state => state.config.openModal);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const handleOpenModal = () => dispatch(openModal());

  return (
    <Container>
      {modalOpen && <CreateModal />}
      <h2>Gerenciando encomendas</h2>

      <UserActions>
        <div>
          <MdSearch size={18} />
          <input placeholder="Buscar encomendas" />
        </div>

        <button onClick={handleOpenModal}>
          <MdAdd color="#fff" size={20} />
          <span>Cadastrar</span>
        </button>
      </UserActions>

      <DeliveriesTable>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Destinatário</th>
              <th>Entregador</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#01</td>
              <td>Ludwig van Beethoven</td>
              <td>John Doe</td>
              <td>Rio do Sul</td>
              <td>Alfreds Futterkiste</td>
              <td>Alfreds Futterkiste</td>
              <td>
                <ActionButton>
                  <button type="button" onClick={handleOpen}>
                    <MdMoreHoriz size={18} />
                  </button>

                  <ActionsArea open={open}>
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
          </tbody>
        </table>
      </DeliveriesTable>
    </Container>
  );
}
