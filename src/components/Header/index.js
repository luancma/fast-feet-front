import React from 'react';
import { useDispatch } from 'react-redux';

import { Container, Content, User } from './styles';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { history } from '~/services/history';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  const handleSignOut = () => dispatch(signOut());

  return (
    <Container>
      <Content>
        <nav>
          <img
            src={logo}
            alt="fastfeet logo"
            onClick={e => history.push('/')}
          />

          <ul>
            <li>
              <Link to="encomendas">Encomendas</Link>
            </li>
            <li>
              <Link to="entregadores">Entregadores</Link>
            </li>
            <li>
              <Link to="destinatarios">Destinatários</Link>
            </li>
            <li>
              <Link to="problemas">Problemas</Link>
            </li>
          </ul>
        </nav>

        <aside>
          <User>
            <span>Admin fastfeet</span>
            <button onClick={handleSignOut}>Sair do sistema</button>
          </User>
        </aside>
      </Content>
    </Container>
  );
}
