import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import './index.css'

const Varticle = () => {
  const [article, setArticle] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/api/article/get/${id}`
        );
        console.log(data);
        setArticle(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchuser();
  }, [id]);

  return (
    <div className="varticlecontainer">
      <img src={article.imageUrl} alt="Article" />{" "}
      <p>
        Nom: {article.name} <br />
        Mail: {article.email} <br />
        Address: {article.street}
      </p>
    </div>
  );
};

export default Varticle;
