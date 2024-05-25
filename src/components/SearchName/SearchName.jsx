import Food from "../Food/Food"

function SearchName({foods}) {
    const foodsHtml = foods.map((item) => <li> <Food data={item}/> </li>)
  return (
    <ul>
        {foodsHtml}
    </ul>
  )
}

export default SearchName;

