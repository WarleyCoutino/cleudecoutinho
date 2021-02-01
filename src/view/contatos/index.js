import React from 'react'
import Menu from '../menu'
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import { Typography, CssBaseline, Container } from '@material-ui/core';
import { FaWhatsapp } from 'react-icons/fa';
import { ContactPhone, Email } from '@material-ui/icons';

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

export default function Contatos() {
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
                                <Typography variant="h5" component="h2" gutterBottom>
                                    <Link className="nav-link" to="#" >
                                        <FaWhatsapp className="icon-lg mr-2 " /> (62) 9 9248-6496
                               </Link>
                                </Typography>


                                <Typography variant="h5" component="h2" gutterBottom>
                                    <Link className="nav-link" to="#" >
                                        <ContactPhone className="icon-lg mr-2 " /> (62) 9 9248-6492
                               </Link>
                                </Typography>

                                <Typography variant="h5" component="h2" gutterBottom>
                                    <Link className="nav-link" to="#" >
                                        <Email className="icon-lg mr-2 " /> cleudecoutinho@icloud.com
                               </Link>
                                </Typography>

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

