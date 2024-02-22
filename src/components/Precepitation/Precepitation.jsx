const Precepitation = (props) => {
  const { classes, icon, alt } = props;

  return (
    <div className={classes.precipitation}>
      <img src={icon} alt={alt} />
    </div>
  );
};

export default Precepitation;
