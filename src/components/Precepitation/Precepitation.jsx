const Precepitation = (props) => {
  const { classes, image } = props;

  return (
    <div className={classes.precipitation}>
      <img src={image.src} alt={image.name} />
    </div>
  );
};

export default Precepitation;
