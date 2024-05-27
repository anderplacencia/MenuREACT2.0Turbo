//data --> una comida {name, description, classification, image}
function MiniFood ({ data }) {
  return (
    <article className='miniFoodContainer'>
      <img src={data.image} alt='' className='miniFoodImage' />
      <div className="miniFoodData">
        <p className='miniFoodTitle'>{data.name}</p>
        <p className="miniFoodClas">{data.classification}</p>
      </div>
    </article>
  )
}

export default MiniFood
