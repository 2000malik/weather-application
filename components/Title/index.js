import { Text } from '@chakra-ui/react';

export const Title = ({ label, ...props }) => {
  return (
    <Text
      color='weather-grey.primary'
      align='center'
      fontSize='3xl'
      fontWeight={500}
      textTransform='uppercase'
      {...props}
    >
      {label}
    </Text>
  );
};
