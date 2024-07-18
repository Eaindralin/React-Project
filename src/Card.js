function Card(props) {
  const { image, title, description } = props;

  function clickHandler(e) {
    console.log(e);
    console.log(e.target);
  }

  return (
    <section className="card">
      <img
        onMouseOver={() => console.log("I just Hovered")}
        src={image}
        alt="card-image"
      />
      <h1 style={{ marginTop: "1rem" }}>{title}</h1>
      <p>{description}</p>
      <button onClick={clickHandler}>Click Me!</button>
    </section>
  );
}

export default Card;
