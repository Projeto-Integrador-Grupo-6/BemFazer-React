import React from 'react';
import { Avatar, Stack , Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Time.css';
import { Link } from 'react-router-dom';
import { GitHub } from '@material-ui/icons';



function Time() {
  return (
    <div>
      <Box display='flex'>
      <div className="card-time">
  <div className="img-time">
    <img src="https://i.imgur.com/rW7epEq.jpg" alt="Foto de uma pessoa" />
  </div>
  <span className="heading">Jihye Koo</span>
  <p className="texto-card">
    <a target='_blank' href='https://github.com/jihye83'>
    <GitHubIcon />
      </a>
   <a target='_blank' href='https://www.linkedin.com/in/jihye-koo/' >
    <LinkedInIcon />
   </a>
  </p>
</div>

<div className="card-time">
  <div className="img-time">
  <img src="https://i.imgur.com/mAvT9dq.jpg" alt="Foto de mulher branca com cabelos castanhos escuro" />
  </div>
  <span className="heading">Scarlet Martins</span>
  <p className="texto-card">
    <a target='_blank' href='https://github.com/ScarletMartins'>
    <GitHubIcon />
      </a>
   <a target='_blank' href='https://www.linkedin.com/in/scarletmartins/' >
   <LinkedInIcon />
   </a>
  </p>
</div>

<div className="card-time">
  <div className="img-time">
  <img src="https://i.imgur.com/9BKUXJT.png" alt="Foto de uma menina coreana" />
  </div>
  <span className="heading">Nina Choi</span>
  <p className="texto-card">
    <a target='_blank' href='https://uiverse.io/gagan-gv/afraid-otter-91'>
    <GitHubIcon />
      </a>
   <a target='_blank' href='https://uiverse.io/gagan-gv/afraid-otter-91' >
   <LinkedInIcon />
   </a>
  </p>
</div>

<div className="card-time">
  <div className="img-time">
  <img src="https://i.imgur.com/ihhDc1E.jpg" alt="Foto de uma mulher branca com olhos verdes e cabelos longos preto" />
  </div>
  <span className="heading">Tatiane Alves</span>
  <p className="texto-card">
    <a target='_blank' href='https://uiverse.io/gagan-gv/afraid-otter-91'>
    <GitHubIcon />
      </a>
   <a target='_blank' href='https://uiverse.io/gagan-gv/afraid-otter-91' >
   <LinkedInIcon />
   </a>
  </p>
</div>
      </Box>

      <Box display='flex'>
      <div className="card-time">
  <div className="img-time">
  <img src="https://i.imgur.com/ihhDc1E.jpg" alt="Foto de uma mulher branca com olhos verdes e cabelos longos preto" />
  </div>
  <span className="heading">Victória </span>
  <p className="texto-card">
    <a target='_blank' href='https://uiverse.io/gagan-gv/afraid-otter-91'>
    <GitHubIcon />
      </a>
   <a target='_blank' href='https://uiverse.io/gagan-gv/afraid-otter-91' >
   <LinkedInIcon />
   </a>
  </p>
</div>

<div className="card-time">
  <div className="img-time">
  <img src="https://i.imgur.com/ihhDc1E.jpg" alt="Foto de uma mulher branca com olhos verdes e cabelos longos preto" /> 
  </div>
  <span className="heading">Hellen Digramont</span>
  <p className="texto-card">
    <a target='_blank' href='https://uiverse.io/gagan-gv/afraid-otter-91'>
    <GitHubIcon />
      </a>
   <a target='_blank' href='https://uiverse.io/gagan-gv/afraid-otter-91' >
   <LinkedInIcon />
   </a>
  </p>
</div>

<div className="card-time">
  <div className="img-time">
  <img src="https://i.imgur.com/ihhDc1E.jpg" alt="Foto de uma mulher branca com olhos verdes e cabelos longos preto" /> 
  </div>
  <span className="heading">Isabela Soares</span>
  <p className="texto-card">
    <a target='_blank' href='https://uiverse.io/gagan-gv/afraid-otter-91'>
    <GitHubIcon />
      </a>
   <a target='_blank' href='https://uiverse.io/gagan-gv/afraid-otter-91' >
   <LinkedInIcon />
   </a>
  </p>
</div>
      </Box>
    </div>

    
  )
}

export default Time


