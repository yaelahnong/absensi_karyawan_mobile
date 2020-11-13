import { 
    IonButton,
    IonCard, 
    IonCardContent, 
    IonContent, 
    IonGrid, 
    IonInput, 
    IonItem, 
    IonList, 
    IonPage, 
    IonRow
} from '@ionic/react';
import React, { Component, FormEvent } from 'react';
import styled from 'styled-components';

import '@ionic/react/css/text-alignment.css';

const Content = styled(IonContent)`
    --background: url(assets/images/restaurant.png) 0 0/100% 100% no-repeat;
`;

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    componentDidMount() {

    }

    handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            window.location.href="/";
        } catch (error) {
            console.log(error);
        }
    }

    handleInputChange = (e: { target: { name: string; value: string; }; }) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    

    render() {
        return (
            <IonPage>
                <Content fullscreen>
                    {/* <IonImg src="assets/images/restaurant.png" /> */}
                    <IonGrid style={{height: '100%'}}>
                        <IonRow style={{height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <IonCard style={{width: '90%'}}>
                                <IonCardContent>
                                    <form onSubmit={e => this.handleSubmit(e)} action="post">
                                        <IonList className="ion-text-center">
                                            <IonItem>
                                                <IonInput 
                                                    type="email" 
                                                    name="email"
                                                    placeholder="Email"
                                                    onIonInput={(e: any) => this.handleInputChange(e)} 
                                                />
                                            </IonItem>
                                            <IonItem>
                                                <IonInput 
                                                    type="password" 
                                                    name="password"
                                                    placeholder="Password"
                                                    onIonInput={(e: any) => this.handleInputChange(e)} 
                                                />
                                            </IonItem>
                                            
                                            <IonButton type="submit" style={{width: '33ch'}}>Login</IonButton>
                                        </IonList>
                                    </form>
                                </IonCardContent>
                            </IonCard>
                        </IonRow>
                    </IonGrid>
                </Content>
            </IonPage>
        )
    }
}

export default Login;