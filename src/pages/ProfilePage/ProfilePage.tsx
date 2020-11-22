import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFab, IonGrid, IonIcon, IonImg, IonItemDivider, IonPage, IonRow, IonText } from '@ionic/react';
import { camera, chevronBackOutline, chevronForwardOutline, locationSharp, logoWhatsapp, mailOpen, pencil, pencilSharp } from 'ionicons/icons';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import './ProfilePage.css';

const Content = styled(IonContent)`
    --overflow: scroll;
    @media screen and (min-height: 768px){
        --overflow: hidden;
    }
`;

const StyledContainer = styled.div`
@media screen and (min-height: 500px){
    display: flex;
    align-items: start;
    max-height: 49%;
}
@media screen and (min-height: 600px){
    display: flex;
    align-items: start;
    max-height: 43%;
}
@media screen and (min-height: 700px){
    display: flex;
    align-items: start;
    max-height: 45%;
}
@media screen and (min-height: 720px){
    display: flex;
    align-items: start;
    max-height: 42%;
}
@media screen and (min-height: 768px){
    display: flex;
    align-items: start;
    max-height: 33.5%;
}
@media screen and (min-height: 823px){
    display: flex;
    align-items: start;
    max-height: 36.7%;
}
@media screen and (min-height: 992px){
    display: flex;
    align-items: start;
    max-height: 48%;
}
@media screen and (min-height: 1366px;){
    display: flex;
    align-items: start;
    max-height: 53%;
}
`;

const StyledButtons = styled(IonButtons)`
    position: absolute;
    top: 20px;
    left: 20px;
`;

const ClipPath = styled.div`
@media screen and (min-height: 500px){
    justify-content: flex-end;
    clip-path: circle(51.2% at 88% 24%);
}
@media screen and (min-height: 600px){
    justify-content: flex-end;
    clip-path: circle(51.2% at 88% 24%);
}
@media screen and (min-height: 700px){
    justify-content: flex-end;
    clip-path: circle(51.2% at 91% 22%);
}
@media screen and (min-height: 768px){
    justify-content: flex-end;
    clip-path: circle(51.2% at 91% 21%);
}
@media screen and (min-height: 823px){
    justify-content: flex-end;
    clip-path: circle(51.2% at 91% 19%);
}
@media screen and (min-height: 992px){
    justify-content: flex-end;
    clip-path: circle(48.8% at 91% 15%);
}
`;

const StyledImg = styled(IonImg)`
@media screen and (min-height: 500px){
    min-width: 350px;
    position: relative;
    top: 0;
    right: -90px;
}
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
@media screen and (min-height: 1024px){
    min-width: 350px;
    position: relative;
    top: 0;
    right: -236px;
}
@media screen and (min-height: 1366px){
    min-width: 350px;
    position: relative;
    top: 0;
    right: -305px;
}
`;

const EditProfilePicture = styled(IonButton)`
z-index: 1;
&::part(native) {
    padding: 0;
}
@media screen and (min-height: 500px){
    font-size: 24px;
    position: absolute;
    right: 0;
    top: 43%;
}
@media screen and (min-height: 600px){
    font-size: 28px;
    position: absolute;
    right: 2.5%;
    top: 42.3%;
}
@media screen and (min-height: 667px){
    font-size: 28px;
    position: absolute;
    right: 0;
    top: 38.5%;
}
@media screen and (min-height: 682px){
    font-size: 28px;
    position: absolute;
    right: 0;
    top: 39%;
}
@media screen and (min-height: 701px){
    font-size: 28px;
    position: absolute;
    right: 0;
    top: 41%;
}
@media screen and (min-height: 720px){
    font-size: 28px;
    position: absolute;
    right: 0;
    top: 37.7%;
}
@media screen and (min-height: 731px){
    font-size: 28px;
    position: absolute;
    right: 0;
    top: 41%;
}
@media screen and (min-height: 768px){
    font-size: 28px;
    position: absolute;
    right: 0;
    top: 29.7%;
}
@media screen and (min-height: 812px){
    font-size: 28px;
    position: absolute;
    right: 5%;
    top: 32.2%;
    --ripple-color: rgba(251,251,251,0);
}
@media screen and (min-height: 823px){
    font-size: 28px;
    position: absolute;
    right: 5%;
    top: 34.7%;
    --ripple-color: rgba(251,251,251,0);
}
@media screen and (min-height: 992px){
    font-size: 28px;
    position: absolute;
    right: 3%;
    top: 47.7%;
}
@media screen and (min-height: 1366px){
    font-size: 28px;
    position: absolute;
    right: 2%;
    top: 47.3%;
}
`;

const StyledCard = styled(IonCard)`
    @media screen and (min-height: 500px){
        margin-inline: 10px;
    }
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

const StyledCardContent = styled(IonCardContent)`
    paddingTop: 10px; 
    paddingBottom: 10px; 
    paddingLeft: 10px; 
    paddingRight: 10px;
`;

const StyledLogoutBtn = styled(IonButton)`
    @media screen and (min-height: 500px){
        margin-bottom: 28px;
        margin-top: 12px;
        margin-left: 10px;
        margin-right: 10px;
    }
    @media screen and (min-height: 600px){
        margin-bottom: 24px;
        margin-top: 12px;
        margin-inline: 16px;
    }
    @media screen and (min-height: 700px){
        margin-bottom: 28px;
        margin-top: 12px;
        margin-inline: 32px;
    }
    @media screen and (min-height: 768px){
        margin-bottom: 10px;
        margin-top: 12px;
        margin-inline: 28px;
    }
    @media screen and (min-height: 992px){
        margin-bottom: 10px;
        margin-top: 12px;
        margin-inline: 28px;
    }
`;
const StyledChangePassword = styled(IonButton)`
    height: 28px;
    @media screen and (min-height: 500px){

        margin-left: 10px;
        margin-right: 10px;
    }
    @media screen and (min-height: 600px){
        margin-inline: 16px;
    }
    @media screen and (min-height: 700px){
        margin-inline: 32px;
    }
    @media screen and (min-height: 768px){
        margin-inline: 28px;
    }
    @media screen and (min-height: 992px){
        margin-inline: 28px;
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
                            <StyledImg src={`assets/images/${sessionStorage.getItem('foto')}`} />
                        </ClipPath>
                    </StyledContainer>
                        <EditProfilePicture fill="clear" onClick={() => console.log('clicked!')} className="edit-btn-profile">
                            <IonIcon color="secondary" className="camera-icon" icon={camera}></IonIcon>
                        </EditProfilePicture>
                    <IonGrid className="ion-text-center">
                        <IonRow>
                            <IonCol>
                                <IonText color="dark">
                                    <h1 style={{fontWeight: 600, margin: '0'}}>{sessionStorage.getItem('nama')}</h1>
                                </IonText>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol style={{paddingTop: '0'}}>
                                <IonText color="dark">
                                    <p style={{margin: '0', padding: '0', fontWeight: 'bold'}}>Employee</p>
                                </IonText>
                            </IonCol>
                        </IonRow>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <IonItemDivider color="dark"></IonItemDivider>
                        </div>
                    </IonGrid>
                    <StyledCard color="light" style={{boxShadow: 'none', marginTop: '12px', marginBottom: '12px'}}>
                        <IonFab horizontal="end" onClick={() => console.log('edit!')} style={{top: '20px', right: '20px'}}>
                            <IonIcon  src="assets/icon/pencil.svg" style={{fontSize: '18px'}}></IonIcon>
                        </IonFab>
                        <StyledCardContent>
                            <IonGrid>
                                <IonRow style={{paddingBottom: '15px', alignItems: 'center'}}>
                                    <IonCol size="auto" no-padding style={{display: 'flex', alignItems: 'center'}}>
                                        <IonIcon size="small" style={{backgroundColor: '#30419b', padding: '10px', borderRadius: '50%', color: '#ffffff'}} icon={mailOpen}></IonIcon>
                                        <IonText color="dark" style={{marginLeft: '12px'}}>
                                            <h3 style={{fontWeight: 'bold'}}>{sessionStorage.getItem('email')}</h3>
                                        </IonText>
                                    </IonCol>
                                    {/* <IonCol size="auto">
                                        <IonButton fill="clear" style={{}}>
                                            <IonIcon src="assets/icon/pencil.svg" style={{fontSize: '14px'}}></IonIcon>
                                        </IonButton>
                                    </IonCol> */}
                                </IonRow>
                                <IonRow style={{paddingBottom: '15px', alignItems: 'center'}}>
                                    <IonCol no-padding style={{display: 'flex', alignItems: 'center'}}>
                                        <IonIcon size="small" style={{backgroundColor: '#30419b', padding: '10px', borderRadius: '50%'}} src="assets/icon/contacts-black-24dp.svg"></IonIcon>
                                        <IonText color="dark" style={{marginLeft: '12px'}}>
                                            <h3 style={{fontWeight: 'bold'}}>200310032021061001</h3>
                                        </IonText>
                                    </IonCol>
                                </IonRow>
                                <IonRow style={{paddingBottom: '15px', alignItems: 'center'}}>
                                    <IonCol no-padding style={{display: 'flex', alignItems: 'center'}}>
                                        <IonIcon size="small" style={{backgroundColor: '#30419b', padding: '10px', borderRadius: '50%', color: '#ffffff'}} icon={logoWhatsapp}></IonIcon>
                                        <IonText color="dark" style={{marginLeft: '12px'}}>
                                            <h3 style={{fontWeight: 'bold'}}>{sessionStorage.getItem('no_telp')}</h3>
                                        </IonText>
                                    </IonCol>
                                </IonRow>
                                <IonRow style={{alignItems: 'center'}}>
                                    <IonCol no-padding style={{display: 'flex', alignItems: 'center'}}>
                                        <IonIcon size="small" style={{backgroundColor: '#30419b', padding: '10px', borderRadius: '50%', color: '#ffffff'}} icon={locationSharp}></IonIcon>
                                        <IonText color="dark" style={{marginLeft: '12px'}}>
                                            <h3 style={{fontWeight: 'bold'}}>Bogor, Jawa Barat</h3>
                                        </IonText>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                            {/* <IonList>
                                <StyledItem lines="none" style={{paddingBottom: '15px'}}>
                                    <IonIcon style={{backgroundColor: '#30419b', padding: '10px', borderRadius: '50%', color: '#ffffff'}} icon={mailOpen}></IonIcon>
                                    <IonText color="primary" style={{marginLeft: '12px'}}>
                                        <h3 style={{fontWeight: 'bold'}}>{sessionStorage.getItem('email')}</h3>
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
                                        <h3 style={{fontWeight: 'bold'}}>{sessionStorage.getItem('no_telp')}</h3>
                                    </IonText>
                                </StyledItem>
                                <StyledItem lines="none">
                                    <IonIcon style={{backgroundColor: '#30419b', padding: '10px', borderRadius: '50%', color: '#ffffff'}} icon={locationSharp}></IonIcon>
                                    <IonText color="primary" style={{marginLeft: '12px'}}>
                                        <h3 style={{fontWeight: 'bold'}}>Bogor, Jawa Barat</h3>
                                    </IonText>
                                </StyledItem>
                            </IonList> */}
                        </StyledCardContent>
                    </StyledCard>
                    {/* <FlexBtn>
                        <IonButtons className="back-btn-profile">
                            <IonBackButton text="Change Password" className="inner-btn" icon={chevronForwardOutline} color="primary" defaultHref="/home"></IonBackButton>
                        </IonButtons>
                    </FlexBtn> */}
                    <StyledChangePassword expand="block" fill="clear">
                        <IonText>Change Password</IonText>
                        <IonIcon slot="end" icon={chevronForwardOutline}></IonIcon>
                    </StyledChangePassword>
                    <StyledLogoutBtn expand="block" fill="outline" className="logout-btn" onClick={() => this.onUserLogout()}>
                        Logout
                    </StyledLogoutBtn>
                </Content>
            </IonPage>
        )
    }
}

export default ProfilePage;