import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


export const Header = ({onFocus}) => {
  const [size, setSize] = React.useState(false);
  console.log(window.location.pathname)
  const scroolHadler = (event) => {
    if (event.currentTarget.scrollY > 20) setSize(event.currentTarget.scrollY)
    else setSize(false)
  };

  React.useEffect(() => {
    window.addEventListener('scroll', scroolHadler)
    return () => {
      window.removeEventListener('scroll', scroolHadler)
    }
  }, [])
  return (
    <header className={onFocus ? 'header header-hide' : 'header'}>
      <div className="header__top">
        <Link to='cart'
        className="header__back">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 6H1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 11L1 6L6 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        {window.location.pathname === '/cart' ? 'Cart' : 'Milk & Cheese'}
      </div>
      <div className={size ?
        "header__bottom header__bottom_hide" :
        "header__bottom"}>
      </div>
    </header>
  )
}
