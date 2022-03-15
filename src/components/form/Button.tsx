import { Button as MuiButton } from '@mui/material';

export const Button = (props: any) => {
  const { text, color, variant, onClick, ...other } = props;
  return (
    <MuiButton variant={variant || 'contained'} color={color || 'primary'} onClick={onClick} {...other}>
      {text}
    </MuiButton>
  );
};
