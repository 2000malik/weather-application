import { FormLabel } from '@chakra-ui/react';

export const Label = ({ label, id, ...props }) => {
  return (
    <FormLabel mb='2' htmlFor={id} fontSize='sm' fontWeight='700' {...props}>
      {label}
    </FormLabel>
  );
};
