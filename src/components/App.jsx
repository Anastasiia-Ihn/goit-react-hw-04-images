import { ImageGallery } from './ImageGallery/ImageGallery.jsx';
import { Searchbar } from './Searchbar/Searchbar.jsx';
import { Button } from './Button/Button.jsx';
import { useEffect, useState } from 'react';
import { fetchCard } from 'API/api.js';
import { SpinnerDotted } from 'spinners-react';
import { Layout } from './Layout';

import toast, { Toaster } from 'react-hot-toast';

export const App = () => {
  const [query, setQuery] = useState('');
  const [galleryItems, setGalleryItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    if (query === '') {
      return;
    }

    async function fetchData() {
      setLoader(true);

      try {
        const cards = await fetchCard(query, page, controller);

        if (!cards.hits.length) {
          setError(true);
          toast.error('Sorry, not found');
        }

        setGalleryItems(prev => [...prev, ...cards.hits]);
      } catch (err) {
        setError(true);
        toast.error('Not found');
        if (err.code !== 'ERR_CANCELED') {
          setError(true);
          toast.error('Not found');
        }
      } finally {
        setLoader(false);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [query, page]);

  const handlerClickOnForm = evt => {
    if (evt.target[1].value === '') {
      return error && toast.error('Please, write your query.');
    }
    evt.preventDefault();
    setQuery(evt.target[1].value);
    setPage(1);
    setGalleryItems([]);
  };

  const handlerClickOnLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <Layout>
      <Searchbar onSubmit={handlerClickOnForm} />

      {galleryItems.length > 0 && <ImageGallery arrCards={galleryItems} />}

      {loader && (
        <SpinnerDotted size={50} thickness={100} speed={100} color="#36ad47" />
      )}

      {galleryItems.length >= 12 && <Button onClick={handlerClickOnLoadMore} />}
      <Toaster />
    </Layout>
  );
};
