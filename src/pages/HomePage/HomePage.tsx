import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonThumbnail, IonGrid, IonRow, IonText, IonCol, IonImg, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonButton } from '@ionic/react';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import ExploreContainer from '../../components/ExploreContainer';
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
                                    <div style={{width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'grey'}}></div>
                                    <div style={{width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'grey'}}></div>
                                    <div style={{width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'grey'}}></div>
                                </IonCardContent>
                            </IonCard>
                        </IonRow>
                        <IonRow>
                            <IonCard color="light" style={{flex: '1', borderRadius: '12px'}}>
                                <IonCardHeader>
                                    <IonCardTitle color="primary" style={{fontWeight: 600}}>Working hours</IonCardTitle>
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
                    <div className="content" style={{height: '40%', backgroundColor: '#e5e7f0'}}>
                        
                    </div>
                </StyledBackgroundImg>
            </IonPage>
        )
    }
}

export default HomePage;