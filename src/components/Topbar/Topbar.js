import React from 'react';
import './Topbar.css';
import { SearchButton,  ShoppingButton} from '../Button/TypeButton';
import Counter from '../Counter/Counter'
export default function Topbar({isVisible}){
  return (
    <header className="header">
      <div className="container">
        <div className="header__menu">
          <a href="/" className="header__logo">
           <span>FASHIONISTA</span>
          </a>
          <div className="header__icons">
            <SearchButton
              className="header__icons--search">
            </SearchButton>
            <ShoppingButton
              onClick={isVisible}
              className="header__icons--cart">
                <Counter count={50} />
            </ShoppingButton>
          </div>
        </div> 
      </div>
    </header>
  )
}