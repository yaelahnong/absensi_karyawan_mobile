import { IonButton, IonContent, IonGrid, IonInput, IonLabel, IonPage, IonRow } from '@ionic/react';
import Axios from 'axios';
import React, { Component, FormEvent } from 'react';
import { Redirect, RouteComponentProps, withRouter } from 'react-router';
import styled from 'styled-components';

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

interface IResetPassword {
    token: string 
}

interface MatchProps extends RouteComponentProps<IResetPassword> {
    params: string
}

class ResetPassword extends Component<MatchProps> {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        error: false,
        errorMsg: '',
        isLoading: true
    }

    async componentDidMount() {
        try {
            await Axios.get(`http://localhost:8000/reset/${this.props.match.params.token}`)
                .then((result) => {
                    console.log(result);
                    if(result.data.message === 'Token valid') {
                        this.setState({
                            email: result.data.email,
                            isLoading: false
                        });
                    } else {
                        this.setState({
                            error: true,
                            isLoading: false
                        });
                    }
                }).catch((error) => {
                    console.log('error: ', error);
                }) 
        } catch (error) {
            console.log(error);
        }
        
    }

    handleSubmit = (e: FormEvent) => {
        if( this.handleValidation() ) {
            e.preventDefault();
            this.onUpdatePassword();
        }
    }

    onUpdatePassword = async () => {
        try {
            await Axios.put(`http://localhost:8000/updatePasswordViaEmail/${this.props.match.params.token}`, {
                email: this.state.email,
                password: this.state.password
            }).then((result) => {
                if( result.data.message === 'Password updated' ) {
                    this.onLoginUser();
                } else {
                    this.setState({
                        error: true
                    })
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    onLoginUser = async () => {
        try {
            await Axios.post('http://localhost:8000/login', {
                email: this.state.email,
                password: this.state.password
            }).then((result) => {
                if(result.data.success === true) {
                    sessionStorage.setItem('login', 'true');
                    sessionStorage.setItem('id_user', result.data.message.id_user);
                    sessionStorage.setItem('nama', result.data.message.nama);
                    sessionStorage.setItem('email', result.data.message.email);
                    sessionStorage.setItem('no_telp', result.data.message.no_telp);
                    localStorage.setItem('api_token', result.data.api_token);
                    this.setState({
                        redirect: true
                    });
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    handleValidation = () => {
        let errorMsg = '';
        let isValid = true;

        if( !this.state.email ) {
            isValid = false;
        }

        if( !this.state.password ) {
            isValid = false;
            errorMsg = 'Cannot be empty';
        }
        
        if( !this.state.confirmPassword ) {
            isValid = false;
            errorMsg = 'Cannot be empty';
        }

        if( this.state.password !== this.state.confirmPassword ) {
            isValid = false;
            errorMsg = 'Password must be same';
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
    

    render() {
        if(this.state.error === true) {
            return <Redirect to={'/login'} />
        }

        if(sessionStorage.getItem('login')) {
            return <Redirect to={'/'} />
        }
        if(this.state.isLoading) {
            return <div>Loading ...</div>
        } else {
            return (
                <IonPage>
                    <IonContent fullscreen>
                        <IonGrid style={{height: '95%'}}>
                            <IonRow style={{height: '95%', alignItems: 'center', justifyContent: 'center'}}>
                                <form onSubmit={e => this.handleSubmit(e)} action="post" style={{width: '90%'}}>
                                    <IonLabel style={{color: '#6c7787', fontSize: '14px'}}>New Password</IonLabel>
                                    <StyledInput 
                                        type="password" 
                                        name="password"
                                        onIonInput={(e: any) => this.handleInputChange(e)} 
                                    />
                                    <IonLabel style={{color: '#6c7787', fontSize: '14px'}}>Confirm Password</IonLabel>
                                    <StyledInput 
                                        type="password" 
                                        name="confirmPassword"
                                        onIonInput={(e: any) => this.handleInputChange(e)} 
                                    />
                                    <FlexBtn>
                                        <IonButton type="submit" style={{width: '100%', marginLeft: '0', marginRight: '0', textTransform: 'capitalize'}}>Reset</IonButton>
                                    </FlexBtn>
                                </form>
                            </IonRow>
                        </IonGrid>
                    </IonContent>
                </IonPage>
            )
        }
    }
}

export default withRouter(ResetPassword);