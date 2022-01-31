import React from 'react';
import Navbar from './components/Navbar'
import PhotoView from './pages/PhotoView'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<PhotoView />} />
          {/* <Route render={() => <h1 className='display-2'>Wrong page!</h1>} /> */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
