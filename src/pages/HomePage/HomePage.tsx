import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';

class HomePage extends Component {
    state = {
        redirect: false
    }

    componentDidMount() {
        if(sessionStorage.getItem("login")) {
            
        } else {
            this.setState({
                redirect: true
            });
        }
    }

    render() {
        if(this.state.redirect === true)     {
            return <Redirect to="/login" />
        }
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Home</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <ExploreContainer name="Home" />
                </IonContent>
            </IonPage>
        )
    }
}

export default HomePage;