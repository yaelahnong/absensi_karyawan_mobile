import { IonContent, IonPage } from '@ionic/react';
import React, { Component } from 'react';
import ExploreContainer from '../../components/ExploreContainer';

class ScanPage extends Component {
    render() {
        return (
            <IonPage>
                <IonContent>
                    <ExploreContainer name="Scan QR Code" />
                </IonContent>
            </IonPage>
        )
    }
}

export default ScanPage;