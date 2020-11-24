import { IonPage, IonContent, IonGrid, IonRow, IonText, IonCol, IonImg, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonButton, IonDatetime, IonLabel } from '@ionic/react';
import Axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import AttendanceComp from '../../components/AttendanceComp/AttendanceComp';
import ScheduleComp from '../../components/ScheduleComp/ScheduleComp';
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

const StyledWhiteSpace = styled.div`
    @media screen and (min-height:812px){
        padding: 25%; 
        backgroundColor: var(--ion-color-bg);
    }
    @media screen and (min-height:823px){
        padding: 18%; 
        backgroundColor: var(--ion-color-bg);
    }
`;

interface Attendance {
    id_absen: number,
    jam_masuk: string,
    jam_keluar: string,
    tanggal: string,
    id_user: number,
    status: number
}

interface Schedule {
    id_schedule: number,
    jam_masuk: string,
    jam_keluar: string
}

// export interface HomeState {
//     attendance: Attendance[]
// }

const AttendanceState: Attendance[] = [];
const ScheduleState: Schedule[] = [];

class HomePage extends Component {
    _isMounted = false;
    state = {
        redirect: false,
        isChecked: false,
        checkIn: AttendanceState,
        checkOut: AttendanceState,
        schedule: ScheduleState
    }

    componentDidMount() {
        this._isMounted = true;
        if(sessionStorage.getItem("login")) {
            this.onGetCheckIn();
            this.onGetCheckOut();
            this.onGetWorkingHour();
        } else {
            this.setState({
                redirect: true
            });
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    onGetCheckIn = async () => {
        try {
            await Axios.get(`http://192.168.1.12/absensi_karyawan_api/public/checkin/${sessionStorage.getItem('id_user')}?api_token=${sessionStorage.getItem('api_token')}`)
            .then((result) => {
                if(this._isMounted) {
                    console.log('check-in', result);
                    this.setState({
                        checkIn: result.data.message
                    });
                }
            });
        } catch(error) {
            console.log(error);
        }
    }

    onGetCheckOut = async () => {
        try {
            await Axios.get(`http://192.168.1.12/absensi_karyawan_api/public/checkout/${sessionStorage.getItem('id_user')}?api_token=${sessionStorage.getItem('api_token')}`)
            .then((result) => {
                if(this._isMounted) {
                    console.log('check-out', result);
                    this.setState({
                        checkOut: result.data.message
                    });
                }
            });
        } catch(error) {
            console.log(error);
        }
    }

    onGetWorkingHour = async () => {
        try {
            await Axios.get(`http://192.168.1.12/absensi_karyawan_api/public/schedule?api_token=${sessionStorage.getItem('api_token')}`)
            .then((result) => {
                if(this._isMounted) {
                    console.log('schedule', result);
                    this.setState({
                        schedule: result.data
                    }, () => console.log('working-hour', this.state.schedule));
                }
            })
        } catch(error) {
            console.error();
        }
    }

    render() {
        if(this.state.redirect === true)     {
            return <Redirect to="/login" />
        }

        const CheckInLog = this.state.checkIn ? this.state.checkIn.map((item) => {
            return <AttendanceComp key={item.id_absen} time={item.jam_masuk} status={item.status} description="Check in" />
        }) : ''
        const CheckOutLog = this.state.checkOut ? this.state.checkOut.map((item) => {
            return <AttendanceComp key={item.id_absen} time={item.jam_keluar} status={item.status} description="Check Out" />
        }) : ''
        const WorkingHours = this.state.schedule ? this.state.schedule.map((item) => {
            return <ScheduleComp key={item.id_schedule} jam_masuk={item.jam_masuk} jam_keluar={item.jam_keluar} />
        }) : ''
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
                                    {WorkingHours}
                                    <div style={{display: 'flex', marginTop: '16px', justifyContent: 'center'}}>
                                        {!this.state.isChecked ? <IonButton style={{flex: '1', paddingInline: '16px'}} onClick={() => {
                                            this.setState({
                                                isChecked: true
                                            });
                                            sessionStorage.setItem('checkin', 'true');
                                        }}>Check in</IonButton> : ''}
                                        {this.state.isChecked ? <IonButton color="danger" style={{flex: '1', paddingInline: '16px'}} onClick={() => {
                                            this.setState({
                                                isChecked: false
                                            });
                                            sessionStorage.removeItem('checkin');
                                        }}>Check out</IonButton> : ''}
                                    </div>
                                </IonCardContent>
                            </IonCard>
                        </IonRow>
                    </IonGrid>
                    <div className="content" style={{height: '40%', backgroundColor: 'var(--ion-color-bg)'}}>
                        <StyledWhiteSpace className="blankspace"></StyledWhiteSpace>
                        {CheckOutLog}
                        {CheckInLog}
                    </div>
                </StyledBackgroundImg>
            </IonPage>
        )
    }
}

export default HomePage;