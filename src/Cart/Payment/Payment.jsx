import './Payment.css'
import { Input } from '../../Input/Input'


export const Payment = ({ changeFocus }) => {
  return (
    <div className="payment">
      <h2 className="payment__title">
        Payment
      </h2>
      <Input
          changeFocus={changeFocus}
          label='promocode'/>
    </div>
  )
}
