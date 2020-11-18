import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonImg, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBackOutline, chevronBackSharp } from 'ionicons/icons';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import './ProfilePage.css';

const StyledContainer = styled.div`
    display: flex;
    align-items: start;
`;

const StyledButtons = styled(IonButtons)`
    position: absolute;
    top: 20px;
    left: 20px;
`;

const ClipPath = styled.div`
    justify-content: flex-end;
    clip-path: circle(74.2% at 100% 11%);
`;

const StyledImg = styled(IonImg)`
    min-width: 350px;
    position: relative;
    top: 0;
    right: -62px;
`;



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
                {/* <IonHeader>
                    <IonToolbar>
                        <IonTitle>Profile</IonTitle>
                    </IonToolbar>
                </IonHeader> */}
                <IonContent>
                    <StyledContainer>
                        <StyledButtons slot="start">
                            <IonBackButton text="" icon={chevronBackOutline} color="primary" defaultHref="/home"></IonBackButton>
                        </StyledButtons>
                        <ClipPath>
                            <StyledImg src="assets/images/ino.jpg" />
                        </ClipPath>
                    </StyledContainer>

                    <IonButton className="ion-text-center" onClick={() => this.onUserLogout()}>
                        Logout
                    </IonButton>
                </IonContent>
            </IonPage>
        )
    }
}

export default ProfilePage;