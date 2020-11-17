import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from './Auth/Login/Login';
import BotNavComp from './components/BotNavComp/BotNavComp';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ForgotPassword from './Auth/ForgotPassword/ForgotPassword';
import ResetPassword from './Auth/ResetPassword/ResetPassword';
import ScanPage from './pages/ScanPage/ScanPage';

const NoMatch = () => {
  return <div>404 Not found</div>
}

const App: React.FC = () => (
  <IonApp>
    <Router>
      <IonRouterOutlet>
        <Switch>
          <Route path="/home">
            <HomePage />
            <BotNavComp />
          </Route>
          <Route path="/scan">
            <ScanPage />
            <BotNavComp />
          </Route>
          <Route path="/profile">
            <ProfilePage />
            <BotNavComp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/reset-password/:token" component={ResetPassword} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </IonRouterOutlet>
    </Router>
  </IonApp>
);

export default App;
