import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

const Home = lazy(() => import('./view/home'))
const Curriculo = lazy(() => import('./view/curriculo'))
const Certificados = lazy(() => import('./view/certificados'))
const Contatos = lazy(() => import('./view/contatos'))
const Sobre = lazy(() => import('./view/sobre'))



const Routes = () => (
    <Router>
        <Suspense fallback={<div className="d-flex justify-content-center mt-5 pt-5">
            <CircularProgress /> </div>}>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/curriculo" component={Curriculo} />
                <Route exact path="/certificados" component={Certificados} />
                <Route exact path="/contatos" component={Contatos} />
                <Route exact path="/sobre" component={Sobre} />



            </Switch>
        </Suspense>
    </Router>
)

export default Routes;