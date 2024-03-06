import React from 'react'
import Navigation from './components/Navigation/Navigation'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navigation/>
      <Outlet/>
    </>
  );

}

export default App