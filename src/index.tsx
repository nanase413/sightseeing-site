import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Top } from './pages/top/top'
import { Sub } from './pages/sub/sub'
import { Malta } from './pages/sub/malta/malta'
import { AboutMalta } from './pages/sub/malta/details/aboutMalta'
import { MaltaFood } from './pages/sub/malta/details/maltaFood'
import { MaltaSpot } from './pages/sub/malta/details/maltaSpot'
import { America } from './pages/sub/america/america'
import { AboutAmerica } from './pages/sub/america/details/aboutAmerica'
import { AmericaFood } from './pages/sub/america/details/americaFood'
import { AmericaSpot } from './pages/sub/america/details/americaSpot'
import { Vietnam } from './pages/sub/vietnam/vietnam'
import { AboutVietnam } from './pages/sub/vietnam/details/aboutVietnam'
import { VietnamFood } from './pages/sub/vietnam/details/vietnamFood'
import { VietnamSpot } from './pages/sub/vietnam/details/vietnamSpot'
import { Germany } from './pages/sub/germany/germany'
import { AboutGermany } from './pages/sub/germany/details/aboutGermany'
import { GermanyFood } from './pages/sub/germany/details/germanyFood'
import { GermanySpot } from './pages/sub/germany/details/germanySpot'

const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing: border-box;
  }
`
  
const Main = (
  <>
    <GlobalStyle />
    <Router>
        <Route exact path="/top">
          <Top />
        </Route>
        <Route exact path="/sub">
          <Sub />
        </Route>
        <Route exact path="/malta">
          <Malta />
        </Route>
        <Route exact path="/malta/details/aboutMalta">
          <AboutMalta />
        </Route>
        <Route exact path="/malta/details/maltaFood">
          <MaltaFood />
        </Route>
        <Route exact path="/malta/details/maltaSpot">
          <MaltaSpot />
        </Route>
        <Route exact path="/america">
          <America />
        </Route>
        <Route exact path="/america/details/aboutAmerica">
          <AboutAmerica />
        </Route>
        <Route exact path="/america/details/americaFood">
          <AmericaFood />
        </Route>
        <Route exact path="/america/details/americaSpot">
          <AmericaSpot />
        </Route>
        <Route exact path="/vietnam">
          <Vietnam />
        </Route>
        <Route exact path="/vietnam/details/aboutVietnam">
          <AboutVietnam />
        </Route>
        <Route exact path="/vietnam/details/vietnamFood">
          <VietnamFood />
        </Route>
        <Route exact path="/vietnam/details/vietnamSpot">
          <VietnamSpot />
        </Route>
        <Route exact path="/germany">
          <Germany />
        </Route>
        <Route exact path="/germany/details/aboutGermany">
          <AboutGermany />
        </Route>
        <Route exact path="/germany/details/germanyFood">
          <GermanyFood />
        </Route>
        <Route exact path="/germany/details/germanySpot">
          <GermanySpot />
        </Route>

        <Redirect to="/top" path="*" />
      </Router>
  </>
)

render(Main, document.getElementById('app'))
