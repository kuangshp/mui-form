import React from 'react';
import { TextField } from '@mui/material';

export const Input = (props: any) => {
  const { name, label, value, error = null, variant, onChange } = props;
  return (
    <TextField
      variant={variant || 'outlined'}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
    />
  );
};
