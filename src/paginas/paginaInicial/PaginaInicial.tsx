import React from "react";
import { Link } from "react-router-dom";
import "./PaginaInicial.css";

function PaginaInicial() {
  return (
    <>
      <div>
        <div className="bk-paginicial">
          <img src="https://imgur.com/8hZkgKC.png" alt="crianças sorrindo" />
        </div>
        
        <Link to='/login'>
        <a className="fancy" href="#">
          <span className="top-key"></span>
          <span className="text">Saiba mais</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </a>
        </Link>

        <div className="img-inicial">
        <img src="https://imgur.com/8jjQm8b.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default PaginaInicial;
