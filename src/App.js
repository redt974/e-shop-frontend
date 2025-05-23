import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add from './components/add';
import UpdateArticle from './components/update';
import Delete from './components/delete';
import Article from "./components/show";
import Varticle from './components/viewarticle/varticle';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes pour pages principales */}
        <Route index element={<Article/>}
        />
         
        <Route
          path="/add"
          element={
            <Add />
          }
        />
        <Route path="/article/update-article/:idArticle" 
        element={<UpdateArticle />} />
        <Route
          path="/article/delete/:idArticle"
          element={
            <Delete />
          }
        />
        <Route path="/article/varticle/:id" 
        element={
        <Varticle />} />
      </Routes>
    </Router>
  );
};

export default App;