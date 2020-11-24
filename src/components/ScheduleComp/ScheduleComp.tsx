import { IonDatetime, IonText } from '@ionic/react';
import React from 'react';


interface ContainerProps {
    jam_masuk: string,
    jam_keluar: string
}


const ScheduleComp: React.FC<ContainerProps> = ({jam_masuk, jam_keluar}) => {
    return (
        <div style={{
            backgroundColor: 'var(--ion-background-color)',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            paddingTop: '10px', paddingBottom: '10px', borderRadius: '16px'
        }}>
            <IonText style={{fontSize: '40px', fontWeight: 600}}>
                <IonDatetime displayFormat="HH:mm" value={jam_masuk}></IonDatetime>
            </IonText>
            <IonText style={{padding: '10px', fontSize: '22px', fontWeight: 'bold'}}> - </IonText>
            <IonText style={{fontSize: '40px', fontWeight: 600}}>
                <IonDatetime displayFormat="HH:mm" value={jam_keluar}></IonDatetime>
            </IonText>
        </div>
    )
}

export default ScheduleComp;