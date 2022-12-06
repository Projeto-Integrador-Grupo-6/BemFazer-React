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
              <button>Quero Ajudar</button>
            </Link>
            <p>Com a Bem Fazer ficou mais fácil de fazer o BEM!</p>
            <p>Faça a diferença, vamos mudar o mundo juntos.</p>
          </div>
        </div>
      </div>

      <div className="div-segundapag">
        <img src="https://imgur.com/sRo0AQb.png" alt="" className="logo-ong" />
        <p>
          Como pessoa doadora você pode encontrar instituições
          <br />
          que precisam de doações.
        </p>

        <img src="https://imgur.com/1RhhEm1.png" alt="" className="logo-pf" />
        <p>
          Como ONG poderá indicar qual tipo de serviço <br /> está precisando e
          como as pessoas podem ajudar.{" "}
        </p>
      </div>

      <div className="div-terceirapag">
        <h3>
          Pensando em ampliar os tipos de doações, a Bem Fazer tem como
          objetivo facilitar para que qualquer pessoa pratique o bem para a
          sociedade da forma que puder, como:
        </h3>
        <div className="p-icone">
          <div className="dinheiro">
            <img
              src="https://imgur.com/pdRK77x.png" alt="Ícone de dinheiro" />
            <br />
            <p>Dinheiro:</p>
            <p>
              Com a doação em dinheiro, você pode ajudar as ONG'S a manter os seus projetos que mudam vidas de muitas pessoas.
            </p>
          </div>
          <div className="tempo">
            <img src="https://imgur.com/3nipgx6.png" alt="Ícone de relógio" />
            <br />
            <p>Tempo:</p>
            <p>
              Dedique uma parte do seu tempo para instituições que necessitam de voluntários para manutenção e gestão do local.
            </p>
          </div>
          <div className="material">
            <img src="https://imgur.com/Bi7BYM1.png" alt="Ícone de martelo" />
            <br />
            <p>Materiais:</p>
            <p>
              Com materiais que você tem em sua casa e não utiliza mais, alguma ONG'S podem estar precisando deste material, alguns deles como: cadernos, livros, roupas e etc.
            </p>
          </div>
        </div>

      </div>
    </>
  );
}

export default PaginaInicial;
