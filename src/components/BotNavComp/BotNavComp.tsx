import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonFab, IonFabButton, IonAlert } from '@ionic/react';
import { home, scan, personCircle } from 'ionicons/icons';
import React, { Component } from 'react';
import { Route } from 'react-router';
import HomePage from '../../pages/HomePage/HomePage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import ScanPage from '../../pages/ScanPage/ScanPage';

import OvertimePage from '../../pages/Overtime/OvertimePage';
import ApprovalPage from '../../pages/Approval/ApprovalPage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import styled from 'styled-components';

import './BotNavComp.css';
import { Geolocation } from '@capacitor/core';

const StyledFab = styled(IonFab)`
@media screen and (min-height: 500px){
        bottom: 2.7%;
    }
    @media screen and (min-height: 700px){
        bottom: 3%;
    }
    @media screen and (min-height: 720px){
        bottom: 2.2%;
    }
    @media screen and (min-height: 731px){
        bottom: 2.7%;
    }
    @media screen and (min-height: 812px){
        bottom: 2.1%;
    }
    @media screen and (min-height: 820px){
        bottom: 2.5%;
    }
    @media screen and (min-height: 1024px){
        bottom: 1.8%;
    }
    @media screen and (min-height: 1366px){
        bottom: 1.3%;
    }
`;

const StyledFabButton = styled(IonFabButton)`
    --box-shadow: none;
    border: 6px solid var(--ion-color-light);
    border-radius: 50%;
`;

class BotNavComp extends Component {
    state = {
        showAlert: false
    }

    onScan = () => {
        if(sessionStorage.getItem('checkin')) {
            this.setState({
                showAlert: true
            });
        } else {
            this.openScanner();
        }
    }

    openScanner = async () => {
        const data = await BarcodeScanner.scan(
            {
                // preferFrontCamera : true,
                // showFlipCameraButton : true,
                showTorchButton : true,
                prompt : "Place a barcode inside the scan area",
            }
        );
        this.getLocation();
        console.log(data);
        this.setState({
            value: data.text
        });
        // console.log(`Barcode data: ${data.text}`);
    };

    getLocation = async () => {
        try {
            await Geolocation.getCurrentPosition()
            .then((result) => {
                console.log(result);
                this.setState({
                    latitude: result.coords.latitude,
                    longitude: result.coords.longitude
                })
            })
        } catch (error) {
            console.log(error);
        }
    }


    render() {
        return (
            <>
            <IonAlert
                isOpen={this.state.showAlert}
                onDidDismiss={() => this.setState({showAlert: false})}
                cssClass='my-custom-class'
                header={'Checkout first'}
                message={"checkout dulu bang"}
                buttons={['OK']}
            />
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/home" component={HomePage} exact={true} />
                    <Route path="/overtime" component={OvertimePage} exact={true} />
                    <Route path="/scan" component={ScanPage} exact={true} />
                    <Route path="/approval" component={ApprovalPage} exact={true} />
                    <Route path="/profile" component={ProfilePage} exact={true} />
                </IonRouterOutlet>
                <IonTabBar color="light" slot="bottom">
                <IonTabButton style={{'--ripple-color': '#ffffff'}} tab="home" href="/home">
                    <IonIcon size="medium" icon={home}  />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton style={{'--ripple-color': '#ffffff'}} tab="overtime" href="/overtime">
                    <IonIcon size="medium" src="assets/icon/clock.svg"  />
                    <IonLabel>Overtime</IonLabel>
                </IonTabButton>
                <IonTabButton style={{'--ripple-color': '#ffffff'}} tab="overtime" href="/overtime">
                    <IonIcon size="medium" />
                    <IonLabel>Scan</IonLabel>
                </IonTabButton>
                <IonTabButton style={{'--ripple-color': '#ffffff'}} tab="approval" href="/approval">
                    <IonIcon size="medium" src="assets/icon/clipboard-text.svg"  />
                    <IonLabel>Approval</IonLabel>
                </IonTabButton>
                <IonTabButton style={{'--ripple-color': '#ffffff'}} tab="profile" href="/profile">
                    <IonIcon size="medium" icon={personCircle}  />
                    <IonLabel>Profile</IonLabel>
                </IonTabButton>
                </IonTabBar>
            </IonTabs>
            <StyledFab horizontal="center" className="fab-scan">
                <StyledFabButton onClick={() => this.onScan()}>
                    <IonIcon size="medium" icon={scan}  />
                    {/* <IonLabel>Scan</IonLabel> */}
                </StyledFabButton>
            </StyledFab>
            </>
        )
    }

}

export default BotNavComp;