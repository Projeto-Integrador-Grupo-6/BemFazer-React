import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, flexbox } from "@mui/system";
import { Grid, Icon } from "@mui/material";
import "./SobreNos.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Link } from "react-router-dom";
<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&display=swap"
  rel="stylesheet"
></link>;
<link
  href="https://fonts.googleapis.com/css2?family=Mukta:wght@300&display=swap"
  rel="stylesheet"
></link>;

export default function SobreNos() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const imagens = [
    <Card
      sx={{
        maxWidth: 245,
        minHeight: 320,
        position: "relative",
      }}
      className="space"
    >
      <CardMedia
        component="img"
        height="140"
        image="https://imgur.com/QOq4wCq.jpg"
        alt="ONG Banco de Alimentos"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Banco de Alimentos
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A ONG Banco de Alimentos é uma associação civil que recolhe alimentos
          que já perderam valor de prateleira no comércio e indústria, mas ainda
          estão aptos para consumo, e os distribui onde são mais necessários.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Saiba Mais</Button>
      </CardActions>
    </Card>,

    <Card
      sx={{
        maxWidth: 245,
        minHeight: 320,
      }}
      className="space"
    >
      <CardMedia
        component="img"
        height="140"
        image="https://imgur.com/EXWZX57.jpg"
        alt="Ampara animal"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ampara animal
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A AMPARA é uma OSCIP sem fins lucrativos. Somos protetores de animais
          abandonados e vítimas de maus-tratos. Lutamos para que os mais de 30
          milhões de animais de rua tenham uma vida com respeito e amor.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Saiba Mais</Button>
      </CardActions>
    </Card>,

    <Card
      sx={{
        maxWidth: 245,
        minHeight: 320,
      }}
      className="space"
    >
      <CardMedia
        component="img"
        height="140"
        image="https://imgur.com/j3GDnIq.jpg"
        alt="Plan International"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Plan International
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Uma organização humanitária, não governamental e sem fins lucrativos,
          que promove os direitos das crianças e a igualdade para as meninas.
          Acreditamos no poder e potencial de todas as crianças.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Saiba Mais</Button>
      </CardActions>
    </Card>,

    <Card
      sx={{
        maxWidth: 245,
        minHeight: 320,
      }}
      className="space"
    >
      <CardMedia
        component="img"
        height="140"
        image="https://imgur.com/TNt0anF.jpg"
        alt="Juntos somos mais"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Juntos somos mais
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          reprehenderit excepturi ex, voluptatibus quia aspernatur. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Non id provident fugiat
          quas quia.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Saiba Mais</Button>
      </CardActions>
    </Card>,

    <Card
      sx={{
        maxWidth: 245,
        minHeight: 320,
      }}
      className="space"
    >
      <CardMedia
        component="img"
        height="140"
        image="https://imgur.com/dRmmToI.jpg"
        alt="Um coração"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Um coração
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          reprehenderit excepturi ex, voluptatibus quia aspernatur. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Non id provident fugiat
          quas quia.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Saiba Mais</Button>
      </CardActions>
    </Card>,
  ];

  return (
    <div>
      <div className="about">
        <img src="https://imgur.com/clvBDgD.jpg" alt="" className="img-bg" />

        <Stack direction="row" spacing={2}>
          <img
            src="https://i0.wp.com/www.sabra.org.br/site/wp-content/uploads/2021/06/os-pilares-para-o-desenvolvimento-de-comunidades-sustentaveis-20210423165408.jpg.jpg?fit=800%2C534&ssl=1"
            alt=""
            className="img"
          />
          <div className="about-bg">
            <p className="about-text">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A Bem Fazer é uma
              plataforma desenvolvida para promover a facilitação da comunicação
              entre Organizações Não Governamentais e pessoas doadoras.
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Centralizamos ONGs
              que trabalham para reforçar o planejamento nacional e regional de
              desenvolvimento, apoiando relações econômicas, sociais e
              ambientais positivas entre áreas urbanas, periurbanas e rurais e
              pessoas que tem disponibilidade de ajudar financeiramente, com
              materiais ou tempo.
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Iniciada em 2022 e
              criado por sete mulheres desenvolvedoras que se dedicaram a ajudar
              na busca pela resposta da questão “Como será que podemos
              contribuir para tornar a sua cidade ou comunidade inclusiva,
              segura, resiliente e sustentável?”
            </p>
          </div>
        </Stack>
      </div>

      <div className="faixa">
        <p className="faixa-margin"> PARCEIROS </p>
        <hr></hr>
      </div>

      <div>
        <Box justifyContent="center" display="flex" className="card">
          <AliceCarousel
            mouseTracking
            items={imagens}
            responsive={responsive}
            controlsStrategy="alternate"
            infinite
          />
        </Box>
      </div>
      <div className="depoimentos">
        <div className="faixa">
          <p className="faixa-margin">DEPOIMENTOS</p>
          <hr></hr>
        </div>

        <Box display="flex" className="avatar">
          <div>
            <Stack direction="row" spacing={2}>
              <Avatar
                alt="Remy Sharp"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                sx={{ width: 100, height: 100 }}
              />
              <p className="depo">
                A plataforma foi essencial no crescimento de nossa ONG. Com a
                Bem Fazer conseguimos chegar a muito mais pessoas que quiser
                ajudar.
              </p>
            </Stack>
            <div className="star">
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarHalfIcon></StarHalfIcon>
            </div>
          </div>

          <div>
            <Stack direction="row" spacing={2}>
              <Avatar
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                sx={{ width: 100, height: 100 }}
              />
              <p className="depo">
                Acredito que com a Bem Fazer os processos tenham se tornado mais
                centralizados. Era o que nossa ONG precisava.
              </p>
            </Stack>
            <div className="star">
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
            </div>
          </div>

          <div>
            <Stack direction="row" spacing={2}>
              <Avatar
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                sx={{ width: 100, height: 100 }}
              />
              <p className="depo">
                A Bem Fazer me auxiliou muito na conexão com instituições que
                precisam de ajuda. Com certeza essa plataforma muda vidas!!
              </p>
            </Stack>
            <div className="star">
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
            </div>
          </div>
        </Box>
      </div>

      <Box display='flex'>
        <img className="img-depo" src="https://imgur.com/BJifacN.png" alt="" />
        <img className="img-depo1" src="https://imgur.com/BJifacN.png" alt="" />
        <img className="img-depo2" src="https://imgur.com/BJifacN.png" alt="" />
      </Box>

      <div className="button">
        <Link to="/cadastrousuario">
          <button className="button1">Saiba mais ➜</button>
        </Link>
      </div>
    </div>
  );
}
