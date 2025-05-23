import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './index.css'

function UpdateArticle() {
  const { idArticle } = useParams(); 

  const handleDelete = async (indexTask) => {
    try {
        const response = await axios.delete(`http://localhost:8000/api/article/delete/${idArticle}`);
        console.log(response.status);
        alert('Larticle a été correctement supprimmé')
        window.location.href="/"
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <div className='deletecontainer'> 
      <h2 className='deletetitre'>Supprimer l'article</h2>
      <div >
          <p className='deleteid'>
              {idArticle}
            </p>
          <img 
            src='https://cdn-icons-png.flaticon.com/512/6724/6724777.png' 
            width={20}
            alt='corbeille'
            onClick={() => handleDelete(idArticle)}
          />
        </div>
      
    </div>
  );
}

export default UpdateArticle;
