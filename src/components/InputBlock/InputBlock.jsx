import Input from "../Input";
import Select from "../Select";

const InputBlock = (props) => {
  const { classes } = props;

  return (
    <div className={classes["content-row"]}>
      <Input classes={classes} />
      <Select classes={classes} />
    </div>
  );
};

export default InputBlock;
