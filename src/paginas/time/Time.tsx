import React from "react";
import { Avatar, Stack, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Time.css";
import { Link } from "react-router-dom";
import { GitHub } from "@material-ui/icons";

function Time() {
  return (
    <div className="dive-time">
      <Box className="box-time" display="flex">
        <div className="card-time">
          <div className="img-time">
            <img
              src="https://i.imgur.com/rW7epEq.jpg"
              alt="Foto de uma pessoa"
            />
          </div>
          <span className="heading">Jihye Koo</span>
          <p className="cargo">Desenvolvedora FullStack</p>
          <p className="texto-card">
            <div >
              <a target="_blank" href="https://github.com/jihye83">
                <GitHubIcon className="social-icon"/>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/jihye-koo/">
                <LinkedInIcon className="social-icon"/>
              </a>
            </div>
          </p>
        </div>

        <div className="card-time">
          <div className="img-time">
            <img
              src="https://i.imgur.com/mAvT9dq.jpg"
              alt="Foto de mulher branca com cabelos castanhos escuro"
            />
          </div>
          <span className="heading">Scarlet Martins</span>
          <p className="cargo">Desenvolvedora FullStack</p>
          <p className="texto-card">
            <div>
              <a target="_blank" href="https://github.com/ScarletMartins">
                <GitHubIcon className="social-icon"/>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/scarletmartins/"
              >
                <LinkedInIcon className="social-icon"/>
              </a>
            </div>
          </p>
        </div>

        <div className="card-time">
          <div className="img-time">
            <img
              src="https://i.imgur.com/9BKUXJT.png"
              alt="Foto de uma menina coreana"
            />
          </div>
          <span className="heading">Nina Choi</span>
          <p className="cargo">Desenvolvedora FullStack</p>
          <p className="texto-card">
            <div>
              <a target="_blank" href="https://github.com/techchoi">
                <GitHubIcon className="social-icon"/>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/choinina/">
                <LinkedInIcon className="social-icon"/>
              </a>
            </div>
          </p>
        </div>

        <div className="card-time">
          <div className="img-time">
            <img
              src="https://i.imgur.com/prRjLLu.jpg"
              alt="Foto de uma mulher branca com olhos verdes e cabelos longos preto"
            />
          </div>
          <span className="heading">Tatiane Alves</span>
          <p className="cargo">Desenvolvedora FullStack</p>
          <p className="texto-card">
            <div>
              <a target="_blank" href="https://github.com/TatianeAlvesO">
                <GitHubIcon className="social-icon"/>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/tatiane-alves-de-oliveira-5ab406180/"
              >
                <LinkedInIcon className="social-icon"/>
              </a>
            </div>
          </p>
        </div>
      </Box>

      <Box className="box-time2" display="flex">
        <div className="card-time">
          <div className="img-time">
            <img
              src="https://i.imgur.com/juzioT3.jpg"
              alt="Foto de uma mulher branca com olhos castanhos e cabelos medio liso preto"
            />
          </div>
          <span className="heading">Victória Mello </span>
          <p className="cargo">Desenvolvedora FullStack</p>
          <p className="texto-card">
            <div>
              <a target="_blank" href="https://github.com/victoriamelo09">
                <GitHubIcon className="social-icon"/>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/victória-melo-a143b9171/"
              >
                <LinkedInIcon className="social-icon"/>
              </a>
            </div>
          </p>
        </div>

        <div className="card-time">
          <div className="img-time">
            <img
              src="https://i.imgur.com/kZakBnw.jpg"
              alt="Foto de uma mulher branca com olhos castanhos escuros e cabelos longos cacheados"
            />
          </div>
          <span className="heading">Hellen Digramont</span>
          <p className="cargo">Desenvolvedora FullStack</p>
          <p className="texto-card">
            <div>
              <a target="_blank" href="https://github.com/adigramont">
                <GitHubIcon className="social-icon"/>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/hellen-digramont-eilert-69a41685/"
              >
                <LinkedInIcon className="social-icon"/>
              </a>
            </div>
          </p>
        </div>

        <div className="card-time">
          <div className="img-time">
            <img
              src="https://i.imgur.com/PIbuM7v.jpg"
              alt="Foto de uma mulher branca com olhos castanho e cabelos liso longos loiros"
            />
          </div>
          <span className="heading">Isabela Soares</span>
          <p className="cargo">Desenvolvedora FullStack</p>
          <p className="texto-card">
            <div>
              <a target="_blank" href="https://github.com/belaxsantos">
                <GitHubIcon className="social-icon"/>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/isabela-soares-4b148822b/"
              >
                <LinkedInIcon className="social-icon"/>
              </a>
            </div>
          </p>
        </div>
      </Box>
    </div>
  );
}

export default Time;
