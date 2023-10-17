import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem.jsx';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ arrCards }) => {
  return (
    <List>
      {arrCards.map(card => (
        <ImageGalleryItem key={card.id} dataForCard={card}></ImageGalleryItem>
      ))}
    </List>
  );
};
