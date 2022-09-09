let Welcome = (props) => {
  return (
    <h1>
      {props.welcomeType}, {props.name} you got {props.spi} spi and pass in all
      subjects
    </h1>
  );
};
const Fun = () => {
  return (
    <>
      <Welcome welcomeType="Hello" name="Devanshu Shah" spi="8.48" />,
      <Welcome welcomeType="hii" name="Mubin Seta" spi="8.39" />,
      <Welcome welcomeType="hii" name="Divyank Raja" spi="8.43" />,
    </>
  );
};
export { Fun };
