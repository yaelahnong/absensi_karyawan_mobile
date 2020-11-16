import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  IonApp
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Tab2 from './pages/Tab2';

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



const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Switch>
        <Route path="/home" exact={true}>
          <HomePage />
          <BotNavComp />
        </Route>
        <Route path="/tab2" exact={true}>
          <Tab2 />
          <BotNavComp />
        </Route>
        <Route path="/profile" exact={true}>
          <ProfilePage />
          <BotNavComp />
        </Route>
        <Route path="/login" exact={true}>
          <Login />
        </Route>
        <Route path="/forgot-password" exact={true}>
          <ForgotPassword />
        </Route>
        <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
      </Switch>
    </IonReactRouter>
  </IonApp>
);

export default App;
