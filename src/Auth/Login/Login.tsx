import { 
    IonAlert,
    IonButton,
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardTitle, 
    IonContent, 
    IonFooter, 
    IonGrid, 
    IonIcon, 
    IonImg, 
    IonInput, 
    IonItem, 
    IonList, 
    IonPage, 
    IonRow,
    IonSpinner,
    IonText,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React, { Component, FormEvent } from 'react';
import { lockClosedOutline, lockClosedSharp, mailOutline, mailSharp  } from 'ionicons/icons';
import styled from 'styled-components';

import '@ionic/react/css/text-alignment.css';
import './Login.css';
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';

const Content = styled(IonContent)`
    &::part(background) {
        background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(assets/images/restaurant.png) 0 0/100% 100% no-repeat;
    }
`;

const StyledCard = styled(IonCard)`
    width: 90%; 
    border-radius: 16px;
`;

const InputItem = styled(IonItem)`
    --padding-start: 0;
    --inner-padding-end: 0;
    margin-bottom: 10px;
    border-radius: 8px;
`;

const StyledInput = styled(IonInput)`
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: #e5e7f0;
    font-family: 'Poppins';
    font-size: 14px;
    --padding-top: 11.5px;
    --padding-bottom: 11.5px;
`;

const StyledIcon = styled(IonIcon)`
    padding: 10px; 
    background-color: #e5e7f0;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    box-sizing: border-box;
    font-size: 24px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #a0a0a0; 
    margin-bottom: 6px;
    font-size: 12px;
`;

const FlexBtn = styled.div`
    display: flex;
    justify-content: center;
    
`;

const StyledFooter = styled(IonFooter)`
    @media (max-height: 500px){
        display: none;
    }
`;

class Login extends Component {
    _isMounted = false;

    state = {
        email: '',
        password: '',
        redirect: false,
        showAlert: false,
        isLoading: false
    }

    componentDidMount() {
        if(sessionStorage.getItem('login')) {
            this.setState({
                redirect: true
            });
        }
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }


    handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        this.onUserLogin();
    }

    handleInputChange = (e: { target: { name: string; value: string; }; }) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    onUserLogin = async () => {
        this.setState({
            isLoading: true
        });
        try {
            await Axios.post('http://192.168.1.12/absensi_karyawan_api/public/login', {
                email: this.state.email,
                password: this.state.password
            }).then((result) => {
                this.setState({
                    isLoading: false
                });
                console.log(result);
                let data = result.data;
                if(data.success === true) {
                    sessionStorage.setItem('login', 'true');
                    sessionStorage.setItem('id_user', data.message.id_user);
                    sessionStorage.setItem('nama', data.message.nama);
                    sessionStorage.setItem('email', data.message.email);
                    sessionStorage.setItem('no_telp', data.message.no_telp);
                    sessionStorage.setItem('foto', data.message.foto);
                    sessionStorage.setItem('api_token', data.api_token);
                    this.setState({
                        redirect: true
                    })
                } else {
                    this.setState({
                        showAlert: true
                    });
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        if(this.state.redirect === true) {
            return <Redirect to={'/home'} />
        }
        return (
            <IonPage>
                <Content fullscreen>
                    <IonAlert
                        isOpen={this.state.showAlert}
                        onDidDismiss={() => this.setState({showAlert: false})}
                        cssClass='my-custom-class'
                        header={'Incorrect Email or Password'}
                        message={"The email or password you entered is incorrect. Please try again."}
                        buttons={['OK']}
                    />
                    {/* <IonImg src="assets/images/restaurant.png" /> */}
                    <IonGrid style={{height: '100%'}}>
                        <IonRow style={{height: '30%', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                            <IonText>
                                <IonImg src="./assets/icon/qrcode-scan-36.png" />
                                {/* <h2 style={{color: '#fff', fontWeight: 'bold'}}>Company logo</h2> */}
                            </IonText>
                        </IonRow>
                        <IonRow style={{height: '70%', flexDirection: 'column', alignItems: 'center'}}>
                            <StyledCard color="light">
                                <IonCardHeader>
                                    <IonCardTitle style={{fontWeight: '600', fontSize: '22px', color: '#30419b'}}>Login</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <form color="light" onSubmit={e => this.handleSubmit(e)} action="post">
                                        <IonList style={{backgroundColor: '#ffffff'}}>
                                            <InputItem lines="none">
                                                <StyledIcon icon={mailOutline} color="primary" ios={mailOutline} md={mailSharp} />
                                                <StyledInput 
                                                    type="email" 
                                                    name="email"
                                                    placeholder="Email"
                                                    autocomplete="off"
                                                    autoCapitalize="off"
                                                    autoCorrect="off"
                                                    required={true}
                                                    onIonInput={(e: any) => this.handleInputChange(e)} 
                                                />
                                            </InputItem>
                                            <InputItem lines="none">
                                                <StyledIcon icon={lockClosedOutline} color="primary" ios={lockClosedOutline} md={lockClosedSharp} />
                                                <StyledInput 
                                                    type="password" 
                                                    name="password"
                                                    placeholder="Password"
                                                    required={true}
                                                    onIonInput={(e: any) => this.handleInputChange(e)} 
                                                />
                                            </InputItem>
                                            <div className="forgot-password-link" style={{display: 'flex', justifyContent: 'flex-end'}}>
                                                <StyledLink to="/forgot-password">Forgot Password?</StyledLink>
                                            </div>
                                            <FlexBtn>
                                                <IonButton type="submit" style={{width: '100%', marginLeft: '0', marginRight: '0', textTransform: 'capitalize'}}>
                                                    {this.state.isLoading ? <IonSpinner color="light" /> : 'Login'}
                                                </IonButton>
                                            </FlexBtn>
                                        </IonList>
                                    </form>
                                </IonCardContent>
                            </StyledCard>
                        </IonRow>
                    </IonGrid>
                </Content>
                <StyledFooter>
                    <IonToolbar style={{'--background': '#222d6c', color: '#ffffff'}}>
                        <IonTitle style={{fontSize: '10px', textAlign: 'center'}}>2020 &copy; Lingkar 9 Titian Media. All rights reserved.</IonTitle>
                    </IonToolbar>
                </StyledFooter>
            </IonPage>
        )
    }
}

export default Login;