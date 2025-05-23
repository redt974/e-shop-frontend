import axios from 'axios';
import React, { useState } from 'react';


function Add() {

  const [article, setArticle] = useState({
    name: '',
    category: '',
    brand: '',
    price: '',
    content: '',
    stock: '',
    online: false,
    picture: [
      {
        img: '',
        img1: '',
        img2: '',
        img3: '',
        img4: ''
      }
    ]
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle((prevArticle) => ({
      ...prevArticle,
      [name]: value,
    }));
  };
  const handlePictureChange = (e, index) => {
    const { name, value } = e.target;
    const updatedPictures = [...article.picture];
    updatedPictures[0][name] = value;
    setArticle(prevArticle => ({
      ...prevArticle,
      picture: updatedPictures
    }));
  };

  const handleAdd = async () => {
    const data = await axios.post('http://localhost:8000/api/article/add', article);
    alert("L'article a été correctement ajouté")
    window.location.href="/"
  }

  return (
    <div className='Add'>
      <h2>Ajouter un article</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleAdd(); }}>
        <label>
          Nom:
          <input type="text" name="name" value={article.name} onChange={handleChange} />
        </label><br />

        <label>
          Catégorie:
          <input type="text" name="category" value={article.category} onChange={handleChange} />
        </label><br />

        <label>
          Marque:
          <input type="text" name="brand" value={article.brand} onChange={handleChange} />
        </label><br />

        <label>
          Prix:
          <input type="number" name="price" value={article.price} onChange={handleChange} />
        </label><br />

        <label>
          Description:
          <textarea name="content" value={article.content} onChange={handleChange} />
        </label><br />

        <label>
          Stock:
          <input type="number" name="stock" value={article.stock} onChange={handleChange} />
        </label><br />

        <label>
          En ligne:
          <input type="checkbox" name="online" checked={article.online} onChange={(e) => setArticle(prev => ({ ...prev, online: e.target.checked }))} />
        </label><br />

        <h3>Images</h3>
        <label>
          Image principale:
          <input type="text" name="img" value={article.picture[0]?.img || ''} onChange={(e) => handlePictureChange(e, 0)} />
        </label><br />
        <label>
          Image 1:
          <input type="text" name="img1" value={article.picture[0]?.img1 || ''} onChange={(e) => handlePictureChange(e, 0)} />
        </label><br />
        <label>
          Image 2:
          <input type="text" name="img2" value={article.picture[0]?.img2 || ''} onChange={(e) => handlePictureChange(e, 0)} />
        </label><br />
        <label>
          Image 3:
          <input type="text" name="img3" value={article.picture[0]?.img3 || ''} onChange={(e) => handlePictureChange(e, 0)} />
        </label><br />
        <label>
          Image 4:
          <input type="text" name="img4" value={article.picture[0]?.img4 || ''} onChange={(e) => handlePictureChange(e, 0)} />
        </label><br />

        <button type="submit">Ajouter le produit</button>
      </form>
    </div>
  )
}

export default Add
