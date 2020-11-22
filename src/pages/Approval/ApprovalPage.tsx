import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonPage, IonToggle } from '@ionic/react';
import { moon } from 'ionicons/icons';
import React, { Component } from 'react';
import ExploreContainer from '../../components/ExploreContainer';

class ApprovalPage extends Component {

    componentDidMount() {
        
    }

    // toggleDarkModeHandler = () => document.body.classList.toggle('dark');

    render() {
        return (
            <IonPage>
                <IonContent>
                    <ExploreContainer name="Approval" />
                    <IonList>
                        <IonItem lines="none">
                            <IonIcon slot="start" icon={moon} />
                            <IonLabel>Dark Mode</IonLabel>
                            <IonToggle slot="end" name="darkMode" color="dark" onIonChange={() => document.body.classList.toggle('dark')} />
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonPage>
        )
    }
}

export default ApprovalPage;