import { FormControl, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Label } from './Label';

export const InputBox = ({
  label = '',
  id = '',
  type = '',
  name = '',
  placeholder = '',
  disabled = false,
  showValidWarning = true,
  isRequired,
  ...props
}) => {
  const [isValid, setIsValid] = useState(true);
  const handleOnFocus = () => {
    setIsValid(true);
  };
  return (
    <FormControl w={props.w} isRequired={isRequired} isInvalid={!isValid}>
      {label && <Label id={id} label={label} />}
      <Input
        placeholder={placeholder}
        type={type}
        name={name}
        fontWeight='400'
        color='weather-grey.primary'
        focusBorderColor='weather-beige.secondary'
        fontSize='sm'
        borderRadius='10'
        bg='white'
        _placeholder={{ fontSize: 'sm', opacity: '0.5' }}
        // onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        id={id}
        size='lg'
        border='1px solid #e2e8f0'
        errorBorderColor={showValidWarning ? 'weather-red.primary' : 'initial'}
        disabled={disabled}
        {...props}
        w='full'
      />
    </FormControl>
  );
};
