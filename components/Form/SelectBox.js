import React, { Fragment } from 'react';
import { Label } from './Label';
import { Select } from '@chakra-ui/react';

export const SelectBox = ({ label, id, options = [], selectValue, handleChange, ...props }) => {
  return (
    <Fragment>
      {label && <Label fontSize='sm' fontWeight='700' htmlFor={id} label={label} />}
      <Select placeholder='Select option' value={selectValue} onChange={handleChange} {...props}>
        {React.Children.toArray(
          options.map(({ value, label }) => <option value={value}>{label}</option>)
        )}
      </Select>
    </Fragment>
  );
};
