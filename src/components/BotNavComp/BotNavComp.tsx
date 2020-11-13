import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react'
import { home, scan, personCircle } from 'ionicons/icons'
import React from 'react'
import { Route, Redirect } from 'react-router'
import HomePage from '../../pages/HomePage/HomePage'
import Tab1 from '../../pages/Tab1'
import Tab2 from '../../pages/Tab2'
import Tab3 from '../../pages/Tab3'

const BotNavComp: React.FC = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
            <Route path="/home" component={HomePage} exact={true} />
            <Route path="/tab2" component={Tab2} exact={true} />
            <Route path="/tab3" component={Tab3} exact={true} />
            <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
                <IonIcon icon={home} />
                <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
                <IonIcon icon={scan} />
                <IonLabel>Scan</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
                <IonIcon icon={personCircle} />
                <IonLabel>Profile</IonLabel>
            </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}

export default BotNavComp;