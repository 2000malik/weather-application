import { InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Search } from '../icons/Search';
import { InputBox } from '../Form/inputBox';

export const SearchBox = ({
  children,
  searchValue,
  onInputChange,
  disabled = false,
  placeholder,
  id,
  ...props
}) => {
  return (
    <InputGroup w='full'>
      <InputLeftElement ml='4' h='full'>
        <Search />
      </InputLeftElement>
      <InputBox
        id={id}
        name='search'
        value={searchValue}
        handleOnInputChange={onInputChange}
        type='text'
        fontSize='lg'
        placeholder={placeholder ? placeholder : 'Search'}
        borderRadius='20px'
        pl='60px'
        disabled={disabled}
        isRequired
        {...props}
      />
      {children}
    </InputGroup>
  );
};
