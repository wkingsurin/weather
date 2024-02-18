import Input from "../Input";
import DropDown from "../DropDown";

const InputBlock = (props) => {
  const { selectState, loadingState, dataState, cityState } = props;
  const { classes } = props;

  return (
    <div className={classes["content-row"]}>
      <Input
        cityState={cityState}
        dataState={dataState}
        loadingState={loadingState}
      />
      <DropDown
        selectState={selectState}
        loadingState={loadingState}
        dataState={dataState}
        cityState={cityState}
      />
    </div>
  );
};

export default InputBlock;
