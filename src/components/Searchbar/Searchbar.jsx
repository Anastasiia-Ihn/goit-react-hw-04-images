import { useState } from 'react';
import {
  Header,
  SearchFormInput,
  SearchFormButton,
  SearchForm,
} from './Searchbar.styled';

import { ImSearch } from 'react-icons/im';

export const Searchbar = props => {
  const [value, setValue] = useState('');
  const { onSubmit } = props;

  const handleChange = evt => {
    setValue(evt.target.value);
  };

  return (
    <Header>
      <SearchForm
        onSubmit={e => {
          onSubmit(e);
        }}
      >
        <SearchFormButton type="submit">
          <ImSearch />
        </SearchFormButton>
        <SearchFormInput
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
      </SearchForm>
    </Header>
  );
};
