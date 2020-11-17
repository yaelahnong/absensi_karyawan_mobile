import { IonAlert, IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonInput, IonLabel, IonPage, IonRow, IonSpinner, IonText, IonTitle, IonToolbar } from '@ionic/react';
import Axios from 'axios';
import React, { Component, FormEvent } from 'react';
import styled from 'styled-components';

const StyledGrid = styled(IonGrid)`
    padding-inline-start: 12.5px;
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
    margin-bottom: 10px;
`;

const FlexBtn = styled.div`
    display: flex;
    justify-content: center;
`;

class ForgotPassword extends Component {
    state = {
        email: '',
        showAlert: false,
        title: '',
        message: '',
        isLoading: false
    }

    handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        this.onSendEmail();
    }

    handleInputChange = (e: { target: { name: string; value: string; }; }) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSendEmail = () => {
        this.setState({
            isLoading: true
        });
        try {
            Axios.post('http://localhost:8000/forgot_password', {
                email: this.state.email
            }).then((result) => {
                this.setState({
                    isLoading: false
                });
                let title = '';
                let message = '';
                if(result.data.success === false) {
                    title = 'Incorrect Email Address';
                    message = result.data.message;
                    this.setState({
                        title: title,
                        message: message,
                        showAlert: true
                    });
                } else {
                    title = 'Email Sent';
                    message = result.data.message;
                    this.setState({
                        title: title,
                        message: message,
                        showAlert: true
                    });
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
    

    render() {
        return (
            <IonPage>
                <IonContent fullscreen>
                    <IonAlert
                        isOpen={this.state.showAlert}
                        onDidDismiss={() => this.setState({showAlert: false})}
                        cssClass='my-custom-class'
                        header={this.state.title ? this.state.title : ''}
                        message={this.state.message ? this.state.message : ''}
                        buttons={['OK']}
                    />
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
                                <IonButton type="submit" style={{width: '100%', marginLeft: '0', marginRight: '0', textTransform: 'capitalize'}}>
                                    {this.state.isLoading ? <IonSpinner color="light" /> : 'Send'}
                                </IonButton>
                            </FlexBtn>
                        </form>
                    </div>
                </IonContent>
            </IonPage>
        )
    }
}

export default ForgotPassword;