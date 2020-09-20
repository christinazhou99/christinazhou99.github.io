import React, { Suspense, lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './Header';


const Landing = lazy(() => import('./Landing'));
// const Login = lazy(() => import('../components/Login'));


const routes = [
  // <Route path="/login" exact component={Login} key="login" />,
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
