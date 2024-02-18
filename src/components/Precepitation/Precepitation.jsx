const Precepitation = (props) => {
  const { classes, image } = props;

  return (
    <div className={classes.precipitation}>
      <img src={image.icon} alt={image.text} />
    </div>
  );
};

export default Precepitation;
