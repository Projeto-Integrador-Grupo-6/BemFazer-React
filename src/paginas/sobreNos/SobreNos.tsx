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
    1024: { items: 4 },
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
        image="https://cdn.dooca.store/477/products/a2928a.jpg?v=1614742661"
        alt="Juntos somos mais"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Juntos somos mais
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Com o propósito de transformar a vida de quem constrói e de quem ajuda a construir sonhos, temos orgulho de dizer que estabelecemos a maior rede de relacionamento da construção civil.
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
        image="https://imgur.com/tQ9bqNN.jpg"
        alt="Um coração"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Um coração
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Ninguém deveria deixar de ter a ternura de um coração de criança, mesmo tendo somando muitos anos de vida. Crescer, em muitos casos, é encolher-se. Ser grande, é uma questão de inteligência e de sabedoria.
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
    </Card>
  ];

  return (
    <div>
        <img src="https://imgur.com/xExdVhn.png" alt="" className="img5" />

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
            autoPlay
            animationDuration={4500}
            autoPlayInterval={1000}
          />
        </Box>
      </div>

      <div className="depoimentos">
        <div className="faixa">
          <p className="faixa-margin">DEPOIMENTOS</p>
          <hr></hr>
        </div>

        <section className="page-contain">
          <a href="#" className="data-card">
            <h4>Francisco Diniz</h4>
            <p className="p-depo">
              A plataforma foi essencial no crescimento de nossa ONG. Com a Bem
              Fazer conseguimos chegar a muito mais pessoas que quiser ajudar.
            </p>
            <div className="avatar">
              <Avatar
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                sx={{ width: 80, height: 80 }}
              />
            </div>
            <span className="link-text">
              <svg
                width="25"
                height="16"
                viewBox="0 0 25 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
                  fill="#E55C51"
                />
              </svg>
            </span>
          </a>

          <a href="#" className="data-card">
            <h4>Claudia Fanzioni</h4>
            <p className="p-depo">
              Acredito que com a Bem Fazer os processos tenham se tornado mais
              centralizados. Era o que nossa ONG precisava e buscávamos.
            </p>
            <div className="avatar">
              <Avatar
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                sx={{ width: 80, height: 80 }}
              />
            </div>
            <span className="link-text">
              <svg
                width="25"
                height="16"
                viewBox="0 0 25 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
                  fill="#E55C51"
                />
              </svg>
            </span>
          </a>

          <a href="#" className="data-card">
            <h4>Marcio Furtado</h4>
            <p className="p-depo">
              A Bem Fazer me auxiliou muito na conexão com instituições que
              precisam de ajuda. Com certeza essa plataforma muda vidas!!
            </p>
            <div className="avatar">
              <Avatar
                alt="Remy Sharp"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                sx={{ width: 80, height: 80 }}
              />
            </div>
            <span className="link-text">
              <svg
                width="25"
                height="16"
                viewBox="0 0 25 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
                  fill="#E55C51"
                />
              </svg>
            </span>
          </a>
        </section>
      </div>
    </div>
  );
}
