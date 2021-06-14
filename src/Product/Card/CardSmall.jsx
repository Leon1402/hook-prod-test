import "./CardSmall.css";
import milk from "../../res/milk.jpg"

export const CardSmall = () => {
  return (
    <div className="card-small">
      <img className="card-small__image" src={milk} alt="Картинка продукта" />
      <h2 className="card-small__name">Just Milk Semi-Skimmed 6 x 1L (Case of 2)</h2>
      <p className="card-small__one-price">1 pc / £1.59</p>
      <div className="card-small__block">
        <h3 className="card-small__price">£1.59</h3>
        <div className="card-small__buttons-block cart-small-button">
          <button className="cart-small-button__button cart-small-button__button_delete" />
          <p className="cart-small-button__count">2</p>
          <button className="cart-small-button__button cart-small-button__button_add" />
        </div>
      </div>
    </div>
  )
}
