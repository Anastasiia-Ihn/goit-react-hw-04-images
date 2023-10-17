import { Component } from 'react';
import {
  Header,
  SearchFormInput,
  SearchFormButton,
  SearchForm,
} from './Searchbar.styled';

import { ImSearch } from 'react-icons/im';

export class Searchbar extends Component {
  state = { value: '' };

  handleChange = evt => {
    this.setState({ value: evt.target.value });
  };

  render() {
    const { onSubmit } = this.props;
    const { value } = this.state;

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
            onChange={this.handleChange}
          />
        </SearchForm>
      </Header>
    );
  }
}
