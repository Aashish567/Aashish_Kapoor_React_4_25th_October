import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage';
import Details from './components/details';


function App() {
  return (

    <div>

    <BrowserRouter>
    <div>
    
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/home' element={<HomePage />}></Route>
      <Route path='/details/:id' element={<Details />}></Route>
    </Routes>

    </div>
    </BrowserRouter>
     </div>
  )
}

export default App;
