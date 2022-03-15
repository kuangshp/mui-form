import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';
export const Checkbox = (props: any): JSX.Element => {
  const { name, label, color, value, onChange } = props;
  const convertToDefEventPara = (name: string, value: unknown) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <FormControl>
      <FormControlLabel
        label={label}
        control={
          <MuiCheckbox
            name={name}
            color={color || 'primary'}
            checked={value}
            onChange={(e) => onChange(convertToDefEventPara(name, e.target.value))}
          />
        }
      ></FormControlLabel>
    </FormControl>
  );
};
