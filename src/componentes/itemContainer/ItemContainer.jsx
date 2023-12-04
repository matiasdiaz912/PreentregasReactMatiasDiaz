import "./itemContainer.css"

const ItemContainer = ({greeting}) => {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <h1 style={{color: "violet", fontFamily: 'Segoe UI', fontWeight: 400}}>{greeting}</h1>
    </div>
  )
}

export default ItemContainer