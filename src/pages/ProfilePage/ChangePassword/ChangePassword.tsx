import { IonAlert, IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonPage, IonRow, IonSpinner, IonText, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import Axios from 'axios';
import React, { Component, FormEvent } from 'react';
import styled from 'styled-components';
import './ChangePassword.css';
import '../../../theme/variables.css';
import { Redirect } from 'react-router';
import { timeSharp } from 'ionicons/icons';

const StyledGrid = styled(IonGrid)`
    padding-inline-start: 12.5px;
`;

const StyledItem = styled(IonItem)`
    --padding-start: 0;
    --inner-padding-end: 0;
    --min-height: 0;
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

const StyledHelper = styled(IonText)`
    font-size: 12px;
`;

const FlexBtn = styled.div`
display: flex;
justify-content: center;
`;

class ChangePassword extends Component {
    state = {
        password: '',
        newPassword: '',
        confirmPassword: '',
        showAlert: false,
        title: '',
        message: '',
        isLoading: false,
        openToast: false,
        redirect: false,
        errorMsg: ''
    }

    handleSubmit = (e: FormEvent) => {
        if(this.handleValidation()) {
            e.preventDefault();
            this.onChangePassword();
        }
    }

    handleValidation = () => {
        let errorMsg = '';
        let isValid = true;

        if(this.state.newPassword !== this.state.confirmPassword) {
            isValid = false;
            errorMsg = 'Password must be same'
        }

        this.setState({
            errorMsg: errorMsg
        });
        return isValid;
    }

    handleInputChange = (e: { target: { name: string; value: string; }; }) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onChangePassword = async () => {
        this.setState({
            isLoading: true
        });
        try {
            await Axios.put(`http://192.168.1.12/absensi_karyawan_api/public/changePassword/${sessionStorage.getItem('id_user')}?api_token=${sessionStorage.getItem('api_token')}`, {
                password: this.state.password,
                new_password: this.state.newPassword
            }).then((result) => {
                console.log(result);
                this.setState({
                    isLoading: false
                });
                if(result.data.success === false) {
                    this.setState({
                        title: result.data.title,
                        message: result.data.message,
                        showAlert: true
                    });
                } else {
                    this.setState({
                        message: result.data.message,
                        openToast: true
                    }, () => {
                        setTimeout(() => {
                            this.setState({
                                redirect: true
                            });
                        }, 2000)
                    });
                }
            });
        } catch(error) {
            console.log(error);
        }
    }
    

    render() {
        if(this.state.redirect) {
            return <Redirect to="/profile" />
        }
        return (
            <IonPage>
                <IonContent fullscreen color="light">
                    <IonAlert
                        isOpen={this.state.showAlert}
                        onDidDismiss={() => this.setState({showAlert: false})}
                        cssClass='my-custom-class'
                        header="Error"
                        message="Your old password was incorrect entered incorrecly. Please try again."
                        buttons={['OK']}
                    />
                    <IonToast
                        isOpen={this.state.openToast}
                        onDidDismiss={() => {
                            this.setState({
                                openToast: false
                            })
                        }}
                        message={this.state.message ? this.state.message : ''}
                        duration={3000}
                    />
                    <IonToolbar color="light">
                        <IonButtons className="change-back-button" slot="start">
                            <IonBackButton defaultHref="/profile"></IonBackButton>
                        </IonButtons>
                        <IonTitle color="black">Change Password</IonTitle>
                    </IonToolbar>
                    <div className="forgot-password" style={{paddingLeft: '16px', paddingRight: '16px', marginTop: '50px'}}>
                            <StyledItem color="light" lines="none">
                                <IonLabel style={{color: '#6c7787', fontSize: '14px', margin: '0', fontFamily: 'Poppins, sans-serif'}}>Current Password</IonLabel>
                            </StyledItem>
                            <StyledItem color="light" lines="none">
                                <StyledInput 
                                    type="password" 
                                    name="password"
                                    autocomplete="off"
                                    autoCapitalize="off"
                                    autoCorrect="off"
                                    required={true}
                                    onIonInput={(e: any) => this.handleInputChange(e)} 
                                />
                            </StyledItem>
                            <StyledItem color="light" lines="none">
                                <IonLabel style={{color: '#6c7787', fontSize: '14px', margin: '0', fontFamily: 'Poppins, sans-serif'}}>New Password</IonLabel>
                            </StyledItem>
                            <StyledItem color="light" lines="none">
                                <StyledInput 
                                    type="password" 
                                    name="newPassword"
                                    autocomplete="off"
                                    autoCapitalize="off"
                                    autoCorrect="off"
                                    minlength={6}
                                    required={true}
                                    onIonInput={(e: any) => this.handleInputChange(e)} 
                                />
                            </StyledItem>
                            <StyledItem color="light" lines="none">
                                <IonLabel style={{color: '#6c7787', fontSize: '14px', margin: '0', fontFamily: 'Poppins, sans-serif'}}>Confirm Password</IonLabel>
                            </StyledItem>
                            <StyledItem color="light" lines="none">
                                <StyledInput 
                                    type="password" 
                                    name="confirmPassword"
                                    autocomplete="off"
                                    autoCapitalize="off"
                                    autoCorrect="off"
                                    minlength={6}
                                    required={true}
                                    onIonInput={(e: any) => this.handleInputChange(e)} 
                                />
                            </StyledItem>
                            <StyledItem color="light" lines="none">
                                {this.state.errorMsg ? <StyledHelper color="danger">{this.state.errorMsg}</StyledHelper> : ''}
                            </StyledItem>
                            <FlexBtn>
                                <IonButton onClick={e => this.handleSubmit(e)} style={{width: '100%', marginLeft: '0', marginRight: '0', textTransform: 'capitalize'}}>
                                    {this.state.isLoading ? <IonSpinner color="light" /> : 'Change'}
                                </IonButton>
                            </FlexBtn>
                    </div>
                </IonContent>
            </IonPage>
        )
    }
}

export default ChangePassword;