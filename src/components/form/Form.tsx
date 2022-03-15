export const Form = (props: any): JSX.Element => {
  const { children, onSubmit, ...other } = props;
  return (
    <form autoComplete='off' onSubmit={onSubmit} {...other}>
      {children}
    </form>
  );
};
