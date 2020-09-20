import React, { Suspense, lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './Header';
import './App.css'

const Landing = lazy(() => import('./Landing'));
const Results = lazy(() => import('./Results'));
const Loading = lazy(() => import('./Loading'));


const routes = [
  <Route path="/results" exact component={Results} key="results" />,
  <Route path="/loading" exact component={Loading} key="loading" />,
  <Route path="/" exact component={Landing} key="landing" />
]


export default function App() {
  const location = useLocation();

  return (
    <FadeIn>

      <Header />

      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={300}
        >
          <Suspense fallback={<p>Loading...</p>}>
            <section className="route-section">
              <Switch location={location}>
                {routes}
              </Switch>
            </section>
          </Suspense>
        </CSSTransition>
      </TransitionGroup>
    </FadeIn>
  )
}
