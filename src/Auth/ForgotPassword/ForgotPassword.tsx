import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';
import React, { Component, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledGrid = styled(IonGrid)`
    padding-inline-start: 12.5px;
`;

const InputItem = styled(IonItem)`
    --padding-start: 0;
    --inner-padding-end: 0;
    margin-bottom: 5px;
`;

const StyledInput = styled(IonInput)`
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    border: 1.5px solid #eef0f4;
    --padding-start: 10px;
    --padding-end: 10px;
    --padding-top: 7px;
    --padding-bottom: 7px;
    font-family: 'Poppins';
    font-size: 14px;
    width: 100%;
    line-height: 20px;
    margin-bottom: 5px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #a0a0a0;
    padding-right: 8px;
    margin-bottom: 5px;
    font-size: 12px;
`;

const FlexBtn = styled.div`
    display: flex;
    justify-content: center;
`;

class ForgotPassword extends Component {

    handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
    }

    handleInputChange = (e: { target: { name: string; value: string; }; }) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    

    render() {
        return (
            <IonPage>
                <IonContent fullscreen>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/"></IonBackButton>
                        </IonButtons>
                        <IonTitle>Back</IonTitle>
                    </IonToolbar>
                    <StyledGrid>
                        <IonRow>
                            <IonCol>
                                <IonText>
                                    <h3 style={{fontWeight: 'bold'}}>Reset Password</h3>
                                </IonText>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <p style={{margin: '0', fontSize: '12px', maxWidth: '271px'}}>
                                    Enter the email associated with your account
                                    and we'll send an email with instructions to
                                    reset your password.
                                </p>
                            </IonCol>
                        </IonRow>
                    </StyledGrid>
                    <div className="forgot-password" style={{paddingLeft: '16px', paddingRight: '16px', marginTop: '10px'}}>
                        <form onSubmit={e => this.handleSubmit(e)} action="post">
                            <IonLabel style={{color: '#6c7787', fontSize: '14px'}}>Email address</IonLabel>
                            <StyledInput 
                                type="email" 
                                name="email"
                                autocomplete="off"
                                autoCapitalize="off"
                                autoCorrect="off"
                                onIonInput={(e: any) => this.handleInputChange(e)} 
                            />
                            <FlexBtn>
                                <IonButton type="submit" style={{width: '100%', marginLeft: '0', marginRight: '0', textTransform: 'capitalize'}}>Send</IonButton>
                            </FlexBtn>
                        </form>
                    </div>
                </IonContent>
            </IonPage>
        )
    }
}

export default ForgotPassword;