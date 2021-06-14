import "./CardHorizontal.css";
import milk from "../../res/milk.jpg"

export const CardHorizontal = ({ id, items, changeCartCount }) => {
  return (
    <div className="card-horizontal">
      <img className="card-horizontal__image" src={milk} alt="Картинка продукта" />
      <div className="card-horizontal__container">
        <h2 className="card-horizontal__name">{items.name}</h2>
        <p className="card-horizontal__one-price">1 pc / £{items.price}</p>
        <div className="card-horizontal__block">
          <h3 className="card-horizontal__price">£{items.price}</h3>

          <div className="card-small__buttons-block cart-small-button">
            <button
              className="cart-small-button__button cart-small-button__button_delete"
              onClick={() => {
                changeCartCount(id, -1)
              }}
              disabled={!items.inCart} />
            <p className="cart-small-button__count">{items.inCart}</p>
            <button className="cart-small-button__button cart-small-button__button_add"
              onClick={() => {
                changeCartCount(id, 1)
              }}
              disabled={!items.count} />
          </div>
        </div>
      </div>
    </div>
  )
}
