import { Grid } from '@mui/material';
import { Form, Input, Button, Checkbox, Select, RadioGroup } from './components';
import { useForm } from './hooks';

const initValidated = {
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: '0',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false,
};

const genderList = [
  { id: '0', title: '男' },
  { id: '1', title: '女' },
  { id: '2', title: '其它' },
];

const departmentList = [
  { id: '1', title: '技术部' },
  { id: '2', title: '市场部' },
  { id: '3', title: '财务部' },
  { id: '4', title: '人力资源' },
];

const App = (): JSX.Element => {
  const { values, errors, setErrors, handleInputChange, resetForm } = useForm(initValidated);
  const validate = () => {
    console.log(values, '=====');
    let temp: any = {};
    temp.fullName = values.fullName ? '' : '请输入用户名';
    temp.email = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(values.email) ? '' : '邮箱格式错误';
    temp.mobile = values.mobile > 7 ? '' : '手机号码格式错误';
    temp.city = values.city.length > 0 ? '' : '城市必填字段';
    temp.departmentId = values.departmentId ? '' : '必填字段';
    setErrors({ ...temp });
    return Object.values(temp).every((item) => item === '');
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('点击了', validate());
    if (validate()) {
      console.log(values);
      resetForm();
    } else {
      // window.alert('输入错误');
    }
  };
  return (
    <div style={{ width: '1000px', margin: '0 auto' }}>
      <Form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Input
              name='fullName'
              label='全名'
              fullWidth
              value={values.fullName}
              onChange={handleInputChange}
              error={(errors as any).fullName}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              label='邮箱'
              name='email'
              fullWidth
              value={values.email}
              onChange={handleInputChange}
              error={(errors as any).email}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              label='手机号码'
              name='mobile'
              value={values.mobile}
              onChange={handleInputChange}
              error={(errors as any).mobile}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              label='城市'
              name='city'
              value={values.city}
              onChange={handleInputChange}
              error={(errors as any).city}
            />
          </Grid>
          <Grid item xs={6}>
            <RadioGroup
              name='gender'
              label='性别'
              value={values.gender}
              onChange={handleInputChange}
              items={genderList}
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              fullWidth
              name='departmentId'
              label='部门'
              value={values.departmentId}
              onChange={handleInputChange}
              options={departmentList}
              error={(errors as any).departmentId}
            />
          </Grid>
          <Grid item xs={6}>
            <Checkbox name='isPermanent' label='是否记住' value={values.isPermanent} onChange={handleInputChange} />
          </Grid>
          <Grid item xs={6}>
            <div>
              <Button type='submit' text='提交' />
              <Button text='重置' onClick={resetForm} />
            </div>
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default App;
