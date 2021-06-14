import { Card } from './Card/Card'
import { Ingridients } from './Ingridients/Ingridients'
import { Nutrilon } from './Nutrilon/Nutrilon'
import { Other } from './Other/Other'
import './Product.css'
import { Recomend } from './Recomend/Recomend'

export const Product = (props) => {
  return (
    <div className="product">
      <Card
        items={props.items[0].info}
        changeFavorite={props.changeFavorite}
        changeCartCount={props.changeCartCount}/>
      <Recomend />
      <div className="product__main">
        <Nutrilon nutrilon={props.items[0].nutrilon}/>
        <Ingridients />
        <Other />
      </div>

    </div>
  )
}
