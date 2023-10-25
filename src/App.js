import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ContactUs from './components/contact';
import HomePage from './components/homepage';
// import AboutUs from './components/about';
import Details from './components/details';


function App() {
  return (

    <div>

    <BrowserRouter>
    <div>
    
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/home' element={<HomePage />}></Route>
      {/* <Route path='/contact' element={<ContactUs />}></Route>
      <Route path='/about' element={<AboutUs />}></Route> */}
      <Route path='/details/:id' element={<Details />}></Route>
    </Routes>

    </div>
    </BrowserRouter>
     </div>
  )
}

export default App;
