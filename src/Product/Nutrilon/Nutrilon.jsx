import React from 'react';
import './Nutrilon.css'

export const Nutrilon = ({ nutrilon }) => {
  const [hide, setHide] = React.useState(false);

  const hideHandler = () => {
    setHide(!hide)
  }

  const nutrilonItems = nutrilon.map((item, index) => {
    return (
      <li className="structure__item structure-item" key={index}>
        <h3 className="structure-item__title">{item.weight}</h3>
        <div className="structure-item__name">{item.name}</div>
      </li>
    )
  })

  return (
    <div className="nutrilon" id="nutrition">
      <h2 className="nutrilon__title title">Nutrition</h2>
      <div className={hide
      ? "nutrilon__container nutrilon__container_hide"
      : "nutrilon__container"}>
        <p className="nutrilon__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at egestas tempus duis egestas semper dolor morbi purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at egestas tempus duis egestas semper dolor morbi purus.
        </p>
        <ul className="nutrilon__list">
          <li className="nutrilon__item">Lorem ipsum dolor sit amet</li>
          <li className="nutrilon__item">Consectetur adipiscing elit</li>
          <li className="nutrilon__item">Ultrices at egestas tempus</li>
          <li className="nutrilon__item">Duis egestas semper dolor morbi purus.</li>
        </ul>
        <div className="nutrilon__structure structure">
          <ul className="structure__list">
            {nutrilonItems}
          </ul>
        </div>
      </div>
      <button className="nutrilon__hide" onClick={hideHandler}>Hide</button>
    </div>
  )
}
