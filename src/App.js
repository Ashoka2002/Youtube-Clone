import React from 'react';
import {Feed, Header, SearchResult, VideoDetails} from './components';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { AppContext } from './context/contextAPI'

const App = (props) => {
  return (
    <AppContext>
      <BrowserRouter>
      <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path='/' exact element={<Feed />} />
            <Route path='/searchResult/:searchQuery'  element={<SearchResult />} />
            <Route path='/video/:id'  element={<VideoDetails />} />
          </Routes>
      </div>
      </BrowserRouter>
    </AppContext>
   
  )
}

export default App