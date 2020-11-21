import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { home, scan, personCircle, homeOutline, scanOutline, timeOutline, personOutline, readerOutline } from 'ionicons/icons';
import React from 'react';
import { Route } from 'react-router';
import HomePage from '../../pages/HomePage/HomePage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import ScanPage from '../../pages/ScanPage/ScanPage';

import Clock from '../../assets/icon/clock.svg';
import ClipboardText from '../../assets/icon/clipboard-text.svg';
import OvertimePage from '../../pages/Overtime/OvertimePage';
import ApprovalPage from '../../pages/Approval/ApprovalPage';

const BotNavComp: React.FC = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route path="/home" component={HomePage} exact={true} />
                <Route path="/overtime" component={OvertimePage} exact={true} />
                <Route path="/scan" component={ScanPage} exact={true} />
                <Route path="/approval" component={ApprovalPage} exact={true} />
                <Route path="/profile" component={ProfilePage} exact={true} />
            </IonRouterOutlet>
            <IonTabBar color="light" slot="bottom">
            <IonTabButton tab="home" href="/home">
                <IonIcon size="medium" icon={home} md={home} ios={homeOutline} />
                <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="overtime" href="/overtime">
                <IonIcon size="medium" icon={Clock} md={Clock} ios={timeOutline} />
                <IonLabel>Overtime</IonLabel>
            </IonTabButton>
            <IonTabButton tab="scan" href="/scan">
                <IonIcon size="medium" icon={scan} md={scan} ios={scanOutline} />
                <IonLabel>Scan</IonLabel>
            </IonTabButton>
            <IonTabButton tab="approval" href="/approval">
                <IonIcon size="medium" icon={ClipboardText} md={ClipboardText} ios={readerOutline} />
                <IonLabel>Approval</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
                <IonIcon size="medium" icon={personCircle} md={personCircle} ios={personOutline} />
                <IonLabel>Profile</IonLabel>
            </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}

export default BotNavComp;