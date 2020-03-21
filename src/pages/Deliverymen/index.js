import React, { useState } from 'react';
import { Container } from './styles';
import { InputSearch } from '~/style/InputSearch/styles';
import { MdSearch, MdAdd } from 'react-icons/md';
import { ActionArea } from '~/style/ActionArea/styles';
import { CreateButton } from '~/style/CreateButton/styles';

export default function Deliverymen() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Container>
      <h2>Gerenciando entregadores</h2>

      <ActionArea>
        <InputSearch>
          <MdSearch size={18} />
          <input
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Buscar por entregadores"
          />
        </InputSearch>

        <CreateButton>
          <MdAdd color="#fff" size={20} />
          <span>Cadastrar</span>
        </CreateButton>
      </ActionArea>
    </Container>
  );
}
