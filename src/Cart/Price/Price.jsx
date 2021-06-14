import './Price.css'


export const Price = (props) => {
  return (
    <div className="price">
      <div className="price__block">
        <span className="price__name">Order</span>
        <span className="price__item">£ 4</span>
      </div>
      <div className="price__block">
        <span className="price__name">Delivery </span>
        <span className="price__item">£ 0,4</span>
      </div>
      <div className="price__block">
        <span className="price__name">Promocode</span>
        <span className="price__item">- £ 0,4</span>
      </div>
      <div className="price__block price__block_total">
        <span className="price__name_total">Total</span>
        <span className="price__item_total">£ 4,4</span>
      </div>
    </div>
  )
}
