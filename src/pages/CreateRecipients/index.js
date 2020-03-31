import React from 'react';
import { CreateContainer } from '~/style/DefaultContainer';
import {
  ActionArea,
  ButtonArea,
  ActionAreaButton,
} from '~/style/ActionArea/styles';
import { MdAdd } from 'react-icons/md';

export default function CreateRecipients() {
  return (
    <CreateContainer>
      <ActionArea>
        <h2>Gerenciando encomendas</h2>

        <ButtonArea>
          <ActionAreaButton>
            <MdAdd color="#fff" size={20} />
            <span>Voltar</span>
          </ActionAreaButton>

          <ActionAreaButton>
            <MdAdd color="#fff" size={20} />
            <span>Salvar</span>
          </ActionAreaButton>
        </ButtonArea>
      </ActionArea>
    </CreateContainer>
  );
}
