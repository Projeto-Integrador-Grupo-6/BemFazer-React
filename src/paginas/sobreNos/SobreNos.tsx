import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, flexbox } from "@mui/system";
import { Grid } from "@mui/material";
import "./SobreNos.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

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
      className='space'
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          reprehenderit excepturi ex nostrum, voluptatibus quia aspernatur.
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
      className='space'
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          reprehenderit excepturi ex nostrum, voluptatibus quia aspernatur.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Saiba Mais</Button>
      </CardActions>
    </Card>,

    <Card
      sx={{
        maxWidth: 245,
        minHeight: 320
      }}
      className='space'
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          reprehenderit excepturi ex nostrum, voluptatibus quia aspernatur.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Saiba Mais</Button>
      </CardActions>
    </Card>,

    <Card
      sx={{
        maxWidth: 245,
        minHeight: 320
      }}
      className='space'
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
          reprehenderit excepturi ex nostrum, voluptatibus quia aspernatur.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Saiba Mais</Button>
      </CardActions>
    </Card>,

    <Card
      sx={{
        maxWidth: 245,
        minHeight: 320
      }}
      className='space'
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
          reprehenderit excepturi ex nostrum, voluptatibus quia aspernatur.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Saiba Mais</Button>
      </CardActions>
    </Card>,
  ];

  return (
    <div>
      <Box className='about' justifyContent="center" display="flex">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fugit
          impedit, amet excepturi facere est nemo molestiae necessitatibus
          voluptatem. Maxime est voluptatum dolor eaque quod esse voluptas
          aspernatur eveniet vel! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. In nobis quibusdam rem ipsum odio. Perspiciatis
          mollitia explicabo fuga doloremque quis molestias tempore dolore
          atque, doloribus temporibus eaque, veritatis, quia eveniet? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum
          officiis enim recusandae, quis commodi odit nisi tempora! Eum
          asperiores eligendi neque sunt reiciendis dolore ut sint, quo nisi
          impedit.
        </p>
      </Box>

      <div className="parceiros">
        <p> Saiba mais de nossos parceiros:</p>
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
    </div>
  );
}
