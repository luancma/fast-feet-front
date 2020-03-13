import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '~/store/modules/config/actions';

export default function CreateModal({ open = false }) {
  const dispatch = useDispatch();

  const handleCloseModal = () => dispatch(closeModal());
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        className="modal-content"
        style={{
          width: '500px',
          height: '500px',
          background: '#eee',
        }}
      >
        <h1>Teste</h1>
        <button onClick={handleCloseModal}>Fechar</button>
      </div>
    </div>
  );
}
