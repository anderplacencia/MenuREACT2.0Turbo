import Food from "../Food/Food"
import '../../css/searchName.css'

function SearchName({foods}) {
    const foodsHtml = foods.map((item, i) => <li key={i}> <Food data={item}/> </li>)
  return (
    <ul className="searchNameContainer">
        {foodsHtml}
    </ul>
  )
}

export default SearchName;

