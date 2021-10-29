import React, { useEffect, useState } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Landing from './Components/Pages/Landing/Landing.jsx';
import AddExpense from './Components/Pages/AddExpense/AddExpense.jsx';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/money">
        <AddExpense />
      </Route>
    </Switch>
  );
}

export default App;
