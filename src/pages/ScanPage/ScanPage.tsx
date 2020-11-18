import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { Component } from 'react';
import ExploreContainer from '../../components/ExploreContainer';

class ScanPage extends Component {
    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Scan</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <ExploreContainer name="Scan QR Code" />
                </IonContent>
            </IonPage>
        )
    }
}

export default ScanPage;