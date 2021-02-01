import React from 'react'
import Menu from '../menu'
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CssBaseline, CardActionArea, CardMedia, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

function Copyright() {
  return (
    <Typography className=" justify-center" variant="body2" color="textSecondary">
      {'Direito Autoral ©'}
      <Link color="inherit" href="https://material-ui.com/">
        Cleudinei Coutinho.
      </Link>
      {new Date().getFullYear()}
      <div class="footer">
        <div class="social-links text-center">
          <a href="https://www.facebook.com/Cleude.Coutinho" class="facebook"><i class="fa fa-facebook fa-fw"></i></a>
          <a href="https://www.instagram.com/cleudecoutinho" class="instagram"><i class="fa fa-instagram fa-fw"></i></a>
          <a href="https://www.linkedin.com/in/cleudinei-fernandes-coutinho-440631200" class="linkedin"><i class="fa fa-linkedin fa-fw"></i></a>
        </div>
      </div>
    </Typography>
  );
}

export default function Certificados() {
  const classes = useStyles();
  return (
    <>
      <Menu title="Pagina Principal" />
      <div>
        <div className="container p-xs-0 mt-4 pt-3">
          <div className="d-flex mb-4 pl-3 pr-3 pl-md-0 pr-md-0">
            <h3 className="font-weight-normal"><span className="hidden-xs m-0 pl-5 mt-2"></span></h3>
          </div>
          <div className="card text-center mt-md mb-5 pt-md pb-5" >
            <div className="card-body">
              <div>
              <div className="justify-content-center " maxWidth="sm">
                <Card className="justify-content-center mt-md mb-5 pt-md pb-5">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Diploma_Frente"
                      height="750"
                      image="/Diploma.jpg"
                      title="Diploma_Frente"
                    />

                  </CardActionArea>
                </Card>

                <Card className=" justify-content-center mt-md mb-5 pt-md pb-5">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Diploma_Atraz"
                      height="750"
                      image="/Diploma1.jpg"
                      title="Diploma_Atraz"
                    />
                  </CardActionArea>
                </Card>

                <Card className=" justify-content-center mt-md mb-5 pt-md pb-5">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Farmácia_Frente"
                      height="750"
                      image="/Informática.jpg"
                      title="Farmácia_Frente"
                    />

                  </CardActionArea>
                </Card>


                <Card className=" justify-content-center mt-md mb-5 pt-md pb-5">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Farmácia_Atraz"
                      height="750"
                      image="/Informática1.jpg"
                      title="Farmácia_Atraz"
                    />

                  </CardActionArea>
                </Card>

                <Card className=" justify-content-center mt-md mb-5 pt-md pb-5">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Saúde"
                      height="750"
                      image="/Saúde.png"
                      title="Saúde"
                    />

                  </CardActionArea>
                </Card>


                <Card className=" justify-content-center mt-md mb-5 pt-md pb-5">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Triagen"
                      height="750"
                      image="/Triagen.png"
                      title="Triagen"
                    />

                  </CardActionArea>
                </Card>

                <Card className=" justify-content-center mt-md mb-5 pt-md pb-5">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Fibra"
                      height="750"
                      image="/Fibra.jpg"
                      title="Fibra"
                    />

                  </CardActionArea>
                </Card>

                <Card className=" justify-content-center mt-md mb-5 pt-md pb-5">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contraceptivos"
                      height="750"
                      image="/Contraceptivos.jpg"
                      title="Contraceptivos"
                    />

                  </CardActionArea>
                </Card>


                <Card className=" justify-content-center mt-md mb-5 pt-md pb-5">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Farmácia_Frente"
                      height="750"
                      image="/Farmácia.jpg"
                      title="Farmácia_Frente"
                    />

                  </CardActionArea>
                </Card>


                <Card className=" justify-content-center mt-md mb-5 pt-md pb-5">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Farmácia_Atraz"
                      height="750"
                      image="/Farmácia1.jpg"
                      title="Farmácia_Atraz"
                    />

                  </CardActionArea>
                </Card>

                <Card className=" justify-content-center mt-md mb-5 pt-md pb-5">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Marketing"
                      height="750"
                      image="/Marketing.jpg"
                      title="Marketing"
                    />

                  </CardActionArea>
                </Card>

                <Card className=" justify-content-center mt-md mb-5 pt-md pb-5">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Etica_Trabalho"
                      height="750"
                      image="/Etica_Trabalho.jpg"
                      title="Etica_Trabalho"
                    />

                  </CardActionArea>
                </Card>

                <Card className=" justify-content-center mt-md mb-5 pt-md pb-5">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Proatividade"
                      height="750"
                      image="/Proatividade.jpg"
                      title="Proatividade"
                    />

                  </CardActionArea>
                </Card>

                <Card className=" justify-content-center mt-md mb-5 pt-md pb-5">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Gestão"
                      height="750"
                      image="/Gestão.jpg"
                      title="Gestão"
                    />
                  </CardActionArea>
                </Card>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={classes.root}>
          <CssBaseline />
          <Container component="main" className={classes.main} maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
              {/* add qualquer coisa aqui de titulo */}
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              {'Sou uma pessoa dinâmica proativa, tenho facilidade em trabalhar em equipe sou'}
              {'comprometido com as minhas responsabilidades procuro ser pontual e aceito desafios.'}
            </Typography>
            <Typography variant="body1"></Typography>
          </Container>
          <footer className={classes.footer}>
            <Container maxWidth="sm">
              <Typography variant="body1"></Typography>
              <Copyright />
            </Container>
          </footer>
        </div>
      </div>
    </>

  )
}

