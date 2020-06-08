import React from 'react'
import {BrowserRouter, Switch, Route} from  'react-router-dom'

import ProductList from '../Containers/ProductList/ProductsList'
import WrapItem from '../Containers/WrapItem/WrapItem'
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={ProductList} />
        <Route path='/item/:id' exact component={WrapItem} />
      </Switch>
    </BrowserRouter>
  )
}