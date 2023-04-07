import { TextField, InputAdornment } from '@mui/material';
import React, { ReactNode } from 'react';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  whiteBg?: boolean;
  variant?: 'outlined' | 'standard';
  disabled?: boolean;
  icon?: ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = (props: IProps) => {
  const { label, type, whiteBg, variant, icon, onChange, ...restProps } = props;
  return (
    <>
      <TextField
        id="outlined-basic"
        label={label}
        type={type}
        size="medium"
        onChange={onChange}
        variant={variant ?? 'outlined'}
        sx={{
          width: '100%',
          background: whiteBg ? '#FFF' : '',
          color: '#384048',
        }}
        InputLabelProps={{
          style: { color: '#384048', fontSize: '16px', fontWeight: 400 },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default TextInput;
