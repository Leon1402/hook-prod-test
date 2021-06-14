import './Cart.css'
import { CardHorizontal } from '../Product/Card/CardHorizontal'
import { Price } from './Price/Price'
import { Payment } from './Payment/Payment'
import { Footer } from './Footer/Footer'
import { Input } from '../Input/Input'

export const Cart = (props) => {
  return (
    <div className='cart'>
      <div className="cart__block">
        <h2 className="delivery__address">
          Delivery address
        </h2>
        <Input
          changeFocus={props.changeFocus}
          label='Address'/>
        <div className='delivery__block'>
          <Input
          changeFocus={props.changeFocus}
          label='Flat'
          className='delivery'/>
         <Input
          changeFocus={props.changeFocus}
          label='Floor'
          className='delivery'/>
          <Input
          changeFocus={props.changeFocus}
          label='Block'
          className='delivery'/>
        </div>
        <CardHorizontal
          id={props.items[0].id}
          items={props.items[0].info}
          changeFavorite={props.changeFavorite}
          changeCartCount={props.changeCartCount} />
        <CardHorizontal
          id={props.items[1].id}
          items={props.items[1].info}
          changeFavorite={props.changeFavorite}
          changeCartCount={props.changeCartCount} />
        <CardHorizontal
          id={props.items[2].id}
          items={props.items[2].info}
          changeFavorite={props.changeFavorite}
          changeCartCount={props.changeCartCount} />
      </div>
        <Payment changeFocus={props.changeFocus} />
        <Price />
        <Footer onFocus={props.onFocus}/>
    </div>
  )
}


