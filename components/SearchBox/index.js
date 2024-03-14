import { InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';
import { Search } from '../icons/Search';
import { InputBox } from '../Form/inputBox';

export const SearchBox = ({
  children,
  onInputChange,
  searchValue,
  disabled = false,
  placeholder,
  id,
}) => {
  return (
    <InputGroup w='full'>
      <InputLeftElement ml='4' h='full'>
        <Search />
      </InputLeftElement>
      <InputBox
        id={id}
        name='search'
        handleOnChange={onInputChange}
        value={searchValue}
        type='text'
        placeholder={placeholder ? placeholder : 'Search'}
        borderRadius='20px'
        pl='60px'
        disabled={disabled}
        isRequired
      />
      {children}
    </InputGroup>
  );
};
