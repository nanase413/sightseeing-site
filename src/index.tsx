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
import { MaltaSpot } from './pages/sub/malta/spot/maltaSpot'

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
        <Route exact path="/malta/food/maltaSpot">
          <MaltaSpot />
        </Route>
        <Redirect to="/top" path="*" />
      </Router>
  </>
)

render(Main, document.getElementById('app'))
