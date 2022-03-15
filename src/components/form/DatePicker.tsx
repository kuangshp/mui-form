import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { TextField } from '@mui/material';

export const DatePicker1 = (props: any) => {
  const { name, label, value, onChange } = props;

  const convertToDefEventPara = (name: string, value: unknown) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={value}
        renderInput={(params: any) => <TextField {...params} />}
        onChange={(date: any) => onChange(convertToDefEventPara(name, date))}
      />
    </LocalizationProvider>
  );
};
