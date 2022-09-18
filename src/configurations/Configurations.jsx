import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";

import { Home,LastestTrasactions } from '../pages';

const Configurations = () => {
  return (
    <>
     <Routes>
        <Route index element={<Home />} path="/"/>
        <Route  element={<LastestTrasactions />}  path="/lastest-transactions"/>
    </Routes>
    </>
  )
}

export default Configurations