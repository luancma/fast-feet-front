import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '~/store/modules/config/actions';

export default function CreateModal({ open = false }) {
  const dispatch = useDispatch();

  const handleCloseModal = () => dispatch(closeModal());
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#eee',
        opacity: '0.7',
        position: 'absolute',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <h1>Teste</h1>
      <button onClick={handleCloseModal}>Fechar</button>
    </div>
  );
}
