import { IonButton, IonContent, IonHeader, IonPage, IonSpinner, IonTitle, IonToolbar } from '@ionic/react';
import React, { Component } from 'react';
import { Redirect } from 'react-router';

class ProfilePage extends Component {
    state = {
        redirect: false,
        isLoading: false
    }

    componentDidMount() {
        if(sessionStorage.getItem("login")) {
            
        } else {
            this.setState({
                redirect: true
            });
        }
    }

    onUserLogout = () => {
        sessionStorage.setItem("login", "");
        sessionStorage.clear();
        localStorage.clear();
        this.setState({
            redirect: true
        });

    }

    render() {
        if(this.state.redirect === true)     {
            return <Redirect to="/login" />
        }
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Profile</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonButton className="ion-text-center" onClick={() => this.onUserLogout()}>
                        {this.state.isLoading ? <IonSpinner color="light" /> : 'Logout'}
                    </IonButton>
                    
                </IonContent>
            </IonPage>
        )
    }
}

export default ProfilePage;