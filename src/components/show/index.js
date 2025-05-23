import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";
import icon from "../Asset/eye-solid.svg";
import icon1 from "../Asset/wrench-solid.svg";
import icon2 from "../Asset/trash-can-solid.svg";
import icon3 from "../Asset/plus-solid.svg"

const Article = () => {
  const [article, setData] = useState([]);

  useEffect(() => {
    const fetcArticle = async () => {
      try {
        const { data, status } = await axios.get(
          "http://localhost:8000/api/article/get"
        );
        console.log(data);
        if (status === 200) {
          setData(data);
        }
      } catch (err) {
        console.error(err.message);
      }
    };
    fetcArticle();
  }, []);

  return (
    <div className="page-accueil">
      <div className="product-grid">
        {article.map((info) => (
          <ArticleCard key={info.id} info={info} />
        ))}
      </div>
      {/* Image d'ajout affichée une seule fois */}
      <div className="add">
        <Link to={{ pathname: `/add` }} className="image-link">
          <img src={icon3} className="icon" />
        </Link>
      </div>
    </div>
  );
};

const ArticleCard = ({ info }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Extraction des URLs d'images
  const images = Object.values(info.picture[0]);

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(nextImage, 1000); // Change toutes les secondes
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isHovered, currentIndex]);

  return (
    <>
      <div
        className="article-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Affichage de l'image actuelle */}
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex}`}
          className="article-image"
        />

        <div className="product-info">
          <h3 className="product-title">{info.name}</h3>
          <p className="product-description">
            <strong>Description :</strong> {info.content} <br />
            <strong>Prix :</strong> {info.price}
          </p>
          <Link to={{ pathname: `/article/varticle/${info._id}` }} className="image-link">
            <img src={icon} className="icon" />
          </Link>
          <Link to={{ pathname: `/article/update-article/${info._id}` }} className="image-link">
            <img src={icon1} className="icon" />
          </Link>
          <Link to={{ pathname: `/article/delete/${info._id}` }} className="image-link">
            <img src={icon2} className="icon" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Article;
