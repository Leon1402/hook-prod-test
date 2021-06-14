import "./Card.css";
import milk from "../../res/milk.jpg"

export const Card = ({ items, changeFavorite, changeCartCount }) => {
  return (
    <div className="card">
      <div className="card__buttons-block">
        <button className="card__like" onClick = {() => {
          changeFavorite(0)
        }}>
          {
            !items.favorite
          ? <svg width="20" height="19" viewBox="0 0 20 19" fill="#000000" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0042 1.93062C11.0616 0.927644 12.3467 0 14.2623 0C15.0185 0 15.7668 0.151857 16.4643 0.446398C17.1617 0.74092 17.7942 1.17208 18.326 1.71431C18.8578 2.25617 19.2788 2.89847 19.5656 3.60406C19.8526 4.30976 20 5.06552 20 5.82833C20 6.59113 19.8526 7.34689 19.5656 8.05259C19.2787 8.75825 18.8577 9.40062 18.3258 9.94252C18.3258 9.94257 18.3259 9.94246 18.3258 9.94252L9.99977 18.4278L1.67373 9.94252C0.599945 8.84819 0 7.36792 0 5.82833C0 4.28873 0.599945 2.80847 1.67373 1.71414C2.74815 0.619169 4.20946 0.000469327 5.73725 0.000469327C7.73186 0.000469327 8.97652 0.936038 10.0042 1.93062ZM14.2623 2C12.821 2 11.9537 2.78129 10.7135 4.04513L9.99977 4.77256L9.286 4.04513C8.04123 2.77656 7.26841 2.00047 5.73725 2.00047C4.75225 2.00047 3.80367 2.39907 3.10128 3.11489C2.39826 3.83136 2 4.80707 2 5.82833C2 6.84959 2.39826 7.82529 3.10128 8.54176L9.99977 15.5722L16.8983 8.54176C17.2463 8.18723 17.5235 7.7651 17.7129 7.29932C17.9023 6.83352 18 6.33361 18 5.82833C18 5.32304 17.9023 4.82314 17.7129 4.35733C17.5235 3.89156 17.2465 3.46959 16.8984 3.11506C16.5506 2.7604 16.1383 2.47975 15.6862 2.28886C15.2342 2.09799 14.7504 2 14.2623 2Z" fill="#333333" />
          </svg>

          : <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.2623 1C12.3467 1 11.0616 1.92764 10.0042 2.93062C8.97652 1.93604 7.73186 1.00047 5.73725 1.00047C4.20946 1.00047 2.74815 1.61917 1.67373 2.71414C0.599945 3.80847 0 5.28873 0 6.82833C0 8.36792 0.599945 9.84819 1.67373 10.9425L9.99977 19.4278L18.3258 10.9425C18.8577 10.4006 19.2787 9.75825 19.5656 9.05259C19.8526 8.34689 20 7.59113 20 6.82833C20 6.06552 19.8526 5.30976 19.5656 4.60406C19.2788 3.89847 18.8578 3.25617 18.326 2.71431C17.7942 2.17208 17.1617 1.74092 16.4643 1.4464C15.7668 1.15186 15.0185 1 14.2623 1Z" fill="#25282B" />
          </svg>
          }
        </button>
      </div>

      <img className="card__image" src={milk} alt="Картинка продукта" />
      <h2 className="card__name">{items.name}</h2>
      <p className="card__one-price">1 pc / £{items.price}</p>
      <div className="card__block">
        <h3 className="card__price">£{items.price}</h3>

        <div className="card__buttons-block cart-button">
          <button
            className="cart-button__button cart-button__button_delete"
            onClick={() => {
              changeCartCount(0, -1)
            }}
            disabled={!items.inCart}/>
          <p className="cart-button__count">{items.inCart}</p>
          <button className="cart-button__button cart-button__button_add"
           onClick={() => {
            changeCartCount(0, 1)
          }}
          disabled={!items.count} />
        </div>
      </div>
      <div className="card__link links">
        <a href="#nutrition" className="links__item">Nutrition</a>
        <a href="#ingredients" className="links__item">Ingredients</a>
        <a href="#other" className="links__item">Other</a>
      </div>
    </div>
  )
}
