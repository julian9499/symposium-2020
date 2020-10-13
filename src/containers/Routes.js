import React from 'react'
import { Route, Switch } from 'react-router'

import HomePage from 'pages/home'
import ProgramPage from 'pages/program'
import TicketsPage from 'pages/tickets'
import EventPage from 'pages/event'
import AboutPage from 'pages/about'
import NotFoundPage from 'pages/notFound'

export default () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/program" component={ProgramPage} />
    <Route path="/event/:event" component={EventPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/tickets" component={TicketsPage} />
    <Route path="/register" component={() =>
      window.location.replace("http://wisv.ch/sympoticket")} />
    {/*<Route path='/history' component={() =>*/}
      {/*window.location.replace(`https://symposium.ch.tudelft.nl/2017/`)} />*/}
    <Route component={NotFoundPage} />
  </Switch>
)
