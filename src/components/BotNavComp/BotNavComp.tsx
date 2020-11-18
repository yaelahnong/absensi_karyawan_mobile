import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { home, scan, personCircle } from 'ionicons/icons';
import React from 'react';
import { Route, Redirect } from 'react-router';
import HomePage from '../../pages/HomePage/HomePage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import ScanPage from '../../pages/ScanPage/ScanPage';
import Tab2 from '../../pages/Tab2';

const BotNavComp: React.FC = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route path="/home" component={HomePage} exact={true} />
                <Route path="/scan" component={ScanPage} exact={true} />
                <Route path="/profile" component={ProfilePage} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
                <IonIcon icon={home} />
                <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="scan" href="/scan">
                <IonIcon icon={scan} />
                <IonLabel>Scan</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
                <IonIcon icon={personCircle} />
                <IonLabel>Profile</IonLabel>
            </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}

export default BotNavComp;