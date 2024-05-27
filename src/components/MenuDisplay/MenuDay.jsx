import MiniFood from "../Food/MiniFood"

function MenuDay({data}) {
    const foodsHtml = data.map((item, i) => <MiniFood data={item} key={i}/>)
  return (
    <ul className="daysArray">
   {foodsHtml}
   </ul>
)
}
export default MenuDay