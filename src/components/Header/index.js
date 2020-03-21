import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Content, ListItem, User } from './styles';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { history } from '~/services/history';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  const pathname = history.location.pathname;

  console.tron.log(pathname);

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
            <ListItem pathname={pathname === '/encomendas'}>
              <Link to="encomendas">Encomendas</Link>
            </ListItem>
            <ListItem pathname={pathname === '/entregadores'}>
              <Link to="entregadores">Entregadores</Link>
            </ListItem>
            <ListItem pathname={pathname === '/destinatarios'}>
              <Link to="destinatarios">Destinatários</Link>
            </ListItem>
            <ListItem pathname={pathname === '/problemas'}>
              <Link to="problemas">Problemas</Link>
            </ListItem>
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
