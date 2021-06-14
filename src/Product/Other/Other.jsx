import './Other.css'

export const Other = () => {
  return (
    <div className="other" id="other">
      <h2 className="other__title title">Other</h2>
      <ul className="other__list">
        <li className="other__item other-item">
          <div className="other-item__col other-item__col_name">Страна производства</div>
          <div className="other-item__col other-item__col_data">Россия</div>
        </li>
        <li className="other__item other-item">
          <div className="other-item__col other-item__col_name">Состав</div>
          <div className="other-item__col other-item__col_data">цельное молоко</div>
        </li>
        <li className="other__item other-item">
          <div className="other-item__col other-item__col_name">Срок годности</div>
          <div className="other-item__col other-item__col_data">12 дн.</div>
        </li>
        <li className="other__item other-item">
          <div className="other-item__col other-item__col_name">Изготовитель</div>
          <div className="other-item__col other-item__col_data">ОАО "Компания "Юнимилк"</div>
        </li>
        <li className="other__item other-item">
          <div className="other-item__col other-item__col_name">Жирность</div>
          <div className="other-item__col other-item__col_data">4.5 %</div>
        </li>
        <li className="other__item other-item">
          <div className="other-item__col other-item__col_name">Содержание лактозы</div>
          <div className="other-item__col other-item__col_data">обычное (более 1% лактозы)</div>
        </li>
        <li className="other__item other-item">
          <div className="other-item__col other-item__col_name">Витаминизированное/обогащенное</div>
          <div className="other-item__col other-item__col_data">нет</div>
        </li>
      </ul>
    </div>
  )
}
