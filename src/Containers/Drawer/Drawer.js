import React from 'react';
import './Drawer.css'
import {BackButton} from '../../components/Button/TypeButton'
const Drawer = ({showDrawer, isVisible, children, item}) => {
  return (
    <div className={showDrawer ? 'drawer':'drawer--notVisible'} >
      <section className='drawer__section'>
        <header className='drawer__header'>
          <BackButton className='drawer__button' onClick={isVisible} />
          <span className="drawer__title">Sacola({item ? item.cart.length : 0})</span>
        </header>
          {children}
      </section>
    </div>
  )
}

export default Drawer