

function Food( {data} ) {
  return (
    <article>
        <img src={data.image} alt=""/>
        <h3>{data.image}</h3>
        <p>{data.name}</p>
        <p>{data.classification}</p>
        <p>{data.description}</p>
        <p>{data.date}</p>
    </article>
  )
}

export default Food;
