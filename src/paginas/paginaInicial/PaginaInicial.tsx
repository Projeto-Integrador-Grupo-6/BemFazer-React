import React from "react";
import { Link } from "react-router-dom";
import "./PaginaInicial.css";

function PaginaInicial() {
  return (
    <>
      <div>
        <div className="bk-paginicial">
          <img src="https://imgur.com/GH4QHiF.png" alt="crianças sorrindo" />
        </div>

        <Link to='/login'>
        <a className="fancy" href="#">
          <span className="top-key"></span>
          <span className="text">Saiba mais</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </a>
        </Link>
      </div>
    </>
  );
}

export default PaginaInicial;
