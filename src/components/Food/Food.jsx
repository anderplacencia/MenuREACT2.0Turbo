function Food ({ data }) {
  return (
    <article className='foodContainer'>
      <p className='foodTitle'>{data.name}</p>
      <img src={data.image} alt='' className='foodImage' />
      {/* <h3>{data.image}</h3> */}
      <p>{data.classification}</p>
      <p>{data.description}</p>
      {/* <p>{data.date}</p> */}
    </article>
  )
}

export default Food
