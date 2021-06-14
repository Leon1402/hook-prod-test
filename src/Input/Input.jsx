import React from 'react'
import './Input.css'

export const Input = (props) => {
  const [value, setValue] = React.useState('');

  const valueHandler = (e) => {
    setValue(e.currentTarget.value)
  }
  return (
    <div className={`input ${props.className || ''}`}>
      <input type="text" className='input__field'
        onFocus={() => { props.changeFocus(true) }}
        onBlur={() => { props.changeFocus(false) }}
        onChange={valueHandler}
        value={value}/>
      <label className="input__label">
        {value ? '' : props.label}
      </label>
    </div>
  )
}
