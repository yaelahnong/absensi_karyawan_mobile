import { IonCard, IonContent, IonInput, IonPage } from '@ionic/react';
import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <IonPage>
                <IonContent fullscreen>
                    <IonCard>
                        <IonContent>
                            <IonInput />
                        </IonContent>
                    </IonCard>
                </IonContent>
            </IonPage>
        )
    }
}

export default Login;