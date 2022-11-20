import React from "react";
import { Link } from "react-router-dom";
import "./PaginaInicial.css";

function PaginaInicial() {
  return (
    <>
      <div className="div-paginicial">
        <div className="bk-paginicial">
          <img src="https://imgur.com/Nb3qD4Q.png" alt="" />
        </div>

        <Link to="/login">
          <button className="cta">
            <span className="hover-underline-animation"> SAIBA MAIS </span>
            <svg
              viewBox="0 0 46 16"
              height="10"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              id="arrow-horizontal"
            >
              <path
                transform="translate(30)"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                data-name="Path 10"
                id="Path_10"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </>
  );
}

export default PaginaInicial;
