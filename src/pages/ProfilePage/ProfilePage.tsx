import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonItem, IonItemDivider, IonList, IonPage, IonRow, IonText } from '@ionic/react';
import { chevronBackOutline, chevronForwardOutline, locationSharp, logoWhatsapp, mailOpen } from 'ionicons/icons';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import './ProfilePage.css';

const Content = styled(IonContent)`
    --background: #e5e7f0;
`;

const StyledContainer = styled.div`
@media screen and (min-height: 600px){
    display: flex;
    align-items: start;
    max-height: 41%;
}
@media screen and (min-height: 700px){
    display: flex;
    align-items: start;
    max-height: 45%;
}
@media screen and (min-height: 768px){
    display: flex;
    align-items: start;
    max-height: 36%;
}
`;

const StyledButtons = styled(IonButtons)`
    position: absolute;
    top: 20px;
    left: 20px;
`;

const ClipPath = styled.div`
@media screen and (min-height: 600px){
    justify-content: flex-end;
    clip-path: circle(51.2% at 88% 24%);
}
@media screen and (min-height: 700px){
    justify-content: flex-end;
    clip-path: circle(51.2% at 91% 24%);
}
@media screen and (min-height: 768px){
    justify-content: flex-end;
    clip-path: circle(51.2% at 91% 24%);
}
`;

const StyledImg = styled(IonImg)`
@media screen and (min-height: 600px){
    min-width: 350px;
    position: relative;
    top: 0;
    right: -90px;
}
@media screen and (min-height: 700px){
    min-width: 350px;
    position: relative;
    top: 0;
    right: -120px;
}
@media screen and (min-height: 768px){
    min-width: 350px;
    position: relative;
    top: 0;
    right: -112px;
}
`;

const EditButton = styled(IonButton)`
@media screen and (min-height: 600px){
    --padding-start: 5px;
    --padding-end: 5px;
    font-size: 28px;
    position: absolute;
    right: 0;
    top: 38%;
}
@media screen and (min-height: 700px){
    --padding-start: 5px;
    --padding-end: 5px;
    font-size: 28px;
    position: absolute;
    right: 0;
    top: 42.3%;
}
@media screen and (min-height: 768px){
    --padding-start: 5px;
    --padding-end: 5px;
    font-size: 28px;
    position: absolute;
    right: 0;
    top: 31%;
}
`;

const StyledCard = styled(IonCard)`
    @media screen and (min-height: 600px){
        margin-inline: 16px;
    }
    @media screen and (min-height: 700px){
        margin-inline: 32px;
    }
    @media screen and (min-height: 768px){
        margin-inline: 28px;
    }
`;

const StyledItem = styled(IonItem)`
    --padding-start: 10px;
    --inner-padding-end: 10px;
`;

const FlexBtn = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledLogoutBtn = styled(IonButton)`
    @media screen and (min-height: 600px){
        width: 33ch;
        margin-bottom: 15px;
        margin-top: 12px;
    }
    @media screen and (min-height: 700px){
        width: 39.7ch;
        margin-bottom: 15px;
        margin-top: 12px;
    }
    @media screen and (min-height: 768px){
        width: 31.7ch;
        margin-bottom: 10px;
        margin-top: 12px;
    }
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
                <Content>
                    <StyledContainer>
                        <StyledButtons slot="start" className="back-btn-profile">
                            <IonBackButton text="" className="inner-btn" icon={chevronBackOutline} color="primary" defaultHref="/home"></IonBackButton>
                        </StyledButtons>
                        <ClipPath>
                            <StyledImg src="assets/images/ino.jpg" />
                        </ClipPath>
                        <EditButton fill="clear" className="edit-btn-profile">
                            <IonIcon src="assets/icon/pencil-box.svg"></IonIcon>
                        </EditButton>
                    </StyledContainer>
                    <IonGrid className="ion-text-center">
                        <IonRow>
                            <IonCol>
                                <IonText color="primary">
                                    <h1 style={{fontWeight: 600, margin: '0'}}>Marino Imola</h1>
                                </IonText>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol style={{paddingTop: '0'}}>
                                <IonText color="primary">
                                    <p style={{margin: '0', padding: '0', fontWeight: 'bold'}}>Employee</p>
                                </IonText>
                            </IonCol>
                        </IonRow>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <IonItemDivider color="primary"></IonItemDivider>
                        </div>
                    </IonGrid>
                    <StyledCard style={{boxShadow: 'none', marginTop: '12px', marginBottom: '12px'}}>
                        <IonCardContent>
                            <IonList>
                                <StyledItem lines="none" style={{paddingBottom: '15px'}}>
                                    <IonIcon style={{backgroundColor: '#30419b', padding: '10px', borderRadius: '50%', color: '#ffffff'}} icon={mailOpen}></IonIcon>
                                    <IonText color="primary" style={{marginLeft: '12px'}}>
                                        <h3 style={{fontWeight: 'bold'}}>marinoimola@gmail.com</h3>
                                    </IonText>
                                </StyledItem>
                                <StyledItem lines="none" style={{paddingBottom: '15px'}}>
                                    <IonIcon style={{backgroundColor: '#30419b', padding: '10px', borderRadius: '50%'}} src="assets/icon/contacts-black-24dp.svg"></IonIcon>
                                    <IonText color="primary" style={{marginLeft: '12px'}}>
                                        <h3 style={{fontWeight: 'bold'}}>200310032021061001</h3>
                                    </IonText>
                                </StyledItem>
                                <StyledItem lines="none" style={{paddingBottom: '15px'}}>
                                    <IonIcon style={{backgroundColor: '#30419b', padding: '10px', borderRadius: '50%', color: '#ffffff'}} icon={logoWhatsapp}></IonIcon>
                                    <IonText color="primary" style={{marginLeft: '12px'}}>
                                        <h3 style={{fontWeight: 'bold'}}>0895-3626-69727</h3>
                                    </IonText>
                                </StyledItem>
                                <StyledItem lines="none">
                                    <IonIcon style={{backgroundColor: '#30419b', padding: '10px', borderRadius: '50%', color: '#ffffff'}} icon={locationSharp}></IonIcon>
                                    <IonText color="primary" style={{marginLeft: '12px'}}>
                                        <h3 style={{fontWeight: 'bold'}}>Bogor, Jawa Barat</h3>
                                    </IonText>
                                </StyledItem>
                            </IonList>
                        </IonCardContent>
                    </StyledCard>
                    <FlexBtn>
                        <IonButtons className="back-btn-profile">
                            <IonBackButton text="Change Password" className="inner-btn" icon={chevronForwardOutline} color="primary" defaultHref="/home"></IonBackButton>
                        </IonButtons>
                    </FlexBtn>
                    <FlexBtn>
                        <StyledLogoutBtn fill="outline" className="ion-text-center" onClick={() => this.onUserLogout()}>
                            Logout
                        </StyledLogoutBtn>
                    </FlexBtn>
                </Content>
            </IonPage>
        )
    }
}

export default ProfilePage;