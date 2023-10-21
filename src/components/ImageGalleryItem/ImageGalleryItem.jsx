import { useState } from 'react';
import { ModalEl } from '../Modal/Modal.jsx';
import { ImgGallery, ItemGallery } from './ImageGalleryItem.styled.js';

export const ImageGalleryItem = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { dataForCard } = props;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <ItemGallery>
      <ImgGallery
        onClick={openModal}
        src={dataForCard.webformatURL}
      ></ImgGallery>

      <ModalEl
        data={dataForCard}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      ></ModalEl>
    </ItemGallery>
  );
};

// export class ImageGalleryItem1 extends Component {
//   state = {
//     isModalOpen: false,
//   };

//   openModal = () => {
//     this.setState({ isModalOpen: true });
//   };

//   closeModal = () => {
//     this.setState({ isModalOpen: false });
//   };

//   render() {
//     const { isModalOpen } = this.state;
//     const { dataForCard } = this.props;

//     return (
//       <ItemGallery>
//         <ImgGallery
//           onClick={this.openModal}
//           src={dataForCard.webformatURL}
//         ></ImgGallery>

//         <ModalEl
//           data={dataForCard}
//           isOpen={isModalOpen}
//           onRequestClose={this.closeModal}
//         ></ModalEl>
//       </ItemGallery>
//     );
//   }
// }
