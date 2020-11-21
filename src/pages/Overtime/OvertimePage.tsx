import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { Component } from 'react';
import ExploreContainer from '../../components/ExploreContainer';

class OvertimePage extends Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <IonPage>
                <IonContent>
                    <ExploreContainer name="Overtime" />
                </IonContent>
            </IonPage>
        )
    }
}

export default OvertimePage;