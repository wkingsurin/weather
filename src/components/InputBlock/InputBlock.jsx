import Input from "../Input";
import Select from "../Select";

const InputBlock = (props) => {
  const { classes } = props;

  return (
    <div className={classes["content-row"]}>
      <Input />
      <Select />
    </div>
  );
};

export default InputBlock;
