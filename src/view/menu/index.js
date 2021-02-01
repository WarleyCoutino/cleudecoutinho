import React from 'react'
import { Link } from 'react-router-dom'
import { MdMenu } from 'react-icons/md'
import { FaWhatsapp, FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { School, CastForEducation, EmojiPeople, MenuBook, LocalPharmacy } from '@material-ui/icons';

import {
    MenuList, AppBar, Toolbar, IconButton, Typography,
    Drawer, List, ListItem, ListItemIcon, ListItemText,
    Divider, Collapse
} from '@material-ui/core'


export default function Menu(props) {

    const [state, setState] = React.useState({
        open: false
    })

    const [collapse, setCollapse] = React.useState({
        site: false,
        financeiro: false
    })
    return (
        <>
            { (window.innerWidth < 577) ?
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setState({ open: true })}>
                            <MdMenu />
                            <Typography variant="h6">
                                {props.title}
                            </Typography>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                :
                <nav class="header navbar navbar-expand-lg navbar-light bg-white p-0">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src="/logo.png" alt="Cleude" height="80" />
                        </Link>

                        <ul className="navbar-nav">


                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" data-toggle="dropdown">
                                    <School className="icon-lg mr-2 " />Graduação
                               </Link>
                                <MenuList className="dropdown-menu">
                                    <Link className="dropdown-item" to="#" >
                                        Faculdade Instinto Brasil de Ciências e Tecnologia LTDA
                                        </Link>

                                    <Link className="dropdown-item" to="#" >
                                        Bacharel em Enfermagem
                                    </Link>

                                    <Link className="dropdown-item" to="#" >
                                        Período: 2012 à 2017
                                        / Conclusão: 06/2017
                                    </Link>


                                </MenuList>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" data-toggle="dropdown">
                                    <CastForEducation className="icon-lg mr-2 " /> Especializações


                               </Link>
                                <MenuList className="dropdown-menu">
                                    <Link className="dropdown-item" to="#" >
                                        •Inglês–Básico
                                        </Link>

                                    <Link className="dropdown-item" to="#" >
                                        • Qualificação profissional
                                        (introdução à
                                        informática,multimídia,Windows,word,
                                        Excel,power point e internet office xp.
                                    </Link>



                                    <Link className="dropdown-item" to="#" >
                                        • Atualização em enfermagem
                                        pediátrica e neonatal 180 horas.
                                        Ead + Enfermagen a Distância
                                     </Link>


                                    <Link className="dropdown-item" to="#" >
                                        • Atualização em triagem,urgência e
                                        emergência 180 horas.
                                        Ead + Enfermagen a Distância.
                                    </Link>

                                    <Link className="dropdown-item" to="#" >
                                        • Atualização em enfermagem e a
                                        estratégia saúde da família 80
                                        horas.
                                        Ead + Enfermagen a Distância
                                    </Link>

                                    <Link className="dropdown-item" to="#" >
                                        • Biossegurança Laboratorio de
                                        DST,AIDS e hepatites virais. Telelab
                                        diagnóstico monitoramento
                                    </Link>
                                </MenuList>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/certificados" >
                                    <MenuBook className="icon-lg mr-2 " /> Certificados
                               </Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link" to="/curriculo" >
                                    <LocalPharmacy className="icon-lg mr-2 " /> Curriculo
                               </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/contatos" >
                                    <FaWhatsapp className="icon-lg mr-2 " /> Contatos
                               </Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link" to="/sobre" >
                                    <EmojiPeople className="icon-lg mr-2 " /> Sobre min
                               </Link>
                            </li>

                        </ul>

                    </div>
                </nav>

            }
            <Drawer anchor="left" open={state.open} onClose={() => setState({ open: false })}>
                <div style={{ width: 320, maxWidth: window.innerWidth - 70 }}>
                    <List component="nav" className="menu-mobile">
                        <ListItem>
                            <img className="img-fluid logo-mobile" src="/Logo.png" alt="/home" height="80" />
                        </ListItem>
                        <ListItem>
                            Cleudinei Fernandes Dos Santos Coutinho.
                             </ListItem>

                        <ListItem>
                            cleudecoutinho@icloud.com
                             </ListItem>
                        <ListItem>
                            (62) 9 9248-6496
                             </ListItem>


                        <Divider className="mt-2 mb-3" />

                        <ListItem button onClick={() => setCollapse({ site: (collapse.site) ? false : true })}>
                            <ListItemIcon>
                                <School />
                            </ListItemIcon>
                            <ListItemText primary="Graduação" />
                            {(collapse.site) ? <FaAngleUp /> : <FaAngleDown />}
                        </ListItem>

                        <Collapse in={collapse.site} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem>
                                    <Link className=" pl-5" to="#" >
                                        Faculdade Instinto Brasil de Ciências e Tecnologia LTDA
                                        </Link>
                                </ListItem>
                                <Divider className="mt-2 mb-3" />

                                <ListItem>
                                    <Link className="pl-5" to="#" >
                                        Bacharel em Enfermagem
                                        </Link>
                                </ListItem>
                                <Divider className="mt-2 mb-3" />

                                <ListItem>
                                    <Link className=" pl-5" to="#" >
                                        Período: 2012 à 2017
                                        / Conclusão: 06/2017
                                        </Link>
                                </ListItem>
                            </List>
                        </Collapse>

                        <Divider className="mt-2 mb-3" />

                        <ListItem button onClick={() => setCollapse({ site: (collapse.site) ? false : true })}>
                            <ListItemIcon>
                                <CastForEducation />
                            </ListItemIcon>
                            <ListItemText primary="Especializações" />
                            {(collapse.site) ? <FaAngleUp /> : <FaAngleDown />}
                        </ListItem>

                        <Collapse in={collapse.site} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem>
                                    <Link className=" pl-5" to="#" >
                                        •Inglês–Básico
                                        </Link>
                                </ListItem>
                                <Divider className="mt-2 mb-3" />

                                <ListItem>
                                    <Link className="pl-5" to="#" >
                                        • Qualificação profissional
                                        (introdução à
                                        informática,multimídia,Windows,word,
                                        Excel,power point e internet office xp.
                                        </Link>
                                </ListItem>
                                <Divider className="mt-2 mb-3" />

                                <ListItem>
                                    <Link className=" pl-5" to="#" >
                                        • Atualização em enfermagem
                                        pediátrica e neonatal 180 horas.
                                        Ead + Enfermagen a Distância
                                        </Link>
                                </ListItem>
                                <Divider className="mt-2 mb-3" />

                                <ListItem>
                                    <Link className=" pl-5" to="#" >
                                        • Atualização em triagem,urgência e
                                        emergência 180 horas.
                                        Ead + Enfermagen a Distância.
                                        </Link>
                                </ListItem>
                                <Divider className="mt-2 mb-3" />

                                <ListItem>
                                    <Link className=" pl-5" to="#" >
                                        • Atualização em enfermagem e a
                                        estratégia saúde da família 80
                                        horas.
                                        Ead + Enfermagen a Distância
                                        </Link>
                                </ListItem>

                                <ListItem>
                                    <Link className=" pl-5" to="#" >
                                        • Biossegurança Laboratorio de
                                        DST,AIDS e hepatites virais. Telelab
                                        diagnóstico monitoramento
                                        </Link>
                                </ListItem>
                                <Divider className="mt-2 mb-3" />
                            </List>
                        </Collapse>

                        <Divider className="mt-2 mb-3" />

                        <ListItem>
                            <ListItemIcon>
                                <MenuBook />
                            </ListItemIcon>
                            <Link className="  pl-0" to="/certificados" >
                                Certificados
                                  </Link>
                        </ListItem>

                        <Divider className="mt-2 mb-3" />

                        <ListItem>
                            <ListItemIcon>
                                <LocalPharmacy />
                            </ListItemIcon>
                            <Link className="  pl-0" to="/curriculo" >
                                Curriculo
                                  </Link>
                        </ListItem>

                        <Divider className="mt-2 mb-3" />
                        <ListItem>
                            <ListItemIcon>
                                <FaWhatsapp />
                            </ListItemIcon>
                            <Link className="  pl-0" to="/contatos" >
                                Contatos
                                  </Link>
                        </ListItem>


                        <Divider className="mt-2 mb-3" />

                        <ListItem>
                            <ListItemIcon>
                                <EmojiPeople />
                            </ListItemIcon>
                            <Link className="  pl-0" to="/sobre" >
                                Sobre min
                                  </Link>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </>
    )
}
