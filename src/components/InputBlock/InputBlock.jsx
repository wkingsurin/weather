import Input from "../Input";
import DropDown from "../DropDown";

const InputBlock = (props) => {
  const { selectState } = props;
  const { classes } = props;

  return (
    <div className={classes["content-row"]}>
      <Input />
      <DropDown selectState={selectState} />
    </div>
  );
};

export default InputBlock;
