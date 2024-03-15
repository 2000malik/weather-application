import { Card as ChakraUICard } from '@chakra-ui/react';

export const Card = ({ children, bg, size, maxW, ...props }) => {
  return (
    <ChakraUICard
      borderRadius='20'
      borderColor='transparent'
      py='1'
      px='1'
      bg={bg || props.bgColor || 'white'}
      size={size}
      variant='outline'
      maxW={maxW}
      {...props}
    >
      {children}
    </ChakraUICard>
  );
};