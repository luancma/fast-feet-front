export const OPEN_MODAL = '@modal_OPEN_MODAL';
export const CLOSE_MODAL = '@modal_CLOSE_MODAL';

export const openModal = () => ({
  type: OPEN_MODAL,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
