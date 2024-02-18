import Input from "../Input";
import DropDown from "../DropDown";

const InputBlock = (props) => {
  const { selectState, loadingState } = props;
  const { classes } = props;

  return (
    <div className={classes["content-row"]}>
      <Input />
      <DropDown selectState={selectState} loadingState={loadingState} />
    </div>
  );
};

export default InputBlock;
