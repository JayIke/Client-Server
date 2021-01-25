import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import Sports from './sports'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
export default function Main(){
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/sports' component={Sports}/>
      </Switch>
    </main>
  );
}