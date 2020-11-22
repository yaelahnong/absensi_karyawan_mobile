import { IonPage, IonContent, IonGrid, IonRow, IonText, IonCol, IonImg, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonButton, IonDatetime, IonLabel } from '@ionic/react';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import './HomePage.css';

const StyledBackgroundImg = styled(IonContent)`
    &::part(background) {
        background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(assets/images/restaurant.png) no-repeat 0 0/100% 60%;
    }
`;

const StyledAvatar = styled(IonImg)`
    clip-path: circle();
    width: 60px;
`;

const StyledLabel = styled(IonLabel)`
    font-weight: 600;

    @media screen and (min-width: 375px){
        font-size: 12px;
    }
    @media screen and (min-width: 411px){
        font-size: 14px;
    }
`;

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
                <StyledBackgroundImg>
                    <IonGrid style={{height: '60%'}}>
                        <IonRow style={{height: '50%', alignItems: 'center', paddingLeft: '16px', paddingRight: '16px'}}>
                            <IonCol size="9" style={{}}>
                                <h2 style={{marginTop: '0', marginBottom: '0', color: '#fff', fontWeight: 600, letterSpacing: '0.03em', fontSize: '32px'}}>Welcome</h2>
                                <IonText style={{color: '#fff', fontWeight: 600, letterSpacing: '0.03em', fontSize: '18px'}}>{sessionStorage.getItem('nama')}</IonText>
                            </IonCol>
                            <IonCol style={{display: 'flex', justifyContent: 'center'}} size="3">
                                <StyledAvatar src={`assets/images/${sessionStorage.getItem('foto')}`} />
                            </IonCol>
                        </IonRow>
                        <IonRow style={{alignItems: 'center'}}>
                            <IonCard color="light" style={{flex: '1', borderRadius: '12px'}}>
                                <IonCardContent style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <div style={{display: 'flex', flex: '1', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                        <IonImg src="assets/icon/partners.png" style={{width: '60px'}} />
                                        <StyledLabel>Employee Data</StyledLabel>
                                    </div>
                                    <div style={{display: 'flex', flex: '1', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                        <IonImg src="assets/icon/schedule.png" style={{width: '60px'}} />
                                        <StyledLabel>Schedule</StyledLabel>
                                    </div>
                                    <div style={{display: 'flex', flex: '1', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                        <IonImg src="assets/icon/down-arrow.png" style={{width: '60px'}} />
                                        <StyledLabel>Download</StyledLabel>
                                    </div>
                                </IonCardContent>
                            </IonCard>
                        </IonRow>
                        <IonRow>
                            <IonCard color="light" style={{flex: '1', borderRadius: '12px'}}>
                                <IonCardHeader style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                                    <IonCardTitle color="primary" style={{fontWeight: 600, fontSize: '18px'}} className="card-title-home">Working hours</IonCardTitle>
                                    <IonDatetime style={{fontWeight: 600, fontSize: '12px', color: 'var(--ion-color-medium)'}} displayFormat="D MMMM YYYY" value={Date()}></IonDatetime>
                                </IonCardHeader>
                                <IonCardContent>
                                    <div style={{
                                        backgroundColor: 'var(--ion-background-color)',
                                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                                        paddingTop: '10px', paddingBottom: '10px', borderRadius: '16px'
                                    }}>
                                        <h2 style={{fontSize: '40px', fontWeight: 600}}>08:00</h2>
                                        <IonText style={{padding: '10px', fontSize: '22px', fontWeight: 'bold'}}> - </IonText>
                                        <h2 style={{fontSize: '40px', fontWeight: 600, color: 'var(--ion-color-danger)'}}>16:00</h2>
                                    </div>
                                    <div style={{display: 'flex', marginTop: '16px', justifyContent: 'center'}}>
                                        <IonButton style={{flex: '1', paddingInline: '16px'}}>Check in</IonButton>
                                        <IonButton color="danger" style={{flex: '1', paddingInline: '16px'}}>Check out</IonButton>
                                    </div>
                                </IonCardContent>
                            </IonCard>
                        </IonRow>
                    </IonGrid>
                    <div className="content" style={{height: '40%', backgroundColor: 'var(--ion-color-bg)'}}>
                        
                    </div>
                </StyledBackgroundImg>
            </IonPage>
        )
    }
}

export default HomePage;