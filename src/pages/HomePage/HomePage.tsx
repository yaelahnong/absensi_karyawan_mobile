import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import React, { Component } from 'react';
import ExploreContainer from '../../components/ExploreContainer';

class Home extends Component {
    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Tab 1</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <ExploreContainer name="Home" />
                </IonContent>
            </IonPage>
        )
    }
}

export default Home;