import { ModalImg } from './Modal.styled';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 'calc(100vw - 72px)',
    maxHeight: 'calc(100vh - 144px)',
  },
};

Modal.setAppElement('#root');

export const ModalEl = ({ onRequestClose, isOpen, data }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Large Image"
    >
      <ModalImg src={data.largeImageURL} alt={data.id} />
    </Modal>
  );
};
