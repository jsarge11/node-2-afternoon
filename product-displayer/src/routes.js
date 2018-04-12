import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import Home from './components/Home.js'

export default (
 <div>
  <Link to='/'/>
  <Home />
  <Switch >
     <Route exact path='/' Component={Home}/>
  </Switch>
</div>
)