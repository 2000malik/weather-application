import { Button as ChakraUIButton } from '@chakra-ui/react';

export const Button = ({ handleOnClick, children, isLoading, ...props }) => {
  return (
    <ChakraUIButton
      isLoading={isLoading}
      loadingText={props.loadingText || 'Processing'}
      onClick={handleOnClick}
      color='white'
      bg={props.bg || 'weather-grey.primary'}
      textAlign='center'
      fontWeight='600'
      borderRadius='10'
      width='100%'
      fontSize='sm'
      size='lg'
      _hover={{
        background: props.bg,
      }}
      {...props}
    >
      {children}
    </ChakraUIButton>
  );
};
