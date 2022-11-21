import React from "react";
import { Link } from "react-router-dom";
import "./PaginaInicial.css";

function PaginaInicial() {
  return (
    <>
      <div className="div-paginicial">
        <div>
          <div className="div-home">
            <img
              src="https://imgur.com/qXqRyha.png"
              alt=""
              className="img-home"
            />
            <h2>JUNTOS SOMOS MAIS</h2>
            <Link to="/login" className="button-inicial">
              <button>Saiba Mais</button>
            </Link>
            <p>Com a Bem Fazer ficou mais fácil de fazer o BEM!</p>
            <p>Faça a diferença, vamos mudar o mundo juntos.</p>
          </div>
        </div>
      </div>

      <div className="div-segundapag">
        <img src="https://imgur.com/sRo0AQb.png" alt="" className="logo-ong" />
        <p>
          Como <strong>pessoa doadora</strong> você pode encontrar instituições{" "}
        </p>
        <p>que precisam de doações.</p>
        <br /> <br /> <br />
        <img src="https://imgur.com/1RhhEm1.png" alt="" className="logo-pf" />
        <p>Como ONG poderá indicar qual tipo de serviço </p>
        <p>está precisando e como as pessoas podem ajudar.</p>
      </div>

      <div className="div-terceirapag">
        <img src="https://imgur.com/pdRK77x.png" alt="Ícone de dinheiro" />
        <p className="p-icone">Dinheiro</p>
        <img src="https://imgur.com/3nipgx6.png" alt="Ícone de relógio" />
        <p className="p-icone">Tempo</p>
        <img src="https://imgur.com/Bi7BYM1.png" alt="Ícone de martelo" />
        <p className="p-icone">Material</p>

        
      </div>
    </>
  );
}

export default PaginaInicial;
